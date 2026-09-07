export type PlanetName = 
  | 'Lagna' 
  | 'Sun' 
  | 'Moon' 
  | 'Mars' 
  | 'Mercury' 
  | 'Jupiter' 
  | 'Venus' 
  | 'Saturn' 
  | 'Rahu' 
  | 'Ketu';

export interface PlanetaryCoordinates {
  Lagna: number;
  Sun: number;
  Moon: number;
  Mars: number;
  Mercury: number;
  Jupiter: number;
  Venus: number;
  Saturn: number;
  Rahu: number;
  Ketu: number;
}

export interface PlanetInfo {
  deg: number;
  degInSign: number;
  sign: number;
  signName: string;
  sanskritSign: string;
  house: number;
  isExalted: boolean;
  isDebilitated: boolean;
  isOwnSign: boolean;
  isCombust: boolean;
}

export type PlanetDataRecord = Record<PlanetName, PlanetInfo>;

export interface YogaResult {
  id: string;
  name: string;
  category: string;
  planets: string[];
  strength: number;
  description: string;
  activation: string;
  celebrity?: string;
  beneficLevel?: 'Supreme' | 'High' | 'Moderate' | 'Protective';
}

export interface ChartAnalysis {
  lagnaSign: number;
  lagnaSignName: string;
  lagnaSanskrit: string;
  moonSignName: string;
  moonSanskrit: string;
  nakshatraName: string;
  nakshatraPada: number;
  planetData: PlanetDataRecord;
  yogas: YogaResult[];
  chartScore: number;
  summaryQuote: string;
}

export interface DashaPeriod {
  lord: string;
  start: number;
  end: number;
  isCurrent: boolean;
  spanYears: number;
  significance: string;
}

export interface BirthInput {
  userName: string;
  dob: string;
  tob: string;
  cityValue: string;
  lat: number;
  lon: number;
  tz: number;
  chartStyle: 'north' | 'south';
}

export interface CityPreset {
  label: string;
  lat: number;
  lon: number;
  tz: number;
  country?: 'USA' | 'International';
}
