import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import BeenhereIcon from "@material-ui/icons/Beenhere";

export const SelectBtnItem = ({ label, items, handleSelectFilter }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget;

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // You can invoke a callback or add custom logic here
        setIsDropDownOpen(false);
      }
    }, 0);
  };

  return (
    <div class="yosegi-FilterPill-dropdownPillContainer" onBlur={handleBlur}>
      <button
        id="filter-dateposted"
        class="yosegi-FilterPill-pill"
        onClick={(e) => {
          e.preventDefault();
          setIsDropDownOpen(!isDropDownOpen);
        }}
        style={{ backgroundColor: "#fff", color: "black", fontSize: 16 }}
      >
        <div class="yosegi-FilterPill-pillLabel">{label}</div>
        <div class="yosegi-FilterPill-pillIcon">
          <svg
            viewBox="0 0 14 14"
            width="12px"
            height="12px"
            aria-hidden="true"
            color="#fff"
            fill="#fff"
          >
            <g color="#fff">
              <path d="M5,5l4,4,4-4H5Z" color="#fff"></path>
            </g>
          </svg>
        </div>
      </button>
      <ul
        class={`yosegi-FilterPill-dropdownList ${
          isDropDownOpen ? "is-dropdownOpen" : ""
        }`}
        id="filter-dateposted-menu"
        // onBlur={() => setIsDropDownOpen(false)}
      >
        {items.map(({ title, isSelected }, index) => (
          <li class={`yosegi-FilterPill-dropdownListItem `} key={index}>
            <Button
              class="yosegi-FilterPill-dropdownListItemLink"
              onClick={(e) => {
                e.preventDefault();
                setIsDropDownOpen(false);
                handleSelectFilter(label, title);
              }}
              endIcon={isSelected && <BeenhereIcon />}
            >
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
