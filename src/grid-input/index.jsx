import React, { useState } from "react";

const GridInput = ({ setBoxData }) => {
  const [rows, setRows] = useState(2);
  const cols = 3
  const [grid, setGrid] = useState([]);
  const [inputPhase, setInputPhase] = useState(false);

  const handleGridSizeSubmit = (e) => {
    e.preventDefault();
    const newGrid = Array.from({ length: rows }, () => Array(cols).fill(1));
    setGrid(newGrid);
    setInputPhase(true);
  };

  const handleGridValueChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxData(grid);
  };

  return (
    <div>
      {!inputPhase ? (
        <form onSubmit={handleGridSizeSubmit}>
          <label>
            Number of Rows:
            <input
              type="number"
              value={rows}
              onChange={(e) => setRows(parseInt(e.target.value))}
              min="2"
              max="5"
              required
            />
          </label>
          <br></br>
          <br></br>
          <button type="submit">Create Grid</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="box-selection-body">
          <div>
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: "flex" }}>
                {row.map((col, colIndex) => (
                  <input
                    key={colIndex}
                    type="number"
                    value={grid[rowIndex][colIndex]}
                    onChange={(e) =>
                      handleGridValueChange(
                        rowIndex,
                        colIndex,
                        parseInt(e.target.value) || 0
                      )
                    }
                    min="0"
                    max="1"
                    style={{ width: "50px", margin: "5px" }}
                  />
                ))}
              </div>
            ))}
          </div>
          <br></br>
          <button type="submit">Submit Grid</button>
        </form>
      )}
    </div>
  );
};

export default GridInput;
