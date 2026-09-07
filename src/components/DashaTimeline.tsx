import React from 'react';
import { Clock, Calendar, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { DashaPeriod } from '../types/astrology';

interface DashaTimelineProps {
  dashaSchedule: DashaPeriod[];
  moonNakshatra: string;
  pada: number;
}

export const DashaTimeline: React.FC<DashaTimelineProps> = ({
  dashaSchedule,
  moonNakshatra,
  pada
}) => {
  const currentDasha = dashaSchedule.find((d) => d.isCurrent);

  return (
    <div id="dasha-schedule-section" className="bg-white border border-[#E2DCB9] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="border-b border-[#E2DCB9] pb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-[#003865] font-cinzel flex items-center space-x-2">
            <span>Vimshottari Dasha Activation Schedule</span>
          </h3>
          <p className="text-xs text-[#828892] mt-0.5">
            Computed from natal Moon in <strong className="text-[#003865] font-bold">{moonNakshatra} (Pada {pada})</strong> across the classical 120-year cycle
          </p>
        </div>
        <div className="flex items-center space-x-2 text-xs bg-[#FAF8F2] border border-[#E2DCB9] text-[#003865] px-3 py-1.5 rounded-xl font-semibold shadow-xs">
          <Clock className="w-3.5 h-3.5 text-[#003865]" />
          <span>Planetary Period Timings</span>
        </div>
      </div>

      {/* Active Dasha Highlight Card */}
      {currentDasha && (
        <div className="p-5 rounded-2xl bg-[#FAF8F2] border-2 border-[#003865] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div className="flex items-center space-x-3">
              <span className="w-10 h-10 rounded-xl bg-[#003865] flex items-center justify-center font-bold text-[#FBAF3C] text-sm shadow-xs">
                {currentDasha.lord.substring(0, 2)}
              </span>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-base font-bold text-[#003865] font-cinzel">
                    {currentDasha.lord} Mahadasha
                  </span>
                  <span className="text-[10px] bg-[#EFE6C8] text-[#003865] border border-[#E2DCB9] px-2.5 py-0.5 rounded-full font-bold">
                    ACTIVE NOW
                  </span>
                </div>
                <div className="text-xs text-[#003865] font-bold">
                  Ruling Phase: {currentDasha.start} — {currentDasha.end} ({currentDasha.spanYears} Years Total)
                </div>
              </div>
            </div>

            <div className="text-xs text-[#003865] bg-white px-3 py-1.5 rounded-lg border border-[#E2DCB9] font-semibold">
              ⚡ Primary Yoga Gateway
            </div>
          </div>

          <p className="text-xs text-[#2C3138] mt-2 leading-relaxed border-t border-[#E2DCB9] pt-2 font-normal">
            <strong className="text-[#003865]">Life Sphere Focus:</strong> {currentDasha.significance}
            <span className="block text-[#003865] font-semibold mt-1">
              Any Raj Yogas or Dhan Yogas involving {currentDasha.lord} are actively unlocking their karmic fruits during this current window!
            </span>
          </p>
        </div>
      )}

      {/* Full 120-Year Timeline Sequence */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#003865]">
          Full 120-Year Vimshottari Mahadasha Sequence:
        </h4>
        <div className="space-y-2.5">
          {dashaSchedule.map((d, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition ${
                d.isCurrent
                  ? 'bg-[#FAF8F2] border-2 border-[#003865] shadow-xs'
                  : 'bg-white border border-[#E2DCB9] hover:border-[#003865] shadow-xs'
              }`}
            >
              <div className="flex items-center space-x-3.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                    d.isCurrent
                      ? 'bg-[#003865] text-[#FBAF3C] shadow-xs'
                      : 'bg-[#FAF8F2] text-[#003865] border border-[#E2DCB9]'
                  }`}
                >
                  {d.lord.substring(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#003865] flex items-center space-x-2">
                    <span>{d.lord} Mahadasha</span>
                    {d.isCurrent && (
                      <span className="text-[10px] bg-[#EFE6C8] text-[#003865] border border-[#E2DCB9] px-2 py-0.5 rounded-full font-bold">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#828892] mt-0.5">
                    {d.start} — {d.end} ({d.spanYears} years)
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#2C3138] sm:text-right max-w-sm">
                <span className="font-normal block">{d.significance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
