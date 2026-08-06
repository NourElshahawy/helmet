import "../../styles/layout/home/hex-pattern.css";

const ROWS_COLUMNS = [5, 4, 5];
const HEX_W = 280;
const HEX_H = 400;
const HEX_CORNER_RADIUS = 28; // زوّد الرقم ده لانحناء أوضح، قلّليه لانحناء أخف

function normalize([dx, dy], length) {
  const dist = Math.sqrt(dx * dx + dy * dy);
  return [(dx / dist) * length, (dy / dist) * length];
}

function roundedHexPath(w, h, r) {
  const points = [
    [w / 2, 0],
    [w, h * 0.25],
    [w, h * 0.75],
    [w / 2, h],
    [0, h * 0.75],
    [0, h * 0.25],
  ];

  const corners = points.map((point, i) => {
    const prev = points[(i - 1 + points.length) % points.length];
    const next = points[(i + 1) % points.length];

    const toPrev = normalize([prev[0] - point[0], prev[1] - point[1]], r);
    const toNext = normalize([next[0] - point[0], next[1] - point[1]], r);

    return {
      start: [point[0] + toPrev[0], point[1] + toPrev[1]],
      end: [point[0] + toNext[0], point[1] + toNext[1]],
      corner: point,
    };
  });

  let d = `M ${corners[0].start[0]},${corners[0].start[1]}`;
  corners.forEach((c) => {
    d += ` L ${c.start[0]},${c.start[1]} Q ${c.corner[0]},${c.corner[1]} ${c.end[0]},${c.end[1]}`;
  });
  d += " Z";
  return d;
}

const hexPath = roundedHexPath(HEX_W, HEX_H, HEX_CORNER_RADIUS);

export default function HexPattern() {
  return (
    <div className="hex-pattern" aria-hidden="true">
      {ROWS_COLUMNS.map((colsInRow, rowIndex) => (
        <div
          key={rowIndex}
          className={`hex-row ${rowIndex % 2 === 1 ? "hex-row--offset" : ""}`}
        >
          {Array.from({ length: colsInRow }).map((_, colIndex) => (
            <svg
              key={colIndex}
              className="hex"
              width={HEX_W}
              height={HEX_H}
              viewBox={`0 0 ${HEX_W} ${HEX_H}`}
            >
              <path d={hexPath} className="hex__shape" />
            </svg>
          ))}
        </div>
      ))}
    </div>
  );
}