import React, { useState } from 'react';
import { Compass, MapPin, Clock, Calendar, User, Layout, ArrowRight } from 'lucide-react';
import { BirthInput } from '../types/astrology';
import { CITY_PRESETS } from '../utils/astronomy';

interface BirthFormProps {
  initialValues: BirthInput;
  onSubmit: (input: BirthInput) => void;
}

export const BirthForm: React.FC<BirthFormProps> = ({ initialValues, onSubmit }) => {
  const [userName, setUserName] = useState(initialValues.userName);
  const [dob, setDob] = useState(initialValues.dob);
  const [tob, setTob] = useState(initialValues.tob);
  const [citySelect, setCitySelect] = useState(initialValues.cityValue);
  const [chartStyle, setChartStyle] = useState<'north' | 'south'>(initialValues.chartStyle);

  const [customLat, setCustomLat] = useState(initialValues.lat.toString());
  const [customLon, setCustomLon] = useState(initialValues.lon.toString());
  const [customTz, setCustomTz] = useState(initialValues.tz.toString());

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setCitySelect(val);
    if (val !== 'custom') {
      const parts = val.split(',');
      if (parts.length >= 3) {
        setCustomLat(parts[0]);
        setCustomLon(parts[1]);
        setCustomTz(parts[2]);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let lat: number;
    let lon: number;
    let tz: number;

    if (citySelect === 'custom') {
      lat = parseFloat(customLat) || 28.6139;
      lon = parseFloat(customLon) || 77.2090;
      tz = parseFloat(customTz) || 5.5;
    } else {
      const parts = citySelect.split(',');
      lat = parseFloat(parts[0]);
      lon = parseFloat(parts[1]);
      tz = parseFloat(parts[2]);
    }

    onSubmit({
      userName: userName.trim() || 'Seeker',
      dob,
      tob,
      cityValue: citySelect,
      lat,
      lon,
      tz,
      chartStyle
    });
  };

  const loadSample = (name: string, dobVal: string, tobVal: string, cityVal: string) => {
    setUserName(name);
    setDob(dobVal);
    setTob(tobVal);
    setCitySelect(cityVal);
    const parts = cityVal.split(',');
    setCustomLat(parts[0]);
    setCustomLon(parts[1]);
    setCustomTz(parts[2]);

    const lat = parseFloat(parts[0]);
    const lon = parseFloat(parts[1]);
    const tz = parseFloat(parts[2]);

    onSubmit({
      userName: name,
      dob: dobVal,
      tob: tobVal,
      cityValue: cityVal,
      lat,
      lon,
      tz,
      chartStyle
    });
  };

  return (
    <div 
      id="calculator" 
      className="bg-white border border-[#E2DCB9] rounded-2xl p-6 sm:p-8 text-left shadow-xs relative"
    >
      <div className="border-b border-[#E2DCB9] pb-4 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-[#003865] font-cinzel flex items-center space-x-2">
            <span>Calculate Your Kundli Yog</span>
          </h2>
          <p className="text-xs text-[#828892] mt-0.5">
            Enter exact birth particulars to analyze your Kundli Yog formations, chart strength, and Dasha activation
          </p>
        </div>
        <div className="flex items-center space-x-2 text-xs bg-[#FAF8F2] px-3 py-1.5 rounded-lg border border-[#E2DCB9] text-[#003865]">
          <span className="w-2 h-2 rounded-full bg-[#003865] animate-pulse"></span>
          <span className="font-semibold">Chitrapaksha (Lahiri) Sidereal</span>
        </div>
      </div>

      {/* Quick Sample Selector */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-[#828892] font-medium">Try Famous Charts:</span>
        <button
          id="sample-einstein-btn"
          type="button"
          onClick={() => loadSample('Albert Einstein', '1879-03-14', '11:30', '48.4011,9.9876,1.0')}
          className="px-3 py-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] text-[#003865] border border-[#E2DCB9] font-semibold transition cursor-pointer shadow-xs"
        >
          Albert Einstein (Budhaditya) 💡
        </button>
        <button
          id="sample-stevejobs-btn"
          type="button"
          onClick={() => loadSample('Steve Jobs', '1955-02-24', '19:15', '37.7749,-122.4194,-8.0')}
          className="px-3 py-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] text-[#003865] border border-[#E2DCB9] font-semibold transition cursor-pointer shadow-xs"
        >
          Steve Jobs (San Francisco) 🍏
        </button>
        <button
          id="sample-obama-btn"
          type="button"
          onClick={() => loadSample('Barack Obama', '1961-08-04', '19:24', '21.3069,-157.8583,-10.0')}
          className="px-3 py-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] text-[#003865] border border-[#E2DCB9] font-semibold transition cursor-pointer shadow-xs"
        >
          Barack Obama (Sasa Yoga) 🏛️
        </button>
        <button
          id="sample-kalam-btn"
          type="button"
          onClick={() => loadSample('Dr. APJ Abdul Kalam', '1931-10-15', '01:15', '9.2876,79.3129,5.5')}
          className="px-3 py-1.5 rounded-lg bg-[#FAF8F2] hover:bg-[#EFE6C8] text-[#003865] border border-[#E2DCB9] font-semibold transition cursor-pointer shadow-xs"
        >
          APJ Abdul Kalam (Gajakesari) 🐘
        </button>
      </div>

      <form id="kundli-form" onSubmit={handleFormSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#003865] mb-1.5 flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5 text-[#FBAF3C]" />
              <span>Your Name</span>
            </label>
            <input
              id="user-name-input"
              type="text"
              required
              placeholder="e.g. Aryan Sharma"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full bg-white border border-[#E2DCB9] rounded-xl px-3.5 py-2.5 text-[#2C3138] placeholder-[#828892] focus:outline-none focus:border-[#003865] focus:ring-2 focus:ring-[#003865]/15 transition text-sm font-medium"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#003865] mb-1.5 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#FBAF3C]" />
              <span>Date of Birth</span>
            </label>
            <input
              id="dob-input"
              type="date"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full bg-white border border-[#E2DCB9] rounded-xl px-3.5 py-2.5 text-[#2C3138] focus:outline-none focus:border-[#003865] focus:ring-2 focus:ring-[#003865]/15 transition text-sm font-medium"
            />
          </div>

          {/* Time of Birth */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#003865] mb-1.5 flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FBAF3C]" />
              <span>Exact Time of Birth</span>
            </label>
            <input
              id="tob-input"
              type="time"
              required
              value={tob}
              onChange={(e) => setTob(e.target.value)}
              className="w-full bg-white border border-[#E2DCB9] rounded-xl px-3.5 py-2.5 text-[#2C3138] focus:outline-none focus:border-[#003865] focus:ring-2 focus:ring-[#003865]/15 transition text-sm font-medium"
            />
          </div>

          {/* Birth City Preset / Search */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#003865] mb-1.5 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#003865]" />
              <span>Birth City / Region</span>
            </label>
            <select
              id="city-select"
              value={citySelect}
              onChange={handleCityChange}
              className="w-full bg-white border border-[#E2DCB9] rounded-xl px-3.5 py-2.5 text-[#2C3138] focus:outline-none focus:border-[#003865] focus:ring-2 focus:ring-[#003865]/15 transition text-sm font-medium"
            >
              <optgroup label="United States (All US Time Zones)">
                {CITY_PRESETS.filter(p => p.country === 'USA').map((preset, idx) => (
                  <option key={`usa-${idx}`} value={`${preset.lat},${preset.lon},${preset.tz}`}>
                    {preset.label}
                  </option>
                ))}
              </optgroup>
              <optgroup label="International & Diaspora Metros">
                {CITY_PRESETS.filter(p => p.country !== 'USA').map((preset, idx) => (
                  <option key={`intl-${idx}`} value={`${preset.lat},${preset.lon},${preset.tz}`}>
                    {preset.label}
                  </option>
                ))}
              </optgroup>
              <option value="custom">Custom Coordinates (Manual Lat / Long / UTC)...</option>
            </select>
          </div>

          {/* Chart Style */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#003865] mb-1.5 flex items-center space-x-1.5">
              <Layout className="w-3.5 h-3.5 text-[#003865]" />
              <span>Kundli Style</span>
            </label>
            <select
              id="chart-style-select"
              value={chartStyle}
              onChange={(e) => setChartStyle(e.target.value as 'north' | 'south')}
              className="w-full bg-white border border-[#E2DCB9] rounded-xl px-3.5 py-2.5 text-[#2C3138] focus:outline-none focus:border-[#003865] focus:ring-2 focus:ring-[#003865]/15 transition text-sm font-medium"
            >
              <option value="north">North Indian (Diamond)</option>
              <option value="south">South Indian (Box / Square)</option>
            </select>
          </div>
        </div>

        {/* Custom Coordinates Container */}
        {citySelect === 'custom' && (
          <div id="custom-coords-container" className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-[#E2DCB9]">
            <div>
              <label className="block text-xs text-[#003865] mb-1 font-semibold">Latitude (° North/South)</label>
              <input
                id="custom-lat-input"
                type="number"
                step="0.0001"
                placeholder="e.g. 28.6139"
                value={customLat}
                onChange={(e) => setCustomLat(e.target.value)}
                className="w-full bg-white border border-[#E2DCB9] rounded-lg p-2.5 text-sm text-[#2C3138] focus:border-[#003865] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-[#003865] mb-1 font-semibold">Longitude (° East/West)</label>
              <input
                id="custom-lon-input"
                type="number"
                step="0.0001"
                placeholder="e.g. 77.2090"
                value={customLon}
                onChange={(e) => setCustomLon(e.target.value)}
                className="w-full bg-white border border-[#E2DCB9] rounded-lg p-2.5 text-sm text-[#2C3138] focus:border-[#003865] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-[#003865] mb-1 font-semibold">Timezone Offset (Hours, e.g. 5.5)</label>
              <input
                id="custom-tz-input"
                type="number"
                step="0.25"
                placeholder="e.g. 5.5"
                value={customTz}
                onChange={(e) => setCustomTz(e.target.value)}
                className="w-full bg-white border border-[#E2DCB9] rounded-lg p-2.5 text-sm text-[#2C3138] focus:border-[#003865] outline-none"
              />
            </div>
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <div className="pt-2">
          <button
            id="calculate-submit-btn"
            type="submit"
            className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm bg-[#FBAF3C] hover:bg-[#e59f30] text-[#003865] border border-[#e59f30] shadow-xs transition transform active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Compass className="w-5 h-5" />
            <span>Calculate My Kundli Yog &amp; Chart Strength</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </form>
    </div>
  );
};
