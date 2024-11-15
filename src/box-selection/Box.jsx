import React, { useEffect, useState } from "react";
import "./box.css";

const Box = ({ data }) => {
  const boxes = data.flat(Infinity);
  const visibleBoxes = boxes.filter((item) => item === 1);
  const [selectedBox, setSelectedBox] = useState(new Set());
  const [isDeslecting, setIsDeselecting] = useState(false);

  const handleBoxClick = (e) => {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");
    if (index === null || status === "hidden" || isDeslecting) {
      return;
    }
    setSelectedBox((prevSelectedBox) => {
      return new Set(prevSelectedBox.add(index));
    });
  };

  useEffect(() => {
    if (selectedBox.size >= visibleBoxes.length) {
      const selectionOrder = [...selectedBox];
      const deselectBoxes = () => {
        if (selectionOrder.length > 0) {
          const indexToRemove = selectionOrder.shift();
          setSelectedBox((prevSelectedBox) => {
            const newSelectedBox = new Set(prevSelectedBox);
            newSelectedBox.delete(indexToRemove);
            return newSelectedBox;
          });
          setTimeout(deselectBoxes, 1000);
        } else {
          setIsDeselecting(false);
        }
      };

      deselectBoxes();
      setIsDeselecting(true);
    }
  }, [selectedBox, visibleBoxes]);

  return (
    <>
      {boxes.map((box, index) => {
        const status = box === 1 ? "visible" : "hidden";
        const selected = selectedBox.has(index.toString()) ? "selected" : "not-selected";
        return (
          <div
            key={`box-${index}`}
            className={`box ${status} ${selected}`}
            data-index={index}
            data-status={status}
            onClick={handleBoxClick}
          ></div>
        );
      })}
    </>
  );
};

export default Box;
