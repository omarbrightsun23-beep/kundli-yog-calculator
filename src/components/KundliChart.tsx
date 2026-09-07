import React, { useState } from 'react';
import { Layout, Info, Compass } from 'lucide-react';
import { PlanetDataRecord, PlanetName } from '../types/astrology';
import { SIGNS, SANSKRIT_SIGNS, SIGN_LORDS } from '../utils/astronomy';
import { useTheme } from '../context/ThemeContext';

interface KundliChartProps {
  lagnaSign: number;
  planetData: PlanetDataRecord;
  initialStyle?: 'north' | 'south';
}

const HOUSE_NAMES: Record<number, { title: string; type: string; significance: string }> = {
  1: { title: 'Tanu Bhava (Self & Physicality)', type: 'Kendra & Trikona', significance: 'Personality, vitality, appearance, beginnings, mental constitution' },
  2: { title: 'Dhana Bhava (Wealth & Speech)', type: 'Maraka & Panaphara', significance: 'Liquid capital, speech eloquence, family heritage, food habits' },
  3: { title: 'Sahaja Bhava (Siblings & Courage)', type: 'Upachaya & Apoklima', significance: 'Initiative, younger siblings, short journeys, communication, bravery' },
  4: { title: 'Sukha Bhava (Home & Mind)', type: 'Kendra', significance: 'Mother, real estate, emotional comfort, academic foundation, vehicles' },
  5: { title: 'Putra Bhava (Progeny & Intellect)', type: 'Trikona', significance: 'Speculative gains, children, past life merit (Purva Punya), creative genius' },
  6: { title: 'Ari Bhava (Debts & Competitors)', type: 'Dusthana & Upachaya', significance: 'Overcoming obstacles, health ailments, litigation, competitive exams, service' },
  7: { title: 'Yuvati Bhava (Spouse & Partnerships)', type: 'Kendra & Maraka', significance: 'Marriage partner, business alliances, public trade, foreign residence' },
  8: { title: 'Randhra Bhava (Longevity & Mysticism)', type: 'Dusthana & Panaphara', significance: 'Transformation, sudden windfalls, research, occult insights, inheritance' },
  9: { title: 'Dharma Bhava (Fortune & Higher Truth)', type: 'Supreme Trikona', significance: 'Divine grace, father, higher philosophy, spiritual preceptor (Guru), long voyages' },
  10: { title: 'Karma Bhava (Profession & Authority)', type: 'Supreme Kendra', significance: 'Career summit, royal status, public honors, administrative command, ambition' },
  11: { title: 'Labha Bhava (Gains & Network)', type: 'Upachaya & Panaphara', significance: 'Aspirations, recurring income, elder siblings, influential circle, social impact' },
  12: { title: 'Vyaya Bhava (Expenditure & Liberation)', type: 'Dusthana & Apoklima', significance: 'Foreign settlements, meditation, spiritual release (Moksha), sleep, philanthropy' }
};

export const KundliChart: React.FC<KundliChartProps> = ({
  lagnaSign,
  planetData,
  initialStyle = 'north'
}) => {
  const [style, setStyle] = useState<'north' | 'south'>(initialStyle);
  const [selectedHouse, setSelectedHouse] = useState<number>(1);

  // Group planets by house
  const housePlanets: Record<number, { name: PlanetName; symbol: string; badge: string }[]> = {
    1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: []
  };

  const planetKeys: PlanetName[] = [
    'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'
  ];

  planetKeys.forEach((p) => {
    const info = planetData[p];
    if (info) {
      let badge = '';
      if (info.isExalted) badge = '↑';
      else if (info.isDebilitated) badge = '↓';
      else if (info.isOwnSign) badge = '★';
      if (info.isCombust) badge += '*';

      const shortName = p.substring(0, 2);
      housePlanets[info.house].push({
        name: p,
        symbol: `${shortName}${badge}`,
        badge
      });
    }
  });

  // House signs (1-12)
  const houseSigns: Record<number, number> = {};
  for (let h = 1; h <= 12; h++) {
    houseSigns[h] = ((lagnaSign + (h - 1)) % 12) + 1; // 1-based sign index (1=Aries ... 12=Pisces)
  }

  const selectedHouseInfo = HOUSE_NAMES[selectedHouse];
  const selectedSignIdx = (houseSigns[selectedHouse] - 1 + 12) % 12;
  const selectedSignName = SIGNS[selectedSignIdx];
  const selectedSanskrit = SANSKRIT_SIGNS[selectedSignIdx];
  const selectedSignLord = SIGN_LORDS[selectedSignIdx];
  const selectedHouseResidents = housePlanets[selectedHouse];

  // Professional CubicYardHub Palette for Vedic Chart
  const chartBg = '#FFFFFF';
  const chartStroke = '#003865'; // Deep Harbor Navy
  const chartSubtleStroke = '#E2DCB9'; // Sand
  const centerBoxBg = '#FAF8F2';
  const houseLabelColor = '#828892';
  const planetTextColor = '#003865';
  const ascColor = '#FBAF3C'; // Amber Gold for Ascendant
  const houseHNumColor = '#828892';
  const selectedFill = 'rgba(251, 175, 60, 0.18)';

  return (
    <div id="kundli-chart-section" className="bg-white border border-[#E2DCB9] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header with Style Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DCB9] pb-4">
        <div>
          <h3 className="text-xl font-bold text-[#003865] font-cinzel flex items-center space-x-2">
            <span>Lagna (D1) Birth Kundli</span>
          </h3>
          <p className="text-xs text-[#828892] mt-0.5">
            Click on any house in the chart to inspect its significations, planetary residents, and sign lord
          </p>
        </div>

        <div className="flex items-center space-x-1.5 bg-[#FAF8F2] p-1 rounded-xl border border-[#E2DCB9] text-xs">
          <button
            id="chart-style-north-btn"
            onClick={() => setStyle('north')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
              style === 'north' ? 'bg-[#003865] text-white shadow-xs' : 'text-[#003865] hover:text-[#002b4d]'
            }`}
          >
            North Indian (Diamond)
          </button>
          <button
            id="chart-style-south-btn"
            onClick={() => setStyle('south')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
              style === 'south' ? 'bg-[#003865] text-white shadow-xs' : 'text-[#003865] hover:text-[#002b4d]'
            }`}
          >
            South Indian (Box)
          </button>
        </div>
      </div>

      {/* Main Chart + House Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Visual Chart */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="w-full max-w-[440px] aspect-square bg-white border-2 border-[#E2DCB9] rounded-2xl p-2 relative overflow-hidden shadow-xs">
            {style === 'north' ? (
              /* NORTH INDIAN SVG */
              <svg viewBox="0 0 400 400" className="w-full h-full font-sans select-none cursor-pointer">
                <rect x="0" y="0" width="400" height="400" fill={chartBg} stroke={chartStroke} strokeWidth="3" />
                <line x1="0" y1="0" x2="400" y2="400" stroke={chartStroke} strokeWidth="1.5" opacity={0.75} />
                <line x1="400" y1="0" x2="0" y2="400" stroke={chartStroke} strokeWidth="1.5" opacity={0.75} />
                <polygon points="200,0 400,200 200,400 0,200" fill="none" stroke={chartStroke} strokeWidth="2" />

                {/* House 1 (Top Center Diamond) */}
                <g onClick={() => setSelectedHouse(1)} className="hover:opacity-80 transition">
                  <polygon
                    points="200,0 300,100 200,200 100,100"
                    fill={selectedHouse === 1 ? selectedFill : 'transparent'}
                  />
                  <text x="200" y="95" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H1 ({houseSigns[1]})
                  </text>
                  <text x="200" y="125" fill={planetTextColor} fontSize="13" fontWeight="bold" textAnchor="middle">
                    {housePlanets[1].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 2 (Top Left Triangle) */}
                <g onClick={() => setSelectedHouse(2)} className="hover:opacity-80 transition">
                  <polygon points="0,0 200,0 100,100" fill={selectedHouse === 2 ? selectedFill : 'transparent'} />
                  <text x="100" y="45" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H2 ({houseSigns[2]})
                  </text>
                  <text x="100" y="72" fill={planetTextColor} fontSize="12" fontWeight="bold" textAnchor="middle">
                    {housePlanets[2].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 3 (Far Left Triangle) */}
                <g onClick={() => setSelectedHouse(3)} className="hover:opacity-80 transition">
                  <polygon points="0,0 100,100 0,200" fill={selectedHouse === 3 ? selectedFill : 'transparent'} />
                  <text x="45" y="100" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H3 ({houseSigns[3]})
                  </text>
                  <text x="45" y="125" fill={planetTextColor} fontSize="12" fontWeight="bold" textAnchor="middle">
                    {housePlanets[3].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 4 (Left Diamond) */}
                <g onClick={() => setSelectedHouse(4)} className="hover:opacity-80 transition">
                  <polygon
                    points="0,200 100,100 200,200 100,300"
                    fill={selectedHouse === 4 ? selectedFill : 'transparent'}
                  />
                  <text x="100" y="195" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H4 ({houseSigns[4]})
                  </text>
                  <text x="100" y="225" fill={planetTextColor} fontSize="13" fontWeight="bold" textAnchor="middle">
                    {housePlanets[4].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 5 (Lower Left Triangle) */}
                <g onClick={() => setSelectedHouse(5)} className="hover:opacity-80 transition">
                  <polygon points="0,200 100,300 0,400" fill={selectedHouse === 5 ? selectedFill : 'transparent'} />
                  <text x="45" y="295" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H5 ({houseSigns[5]})
                  </text>
                  <text x="45" y="320" fill={planetTextColor} fontSize="12" fontWeight="bold" textAnchor="middle">
                    {housePlanets[5].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 6 (Bottom Left Triangle) */}
                <g onClick={() => setSelectedHouse(6)} className="hover:opacity-80 transition">
                  <polygon points="0,400 100,300 200,400" fill={selectedHouse === 6 ? selectedFill : 'transparent'} />
                  <text x="100" y="355" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H6 ({houseSigns[6]})
                  </text>
                  <text x="100" y="380" fill={planetTextColor} fontSize="12" fontWeight="bold" textAnchor="middle">
                    {housePlanets[6].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 7 (Bottom Center Diamond) */}
                <g onClick={() => setSelectedHouse(7)} className="hover:opacity-80 transition">
                  <polygon
                    points="200,200 300,300 200,400 100,300"
                    fill={selectedHouse === 7 ? selectedFill : 'transparent'}
                  />
                  <text x="200" y="295" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H7 ({houseSigns[7]})
                  </text>
                  <text x="200" y="325" fill={planetTextColor} fontSize="13" fontWeight="bold" textAnchor="middle">
                    {housePlanets[7].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 8 (Bottom Right Triangle) */}
                <g onClick={() => setSelectedHouse(8)} className="hover:opacity-80 transition">
                  <polygon points="200,400 300,300 400,400" fill={selectedHouse === 8 ? selectedFill : 'transparent'} />
                  <text x="300" y="355" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H8 ({houseSigns[8]})
                  </text>
                  <text x="300" y="380" fill={planetTextColor} fontSize="12" fontWeight="bold" textAnchor="middle">
                    {housePlanets[8].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 9 (Lower Right Triangle) */}
                <g onClick={() => setSelectedHouse(9)} className="hover:opacity-80 transition">
                  <polygon points="300,300 400,200 400,400" fill={selectedHouse === 9 ? selectedFill : 'transparent'} />
                  <text x="355" y="295" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H9 ({houseSigns[9]})
                  </text>
                  <text x="355" y="320" fill={planetTextColor} fontSize="12" fontWeight="bold" textAnchor="middle">
                    {housePlanets[9].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 10 (Right Diamond) */}
                <g onClick={() => setSelectedHouse(10)} className="hover:opacity-80 transition">
                  <polygon
                    points="200,200 300,100 400,200 300,300"
                    fill={selectedHouse === 10 ? selectedFill : 'transparent'}
                  />
                  <text x="300" y="195" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H10 ({houseSigns[10]})
                  </text>
                  <text x="300" y="225" fill={planetTextColor} fontSize="13" fontWeight="bold" textAnchor="middle">
                    {housePlanets[10].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 11 (Far Right Triangle) */}
                <g onClick={() => setSelectedHouse(11)} className="hover:opacity-80 transition">
                  <polygon points="300,100 400,0 400,200" fill={selectedHouse === 11 ? selectedFill : 'transparent'} />
                  <text x="355" y="100" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H11 ({houseSigns[11]})
                  </text>
                  <text x="355" y="125" fill={planetTextColor} fontSize="12" fontWeight="bold" textAnchor="middle">
                    {housePlanets[11].map((p) => p.symbol).join(' ')}
                  </text>
                </g>

                {/* House 12 (Top Right Triangle) */}
                <g onClick={() => setSelectedHouse(12)} className="hover:opacity-80 transition">
                  <polygon points="200,0 400,0 300,100" fill={selectedHouse === 12 ? selectedFill : 'transparent'} />
                  <text x="300" y="45" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                    H12 ({houseSigns[12]})
                  </text>
                  <text x="300" y="72" fill={planetTextColor} fontSize="12" fontWeight="bold" textAnchor="middle">
                    {housePlanets[12].map((p) => p.symbol).join(' ')}
                  </text>
                </g>
              </svg>
            ) : (
              /* SOUTH INDIAN BOX SVG */
              <svg viewBox="0 0 400 400" className="w-full h-full font-sans select-none cursor-pointer">
                <rect x="0" y="0" width="400" height="400" fill={chartBg} stroke={chartStroke} strokeWidth="2.5" />
                {/* 4x4 Grid with Center 2x2 empty */}
                <line x1="100" y1="0" x2="100" y2="400" stroke={chartSubtleStroke} strokeWidth="1.5" opacity={0.75} />
                <line x1="200" y1="0" x2="200" y2="100" stroke={chartSubtleStroke} strokeWidth="1.5" opacity={0.75} />
                <line x1="200" y1="300" x2="200" y2="400" stroke={chartSubtleStroke} strokeWidth="1.5" opacity={0.75} />
                <line x1="300" y1="0" x2="300" y2="400" stroke={chartSubtleStroke} strokeWidth="1.5" opacity={0.75} />

                <line x1="0" y1="100" x2="400" y2="100" stroke={chartSubtleStroke} strokeWidth="1.5" opacity={0.75} />
                <line x1="0" y1="200" x2="100" y2="200" stroke={chartSubtleStroke} strokeWidth="1.5" opacity={0.75} />
                <line x1="300" y1="200" x2="400" y2="200" stroke={chartSubtleStroke} strokeWidth="1.5" opacity={0.75} />
                <line x1="0" y1="300" x2="400" y2="300" stroke={chartSubtleStroke} strokeWidth="1.5" opacity={0.75} />

                {/* Center empty box background */}
                <rect x="100" y="100" width="200" height="200" fill={centerBoxBg} stroke={chartStroke} strokeWidth="1" />
                <text x="200" y="195" fill={chartStroke} fontSize="14" fontWeight="bold" textAnchor="middle">
                  RASI (D1)
                </text>
                <text x="200" y="215" fill={houseLabelColor} fontSize="11" textAnchor="middle">
                  Fixed Sign Layout
                </text>

                {/* South Indian signs are fixed clockwise */}
                {[
                  { signId: 12, x: 0, y: 0 },
                  { signId: 1, x: 100, y: 0 },
                  { signId: 2, x: 200, y: 0 },
                  { signId: 3, x: 300, y: 0 },
                  { signId: 4, x: 300, y: 100 },
                  { signId: 5, x: 300, y: 200 },
                  { signId: 6, x: 300, y: 300 },
                  { signId: 7, x: 200, y: 300 },
                  { signId: 8, x: 100, y: 300 },
                  { signId: 9, x: 0, y: 300 },
                  { signId: 10, x: 0, y: 200 },
                  { signId: 11, x: 0, y: 100 }
                ].map((pos) => {
                  const houseNum = ((pos.signId - 1 - lagnaSign + 12) % 12) + 1;
                  const isLag = houseNum === 1;
                  const planetsInSign = housePlanets[houseNum] || [];
                  const isSel = selectedHouse === houseNum;

                  return (
                    <g
                      key={pos.signId}
                      onClick={() => setSelectedHouse(houseNum)}
                      className="hover:opacity-80 transition cursor-pointer"
                    >
                      <rect
                        x={pos.x}
                        y={pos.y}
                        width="100"
                        height="100"
                        fill={isSel ? selectedFill : 'transparent'}
                      />
                      <text x={pos.x + 8} y={pos.y + 18} fill={houseLabelColor} fontSize="10">
                        {SIGNS[pos.signId - 1].substring(0, 3)}
                      </text>
                      {isLag && (
                        <text x={pos.x + 80} y={pos.y + 18} fill={ascColor} fontSize="10" fontWeight="bold">
                          ASC
                        </text>
                      )}
                      <text x={pos.x + 50} y={pos.y + 55} fill={planetTextColor} fontSize="11" fontWeight="bold" textAnchor="middle">
                        {planetsInSign.map((p) => p.symbol).join(' ')}
                      </text>
                      <text x={pos.x + 50} y={pos.y + 85} fill={houseHNumColor} fontSize="9" textAnchor="middle">
                        H{houseNum}
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}
          </div>

          <div className="text-[11px] text-[#828892] mt-3 flex items-center space-x-2 font-medium">
            <Info className="w-3.5 h-3.5 text-[#FBAF3C] flex-shrink-0" />
            <span>
              <strong>Legend:</strong> ↑ Exalted • ↓ Debilitated • ★ Own Sign • * Combust by Sun
            </span>
          </div>
        </div>

        {/* Selected House Inspector Details */}
        <div className="lg:col-span-5 bg-[#FAF8F2] border border-[#E2DCB9] rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="border-b border-[#E2DCB9] pb-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EFE6C8] text-[#003865] border border-[#E2DCB9]">
                Bhava {selectedHouse}
              </span>
              <h4 className="text-base font-bold text-[#003865] font-cinzel mt-1">
                {selectedHouseInfo.title}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-[#828892] block font-semibold">House Type</span>
              <span className="text-xs font-bold text-[#003865]">{selectedHouseInfo.type}</span>
            </div>
          </div>

          {/* Sign & Lord Details */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-[#E2DCB9]">
              <span className="text-[#828892] block text-[10px] uppercase font-bold">Residing Rasi</span>
              <span className="text-[#003865] font-bold mt-0.5 block">
                {selectedSignName} ({selectedSanskrit})
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#E2DCB9]">
              <span className="text-[#828892] block text-[10px] uppercase font-bold">House Lord</span>
              <span className="text-[#003865] font-bold mt-0.5 block">{selectedSignLord}</span>
            </div>
          </div>

          {/* Residing Grahas */}
          <div>
            <span className="text-xs text-[#003865] font-bold uppercase tracking-wider block mb-2">
              Residing Planets in House {selectedHouse}:
            </span>
            {selectedHouseResidents.length === 0 ? (
              <div className="p-3 rounded-xl bg-white border border-[#E2DCB9] text-xs text-[#828892] italic">
                Empty house (Bhavan devoid of planets). Governed predominantly by its lord planet ({selectedSignLord}).
              </div>
            ) : (
              <div className="space-y-2">
                {selectedHouseResidents.map((p, idx) => {
                  const pData = planetData[p.name];
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-[#E2DCB9] flex items-center justify-between text-xs shadow-xs"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-lg bg-[#EFE6C8] flex items-center justify-center font-bold text-[#003865] text-[11px]">
                          {p.name.substring(0, 2)}
                        </span>
                        <div>
                          <span className="text-[#2C3138] font-bold">{p.name}</span>
                          <span className="text-[11px] text-[#828892] block">
                            {pData.degInSign.toFixed(2)}° in {pData.signName}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        {pData.isExalted && <span className="text-[#003865] font-bold block text-[11px]">Exalted</span>}
                        {pData.isDebilitated && <span className="text-[#828892] font-bold block text-[11px]">Debilitated</span>}
                        {pData.isOwnSign && <span className="text-[#003865] font-semibold block text-[11px]">Own Sign</span>}
                        {pData.isCombust && <span className="text-[#FBAF3C] text-[10px] font-semibold block">Combust</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* House Significations */}
          <div className="pt-2 border-t border-[#E2DCB9] text-xs">
            <span className="text-[#003865] font-bold block mb-1">Classical Significations (Karakas):</span>
            <p className="text-[#2C3138] leading-relaxed font-normal">{selectedHouseInfo.significance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
