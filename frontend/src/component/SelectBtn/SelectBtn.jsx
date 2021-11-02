import axios from "axios";
import React, { useState } from "react";
import { SelectBtnItem } from "../SelectBtnItem/SelectBtnItem";
import { SelectBtnWrapper } from "./SelectBtnSC";

export const SelectBtn = ({ setJobs }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [url, setUrl] = useState(
    "http://localhost:5050/api/v1/jobs?"
  );

  const [selectBtnItems, setSelectBtnItems] = useState([
    {
      label: "Duration",
      items: [
        { title: "+1 Months", isSelected: false },
        { title: "+2 Months", isSelected: false },
        { title: "+3 Months", isSelected: false },
        { title: "+4 Months", isSelected: false },
        { title: "+5 Months", isSelected: false },
        { title: "+6 Months", isSelected: false },
        { title: "+7 Months", isSelected: false },
      ],
    },
    {
      label: "Salary Estimate",
      items: [
        { title: "$45,000+", isSelected: false },
        { title: "$55,000+", isSelected: false },
        { title: "$70,000+", isSelected: false },
        { title: "$90,000+", isSelected: false },
        { title: "$110,000+", isSelected: false },
      ],
    },
    {
      label: "Job Type",
      items: [
        { title: "Full Time", isSelected: false },
        { title: "Part Time", isSelected: false },
        { title: "Work From Home", isSelected: false },
        { title: "Internship", isSelected: false },
      ],
    },
    {
      label: "Sort By",
      items: [
        { title: "Salary asc", isSelected: false },
        { title: "Salary desc", isSelected: false },
        { title: "Duration asc", isSelected: false },
        { title: "Duration desc", isSelected: false },
        { title: "Rating asc", isSelected: false },
        { title: "Rating desc", isSelected: false },
      ],
    },
  ]);

  const handleSelectFilter = async (label, value) => {
    const newS = selectBtnItems.map((item) =>
      item.label === label
        ? {
            ...item,
            items: item.items.map((inItem) =>
              inItem.title === value
                ? { ...inItem, isSelected: !inItem.isSelected }
                : { ...inItem, isSelected: false }
            ),
          }
        : { ...item }
    );
    setSelectBtnItems(newS);

    let newUrl;
    const toggleSelect = (target, type) => {
      const valueType =
        type === "number"
          ? value.replace(/\D/g, "")
          : type === "sort"
          ? value.split(" ")[0].toLowerCase()
          : value;

      const isUndo =
        url.substr(
          url.indexOf(`${target}=`) + `${target}=`.length
        ) === valueType;

      // const targetWitheSignOrNot = url.includes();

      if (url.includes(target)) {
        newUrl = isUndo
          ? url.replace(`&${target}=${valueType}`, "")
          : `${
              url.substr(
                0,
                url.indexOf(`&${target}=`) + `${target}=`.length
              ) + valueType
            }`;
      } else {
        newUrl = `${url}&${target}=${valueType}`;
      }
    };

    if (label === "Duration" || label === "Salary Estimate") {
      if (label === "Duration") {
        toggleSelect("duration", "number");
        console.log(newUrl);
      } else {
        toggleSelect("salaryMin", "number");
        console.log(newUrl);
      }
    } else if (label === "Job Type") {
      toggleSelect("jobType");
      console.log(newUrl);
    } else if (label === "Sort By") {
      toggleSelect(value.split(" ")[1], "sort");
      console.log(newUrl);
    }

    setUrl(newUrl);

    const { data } = await axios.get(newUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setJobs(data.data);
  };

  // yosegi-FilterPill yosegi-FilterPill-container is-desktop
  return (
    <SelectBtnWrapper>
      <div class="yosegi-FilterPill-pillList">
        <button
          id="pill-moreFilters"
          class="yosegi-FilterPill-pill yosegi-FilterPill-moreFilters"
          aria-label="All filters"
        >
          <svg
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.895 4H14.5a.5.5 0 01.5.5v.3a.5.5 0 01-.5.5H8.889a2 2 0 01-3.778 0H3.5a.5.5 0 01-.5-.5v-.3a.5.5 0 01.5-.5h1.605a2 2 0 013.79 0zM3 8.852a.5.5 0 01.5-.5h5.608a2 2 0 013.784 0H14.5a.5.5 0 01.5.5v.3a.5.5 0 01-.5.5h-1.608a2 2 0 01-3.784 0H3.5a.5.5 0 01-.5-.5v-.3zM3 13.204a.5.5 0 01.5-.5h1.615a2 2 0 013.77 0H14.5a.5.5 0 01.5.5v.3a.5.5 0 01-.5.5H8.9a2 2 0 01-3.8 0h-1.6a.5.5 0 01-.5-.5v-.3z"
              fill="#2D2D2D"
            ></path>
          </svg>
        </button>

        {selectBtnItems.map((item, index) => (
          <SelectBtnItem
            key={index}
            {...item}
            handleSelectFilter={handleSelectFilter}
          />
        ))}
      </div>
    </SelectBtnWrapper>
  );
};
