import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, Server } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="privacy-policy-modal"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-white border border-[#E2DCB9] rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-left shadow-2xl relative my-8 max-h-[85vh] overflow-y-auto">
        <button
          id="close-privacy-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#828892] hover:text-[#003865] p-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs text-[#003865] font-bold mb-1">
          <ShieldCheck className="w-4 h-4 text-[#FBAF3C]" />
          <span>Trust &amp; Data Protection</span>
        </div>

        <h3 className="text-2xl font-bold text-[#003865] font-cinzel mb-4">
          Privacy Policy
        </h3>
        <p className="text-xs text-[#828892] mb-6">
          Last Updated: September 2026 • Compliant with GDPR, CCPA, and Global Privacy Standards
        </p>

        <div className="space-y-4 text-xs sm:text-sm text-[#2C3138] font-normal leading-relaxed">
          <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E2DCB9] flex items-start space-x-3">
            <Lock className="w-5 h-5 text-[#FBAF3C] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#003865] block font-bold">100% Client-Side Ephemeris Execution</strong>
              <span>
                Your birth particulars (Name, Date of Birth, Exact Time of Birth, and Geographic Coordinates) are computed locally inside your web browser. We do NOT harvest, store, or sell your personal birth details to third parties or advertising brokers.
              </span>
            </div>
          </div>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm pt-2">1. Information Processed</h4>
          <p>
            When you utilize the KundliYog calculator, you input birth data required to calculate local sidereal time, Julian day, and planetary longitudes. This data resides solely in volatile browser memory during your active session.
          </p>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm pt-2">2. Cookies and Tracking</h4>
          <p>
            KundliYog uses standard functional web storage (such as localStorage) solely to preserve your active chart style preferences. We do not engage in cross-site tracking cookies.
          </p>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm pt-2">3. Third-Party Integrations</h4>
          <p>
            When you choose to share your story card or results via WhatsApp or copy links to your clipboard, interactions happen directly through your local device permissions. No personal horoscope dossiers are broadcasted without your explicit user click.
          </p>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm pt-2">4. Your Rights</h4>
          <p>
            You have the absolute right to clear your browser cache at any point to erase any locally remembered coordinates. For any questions regarding privacy practices, contact us at <strong className="text-[#003865]">privacy@kundliyogcalculator.com</strong>.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#E2DCB9] text-right">
          <button
            id="privacy-close-btn"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#003865] hover:bg-[#002b4d] text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-xs"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
