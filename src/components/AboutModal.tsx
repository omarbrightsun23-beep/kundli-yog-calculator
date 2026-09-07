import React from 'react';
import { X, BookOpen, Compass, Award, ShieldCheck, Heart } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="about-us-modal"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-white border border-[#E2DCB9] rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-left shadow-2xl relative my-8 max-h-[85vh] overflow-y-auto">
        <button
          id="close-about-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#828892] hover:text-[#003865] p-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs text-[#003865] font-bold mb-1">
          <BookOpen className="w-4 h-4 text-[#FBAF3C]" />
          <span>Our Mission &amp; Classical Methodology</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#003865] font-cinzel mb-4">
          About KundliYog
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#2C3138] font-normal leading-relaxed">
          <p>
            KundliYog was created to solve a pervasive problem in modern digital astrology: vague, generic horoscope blurbs that obscure the mathematical rigor and authentic classical principles of Vedic Jyotish.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E2DCB9]">
              <Compass className="w-5 h-5 text-[#FBAF3C] mb-1.5" />
              <h5 className="font-bold text-[#003865] text-xs uppercase tracking-wider mb-1">
                Pure Sidereal Ephemeris
              </h5>
              <p className="text-xs text-[#828892] leading-normal">
                Unlike Western Tropical astrology which uses a shifting vernal equinox, we utilize the astronomically fixed Chitrapaksha (Lahiri) Ayanamsa directly anchored to the star Spica (Chitra).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E2DCB9]">
              <Award className="w-5 h-5 text-[#003865] mb-1.5" />
              <h5 className="font-bold text-[#003865] text-xs uppercase tracking-wider mb-1">
                Classical Parashari Authority
              </h5>
              <p className="text-xs text-[#828892] leading-normal">
                Every single yoga computation maps directly to <em>Brihat Parashara Hora Shastra</em>, <em>Saravali</em>, and <em>Phaladeepika</em> with rigorous checks for combustion, debilitation, and Kendra/Trikona lordship.
              </p>
            </div>
          </div>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm pt-2">Why Dynamic Strength Scoring?</h4>
          <p>
            In traditional astrology consultations, two people with the same "Gajakesari Yoga" experience vastly different results. Why? Because the participating planets may be combust by the Sun, in inimical signs, or lack Kendra placement. KundliYog applies multi-variable mathematical scoring (0-100%) so you understand the true potency of your cosmic placements.
          </p>

          <h4 className="text-[#003865] font-bold font-cinzel text-sm pt-2">Open Access &amp; Privacy First</h4>
          <p>
            No email gatekeeping, no forced paid subscriptions, and zero retention of your birth credentials. We believe astronomical wisdom should be accessible, transparent, and accurate.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#E2DCB9] flex items-center justify-between">
          <span className="text-xs text-[#828892]">Crafted for astrological scholars and seekers worldwide.</span>
          <button
            id="about-close-btn"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#003865] hover:bg-[#002b4d] text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
