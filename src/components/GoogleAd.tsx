import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

interface GoogleAdProps {
  placementId: string;
  slot?: string;
  client?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
  label?: string;
}

export const GoogleAd: React.FC<GoogleAdProps> = ({
  placementId,
  slot = '1234567890',
  client,
  format = 'auto',
  responsive = true,
  className = '',
  label = 'ADVERTISEMENT'
}) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const isPushedRef = useRef<boolean>(false);

  // Read AdSense Client ID from props or Vite environment variable, or use fallback demo ID
  const metaEnv = typeof import.meta !== 'undefined' ? (import.meta as unknown as { env?: Record<string, string> })?.env : undefined;
  const adClient =
    client ||
    metaEnv?.VITE_GOOGLE_ADSENSE_CLIENT_ID ||
    'ca-pub-0000000000000000';

  const isDemo = !adClient || adClient === 'ca-pub-0000000000000000';

  useEffect(() => {
    // Only attempt to load AdSense when a real publisher ID is supplied
    if (isDemo || isPushedRef.current) return;

    try {
      if (typeof window !== 'undefined') {
        // Dynamically inject script if not present
        if (!document.querySelector(`script[src*="pagead2.googlesyndication.com"]`)) {
          const script = document.createElement('script');
          script.async = true;
          script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
          script.crossOrigin = 'anonymous';
          document.head.appendChild(script);
        }

        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        isPushedRef.current = true;
      }
    } catch (err) {
      console.debug('AdSense script initialisation note:', err);
    }
  }, [adClient, isDemo]);

  return (
    <aside
      id={placementId}
      aria-label="Sponsored Advertisement"
      className={`w-full max-w-5xl mx-auto px-4 my-6 flex flex-col items-center justify-center ${className}`}
    >
      <div className="w-full flex items-center justify-center space-x-2 mb-1.5">
        <span className="h-px w-8 bg-[#E2DCB9]" />
        <span className="text-[10px] tracking-widest font-semibold uppercase text-[#828892] select-none">
          {label}
        </span>
        <span className="h-px w-8 bg-[#E2DCB9]" />
      </div>

      <div className="w-full min-h-[90px] sm:min-h-[110px] bg-[#FAF8F2] border border-[#E2DCB9] rounded-2xl flex items-center justify-center overflow-hidden transition relative shadow-xs">
        <ins
          ref={adRef}
          className="adsbygoogle block w-full text-center"
          style={{ display: 'block', minHeight: '90px', width: '100%' }}
          data-ad-client={adClient}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
        
        {/* Subtle informational watermark visible only when ad slot has not loaded an iframe */}
        <div className="absolute pointer-events-none text-center px-4 py-2 opacity-75">
          <p className="text-[11px] text-[#003865] font-medium">Google Ad Placement</p>
          <p className="text-[10px] text-[#828892] font-mono">Slot ID: {slot} &bull; Responsive Display Unit</p>
        </div>
      </div>
    </aside>
  );
};
