import React, { useRef, useEffect } from 'react';

const colors = [
  "#000000",
  "#0000FF",
  "#FF0000",
  "#008000",
  "#FFFF00",
  "#808080",
  "#FFC0CB",
  "#FFA500",
  "#FFFF00",
  "#800000",
];

const outline = 2;

function GridCanvas({ size, matrix }) {
  const canvasRef = useRef(null);

  const rowNum = matrix.length
  const colNum = matrix[0].length;

  let cellSize = 0;
  let offsetX = 0;
  let offsetY = 0;


  if (rowNum > colNum) {
    cellSize = Math.floor(size / rowNum) - outline;
    offsetY = (size - ((cellSize + outline) * colNum)) / 2;
  } else {
    cellSize = Math.floor(size / colNum) - outline;
    offsetX = (size - ((cellSize + outline) * rowNum)) / 2;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    matrix.forEach((row, i) => {
      row.forEach((cell, j) => {
        ctx.fillStyle = colors[cell];
        const x = i * (cellSize + outline) + offsetX;
        const y = j * (cellSize + outline) + offsetY;
        ctx.fillRect(y, x, cellSize, cellSize);
      });
    });
  }, [matrix, size, cellSize, offsetX, offsetY]);

  return <canvas ref={canvasRef} width={size} height={size} />;
}
export default GridCanvas;