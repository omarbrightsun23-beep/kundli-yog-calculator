import React from 'react';
import { X, FileCheck, AlertCircle } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="terms-conditions-modal"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-white border border-[#E2DCB9] rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-left shadow-2xl relative my-8 max-h-[85vh] overflow-y-auto">
        <button
          id="close-terms-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#828892] hover:text-[#003865] p-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs text-[#003865] font-bold mb-1">
          <FileCheck className="w-4 h-4 text-[#FBAF3C]" />
          <span>User Agreement</span>
        </div>

        <h3 className="text-2xl font-bold text-[#003865] font-cinzel mb-4">
          Terms and Conditions
        </h3>
        <p className="text-xs text-[#828892] mb-6">
          Effective Date: September 2026 • Please read carefully before using KundliYog services.
        </p>

        <div className="space-y-4 text-xs sm:text-sm text-[#2C3138] font-normal leading-relaxed">
          <h4 className="text-[#003865] font-bold font-cinzel text-sm">1. Acceptance of Terms</h4>
          <p>
            By accessing or calculating your astrological chart on KundliYog, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please discontinue use of this site.
          </p>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm">2. Permissible Use &amp; Purpose</h4>
          <p>
            All mathematical calculations, yoga evaluations, and Vimshottari Dasha intervals are provided strictly for educational, historical research, and spiritual contemplation purposes. KundliYog is not intended to serve as certified legal, financial, medical, or life-safety guidance.
          </p>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm">3. Intellectual Property</h4>
          <p>
            The software design, astronomical scoring models, SVG visualization schemas, and custom editorial content of KundliYog are protected by intellectual property laws. You may freely share your personal chart dossiers and story cards for non-commercial purposes.
          </p>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm">4. Limitation of Liability</h4>
          <p>
            In no event shall KundliYog, its developers, or contributors be held liable for any decisions, life choices, business transactions, or perceived karmic interpretations made by individuals based on the planetary ephemeris calculations of this site.
          </p>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm">5. Service Availability</h4>
          <p>
            We strive for 99.9% uptime and continuous mathematical accuracy based on the Chitrapaksha Lahiri Ayanamsa standard. We reserve the right to update our astronomical calculations to reflect refined planetary ephemeris data.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#E2DCB9] text-right">
          <button
            id="terms-accept-btn"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#003865] hover:bg-[#002b4d] text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-xs"
          >
            Agree &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
