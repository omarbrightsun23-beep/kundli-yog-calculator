import React from 'react';
import { PlanetDataRecord, PlanetName } from '../types/astrology';

interface PlanetaryTableProps {
  planetData: PlanetDataRecord;
}

export const PlanetaryTable: React.FC<PlanetaryTableProps> = ({ planetData }) => {
  const planetOrder: PlanetName[] = [
    'Lagna',
    'Sun',
    'Moon',
    'Mars',
    'Mercury',
    'Jupiter',
    'Venus',
    'Saturn',
    'Rahu',
    'Ketu'
  ];

  return (
    <div id="planetary-positions-section" className="bg-white border border-[#E2DCB9] rounded-2xl overflow-hidden shadow-xs">
      <div className="px-6 py-5 border-b border-[#E2DCB9] flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-[#003865] font-cinzel">Sidereal Planetary Longitudes</h3>
          <p className="text-xs text-[#828892] mt-0.5">
            Calculated with Chitrapaksha (Lahiri) Ayanamsa for the exact local sidereal time of birth
          </p>
        </div>
        <span className="text-[11px] bg-[#FAF8F2] border border-[#E2DCB9] text-[#003865] px-3 py-1 rounded-lg font-semibold shadow-xs">
          Ephemeris Accuracy
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#FAF8F2] text-[#003865] uppercase tracking-wider border-b border-[#E2DCB9] text-[11px]">
            <tr>
              <th className="px-6 py-3.5 font-bold">Graha (Body)</th>
              <th className="px-6 py-3.5 font-bold">Rasi (Zodiac Sign)</th>
              <th className="px-6 py-3.5 font-bold">Sign Longitude</th>
              <th className="px-6 py-3.5 font-bold">House (Bhava)</th>
              <th className="px-6 py-3.5 font-bold">Dignity Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2DCB9] text-[#2C3138]">
            {planetOrder.map((p) => {
              const info = planetData[p];
              if (!info) return null;

              let statusBadge = (
                <span className="text-[#828892] font-medium">Standard</span>
              );

              if (info.isExalted) {
                statusBadge = (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F2] text-[#003865] font-bold border border-[#E2DCB9] inline-block shadow-xs">
                    Exalted (Uchha)
                  </span>
                );
              } else if (info.isDebilitated) {
                statusBadge = (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F2] text-[#828892] font-bold border border-[#E2DCB9] inline-block shadow-xs">
                    Debilitated (Neecha)
                  </span>
                );
              } else if (info.isOwnSign) {
                statusBadge = (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EFE6C8] text-[#003865] font-bold border border-[#E2DCB9] inline-block shadow-xs">
                    Own Sign (Swakshetra)
                  </span>
                );
              }

              return (
                <tr key={p} className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="px-6 py-3.5 font-bold text-[#003865] flex items-center space-x-2.5">
                    <span className="w-7 h-7 rounded-lg bg-[#EFE6C8] border border-[#E2DCB9] flex items-center justify-center text-[#003865] text-xs font-bold shadow-xs">
                      {p.substring(0, 2)}
                    </span>
                    <span>{p}</span>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className="text-[#003865] font-semibold">{info.signName}</span>
                    <span className="text-[#828892] block text-[11px]">({info.sanskritSign})</span>
                  </td>
                  <td className="px-6 py-3.5 font-mono font-bold text-[#003865]">
                    {info.degInSign.toFixed(2)}°
                  </td>
                  <td className="px-6 py-3.5">
                    <span className="font-bold text-[#003865]">House {info.house}</span>
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center space-x-2">
                      {statusBadge}
                      {info.isCombust && (
                        <span className="text-[#003865] text-[10px] bg-[#EFE6C8] border border-[#E2DCB9] px-1.5 py-0.5 rounded font-bold">
                          Combust (Asta)
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
