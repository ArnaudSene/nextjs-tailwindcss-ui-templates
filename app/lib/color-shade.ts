export function generateColorShades(startColor: string, endColor: string, numShades: number): string[] {
    const colorShades = [];
  
    const startRGB = hexToRgb(startColor);
    const endRGB = hexToRgb(endColor);
  
    for (let i = 0; i < numShades; i++) {
      const shadeRGB = interpolateRGB(startRGB, endRGB, i / (numShades - 1));
      const shadeHex = rgbToHex(shadeRGB);
      colorShades.push(shadeHex);
    }

    return colorShades;
  }
  
  function hexToRgb(hex: string): number[] {
    return hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || [0, 0, 0];
  }
  
  function rgbToHex(rgb: number[]): string {
    return `#${rgb.map((x) => x.toString(16).padStart(2, '0')).join('')}`;
  }
  
  function interpolateRGB(startRGB: number[], endRGB: number[], ratio: number): number[] {
    return startRGB.map((startValue, i) =>
      Math.round(startValue + ratio * (endRGB[i] - startValue))
    );
  }
  