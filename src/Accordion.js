import { useState } from "react";

export default function Accordion({ elements }) {
  const [openElements, setOpenElements] = useState(new Set());

  const handleClick = (value) => {
    const newOpenElements = new Set(openElements);
    newOpenElements.has(value)
      ? newOpenElements.delete(value)
      : newOpenElements.add(value);
    setOpenElements(newOpenElements);
  };
  return (
    <div className="accordion">
      {elements.map(({ value, title, contents }) => {
        const isGrow = openElements.has(value);
        return (
          <div className="accordion-item" key={value}>
            <button
              className="accordion-item-title"
              type="button"
              onClick={() => handleClick(value)}
            >
              {title}
              <span
                aria-hidden={true}
                className={`accordion-icon ${
                  isGrow ? "accordion-icon--rotated" : ""
                }`}
              />
            </button>
            <div className="accordion-item-contents" hidden={!isGrow}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}
