import { ChartAnalysis, DashaPeriod, BirthInput } from '../types/astrology';

export function generatePrintableReportHTML(
  input: BirthInput,
  analysis: ChartAnalysis,
  dashaSchedule: DashaPeriod[]
): string {
  const currentDasha = dashaSchedule.find((d) => d.isCurrent);
  const now = new Date().toLocaleString();

  const yogasRows = analysis.yogas
    .map(
      (y) => `
      <div style="margin-bottom: 14px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc; page-break-inside: avoid;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
          <div>
            <span style="font-size: 10px; font-weight: bold; text-transform: uppercase; background-color: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 4px;">
              ${y.category}
            </span>
            <h4 style="margin: 4px 0 0 0; font-size: 16px; color: #0f172a; font-family: serif;">
              ${y.name}
            </h4>
          </div>
          <span style="font-weight: bold; color: #b45309; font-size: 14px;">
            ${y.strength}% Strength
          </span>
        </div>
        <p style="margin: 4px 0 8px 0; font-size: 12px; line-height: 1.5; color: #334155;">
          ${y.description}
        </p>
        <div style="font-size: 11px; color: #64748b; border-top: 1px dashed #cbd5e1; padding-top: 6px;">
          <strong>Formed by:</strong> ${y.planets.join(' + ')} &nbsp;•&nbsp; 
          <strong>Activation:</strong> ${y.activation}
          ${y.celebrity ? `&nbsp;•&nbsp; <strong>Celebrity Alignment:</strong> ${y.celebrity}` : ''}
        </div>
      </div>
    `
    )
    .join('');

  const planetsRows = (
    ['Lagna', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'] as const
  )
    .map((p) => {
      const info = analysis.planetData[p];
      if (!info) return '';
      let status = 'Standard';
      if (info.isExalted) status = 'Exalted (Uchha)';
      else if (info.isDebilitated) status = 'Debilitated (Neecha)';
      else if (info.isOwnSign) status = 'Own Sign (Swakshetra)';
      if (info.isCombust) status += ' [Combust]';

      return `
        <tr style="border-bottom: 1px solid #e2e8f0; font-size: 12px;">
          <td style="padding: 8px 10px; font-weight: bold; color: #0f172a;">${p}</td>
          <td style="padding: 8px 10px; color: #334155;">${info.signName} (${info.sanskritSign})</td>
          <td style="padding: 8px 10px; font-family: monospace; color: #b45309;">${info.degInSign.toFixed(2)}°</td>
          <td style="padding: 8px 10px; font-weight: 600; color: #0f172a;">House ${info.house}</td>
          <td style="padding: 8px 10px; color: #475569;">${status}</td>
        </tr>
      `;
    })
    .join('');

  const dashaRows = dashaSchedule
    .map(
      (d) => `
      <tr style="border-bottom: 1px solid #e2e8f0; font-size: 11px; ${
        d.isCurrent ? 'background-color: #fef3c7; font-weight: bold;' : ''
      }">
        <td style="padding: 6px 10px; color: #0f172a;">
          ${d.lord} Mahadasha ${d.isCurrent ? '<span style="color: #15803d;">[ACTIVE NOW]</span>' : ''}
        </td>
        <td style="padding: 6px 10px; color: #475569;">${d.start} — ${d.end}</td>
        <td style="padding: 6px 10px; color: #64748b;">${d.spanYears} Years</td>
        <td style="padding: 6px 10px; color: #334155;">${d.significance}</td>
      </tr>
    `
    )
    .join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Kundli Yog Dossier - ${input.userName}</title>
  <style>
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; margin: 0; padding: 20px; }
      .no-print { display: none !important; }
      @page { margin: 1.5cm; }
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background-color: #ffffff;
      line-height: 1.5;
      padding: 30px;
      max-width: 850px;
      margin: 0 auto;
    }
    h1, h2, h3, h4 { font-family: "Georgia", serif; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th { text-align: left; padding: 8px 10px; background-color: #f1f5f9; color: #475569; font-size: 11px; text-transform: uppercase; border-bottom: 2px solid #cbd5e1; }
  </style>
</head>
<body>
  <!-- Print action button for screen view -->
  <div class="no-print" style="margin-bottom: 20px; padding: 12px 18px; background: #0f172a; color: white; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <div>
      <strong>KundliYog Official Dossier</strong> • Click "Print / Save PDF" to download your permanent document
    </div>
    <button onclick="window.print()" style="background: #f59e0b; color: #0f172a; font-weight: bold; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; text-transform: uppercase; font-size: 12px;">
      🖨️ Print / Save PDF
    </button>
  </div>

  <!-- Report Header -->
  <div style="border-bottom: 3px solid #b45309; padding-bottom: 16px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end;">
    <div>
      <img src="/logo-header-light.png" alt="Kundli Yog" style="height: 42px; width: auto; margin-bottom: 12px; display: block;" />
      <div style="font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #b45309;">
        Classical Vedic Astrology Intelligence
      </div>
      <h1 style="margin: 4px 0 2px 0; font-size: 26px; color: #0f172a;">
        Comprehensive Kundli Yog Dossier
      </h1>
      <div style="font-size: 13px; color: #475569;">
        Generated for: <strong>${input.userName}</strong> &nbsp;•&nbsp; Date of Calculation: ${now}
      </div>
    </div>
    <div style="text-align: right;">
      <div style="font-size: 11px; color: #64748b;">Ayanamsa Standard:</div>
      <div style="font-weight: bold; color: #0f172a; font-size: 12px;">Chitrapaksha (Lahiri) Sidereal</div>
      <div style="font-size: 20px; font-weight: 900; color: #b45309; margin-top: 4px;">
        ${analysis.chartScore}% Power
      </div>
    </div>
  </div>

  <!-- Birth Particulars Grid -->
  <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-size: 12px;">
    <div>
      <span style="color: #64748b; display: block; font-size: 10px; text-transform: uppercase;">Birth Date & Time</span>
      <strong>${input.dob} at ${input.tob}</strong>
    </div>
    <div>
      <span style="color: #64748b; display: block; font-size: 10px; text-transform: uppercase;">Lagna (Ascendant)</span>
      <strong>${analysis.lagnaSignName} (${analysis.lagnaSanskrit})</strong>
    </div>
    <div>
      <span style="color: #64748b; display: block; font-size: 10px; text-transform: uppercase;">Moon Sign & Nakshatra</span>
      <strong>${analysis.moonSignName} • ${analysis.nakshatraName} (Pada ${analysis.nakshatraPada})</strong>
    </div>
    <div>
      <span style="color: #64748b; display: block; font-size: 10px; text-transform: uppercase;">Coordinates & Timezone</span>
      <strong>${input.lat.toFixed(2)}°N, ${input.lon.toFixed(2)}°E (UTC ${input.tz >= 0 ? '+' : ''}${input.tz})</strong>
    </div>
    <div>
      <span style="color: #64748b; display: block; font-size: 10px; text-transform: uppercase;">Total Detected Yogas</span>
      <strong style="color: #b45309;">${analysis.yogas.length} Classical Combinations</strong>
    </div>
    <div>
      <span style="color: #64748b; display: block; font-size: 10px; text-transform: uppercase;">Current Mahadasha</span>
      <strong style="color: #15803d;">${currentDasha ? currentDasha.lord : 'Active'} Phase</strong>
    </div>
  </div>

  <!-- Section: Detected Classical Yogas -->
  <h2 style="font-size: 18px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; margin-top: 24px;">
    1. Detected Classical Vedic Yogas (${analysis.yogas.length})
  </h2>
  <div style="margin-top: 12px;">
    ${yogasRows}
  </div>

  <!-- Section: Sidereal Planetary Longitudes -->
  <h2 style="font-size: 18px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; margin-top: 28px; page-break-before: auto;">
    2. Sidereal Planetary Longitudes (Nirayana Ephemeris)
  </h2>
  <table>
    <thead>
      <tr>
        <th>Graha</th>
        <th>Rasi (Sign)</th>
        <th>Degree In Sign</th>
        <th>House (Bhava)</th>
        <th>Dignity Status</th>
      </tr>
    </thead>
    <tbody>
      ${planetsRows}
    </tbody>
  </table>

  <!-- Section: 120-Year Vimshottari Dasha Schedule -->
  <h2 style="font-size: 18px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; margin-top: 28px; page-break-before: auto;">
    3. Vimshottari Dasha Timeline (120-Year Cycle)
  </h2>
  <p style="font-size: 12px; color: #475569; margin: 6px 0 10px 0;">
    Planetary yogas manifest their tangible karmic fruits during the Mahadasha and Antardasha of the participating lord planets.
  </p>
  <table>
    <thead>
      <tr>
        <th>Mahadasha</th>
        <th>Active Years</th>
        <th>Span</th>
        <th>Life Domain Focus</th>
      </tr>
    </thead>
    <tbody>
      ${dashaRows}
    </tbody>
  </table>

  <!-- Astrological Guidance & Disclaimer -->
  <div style="margin-top: 36px; padding: 14px; border-top: 2px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.6;">
    <strong>Classical Astrological Disclaimer:</strong> This document is generated based on classical mathematical rules from <em>Brihat Parashara Hora Shastra</em>, <em>Saravali</em>, and <em>Phaladeepika</em> using Chitrapaksha (Lahiri) Ayanamsa. Astrology serves as a reflective lens for self-understanding, spiritual orientation, and life rhythm planning. Results depend on individual free will (Purushartha), moral ethics, and active karma.
    <div style="margin-top: 8px; color: #94a3b8;">
      © ${new Date().getFullYear()} KundliYog. For educational, research, and astrological orientation purposes.
    </div>
  </div>
</body>
</html>
  `;
}

export function downloadReportAsHTML(
  input: BirthInput,
  analysis: ChartAnalysis,
  dashaSchedule: DashaPeriod[]
) {
  const htmlContent = generatePrintableReportHTML(input, analysis, dashaSchedule);
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${input.userName.replace(/\s+/g, '_')}_KundliYog_Dossier.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function openPrintableReportWindow(
  input: BirthInput,
  analysis: ChartAnalysis,
  dashaSchedule: DashaPeriod[]
) {
  const htmlContent = generatePrintableReportHTML(input, analysis, dashaSchedule);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
}
