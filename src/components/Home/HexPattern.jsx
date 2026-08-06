import { useMemo } from "react";

const DEFAULT_ROWS_COLUMNS = [5, 4, 5];
const MOBILE_ROWS_COLUMNS = [4, 3];
const DEFAULT_HEX_W = 280;
const DEFAULT_HEX_H = 400;
const HEX_CORNER_RADIUS_RATIO = 0.1;

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

export default function HexPattern({
  hexWidth = DEFAULT_HEX_W,
  hexHeight = DEFAULT_HEX_H,
  rowsColumns,
  rows,
  cols,
  isMobile = false,
}) {
  // أولوية الاختيار: rowsColumns (شكل متغير) > rows+cols (شبكة منتظمة) > الافتراضي حسب isMobile
  const activeRowsColumns = useMemo(() => {
    if (rowsColumns) return rowsColumns;
    if (rows && cols) return Array.from({ length: rows }, () => cols);
    return isMobile ? MOBILE_ROWS_COLUMNS : DEFAULT_ROWS_COLUMNS;
  }, [rowsColumns, rows, cols, isMobile]);

  const hexPath = useMemo(() => {
    const cornerRadius = hexWidth * HEX_CORNER_RADIUS_RATIO;
    return roundedHexPath(hexWidth, hexHeight, cornerRadius);
  }, [hexWidth, hexHeight]);

  let globalIndex = 0;

  return (
    <div className="hex-pattern" aria-hidden="true">
      {activeRowsColumns.map((colsInRow, rowIndex) => (
        <div
          key={rowIndex}
          className={`hex-row ${rowIndex % 2 === 1 ? "hex-row--offset" : ""}`}
        >
          {Array.from({ length: colsInRow }).map((_, colIndex) => {
            const delay = (globalIndex % 8) * 0.06;
            globalIndex += 1;
            return (
              <svg
                key={colIndex}
                className="hex"
                width={hexWidth}
                height={hexHeight}
                viewBox={`0 0 ${hexWidth} ${hexHeight}`}
                style={{ "--hex-delay": `${delay}s` }}
              >
                <path d={hexPath} className="hex__shape" />
              </svg>
            );
          })}
        </div>
      ))}
    </div>
  );
}
