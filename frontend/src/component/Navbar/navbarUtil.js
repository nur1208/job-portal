import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import isAuth from "../../lib/isAuth";

export const useGetRightContainerData = () => {
  useEffect(() => {
    localStorage.getItem("token");
    console.log({ isAuth });
  }, []);
};

export const recruiterNavbarItems = [
  { title: "Jobs", link: "/", isActive: false },
  { title: "Add Jobs", link: "/addjob", isActive: false },
  { title: "My Jobs", link: "/myjobs", isActive: true },
  { title: "Employees", link: "/employees", isActive: false },
  { title: "Chats", link: "/chat", isActive: false },
];

export const applicantNavbarItems = [
  { title: "Jobs", link: "/", isActive: false },
  { title: "Applications", link: "/applications", isActive: false },
  { title: "Chats", link: "/chat", isActive: true },
];

export const useGetNavbarItems = (type) => {
  const options = { recruiterNavbarItems, applicantNavbarItems };

  const [items, setItems] = useState(options[type]);

  const { pathname } = useLocation();

  useEffect(() => {
    const newItems = items.map((item) =>
      item.link === pathname
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );

    setItems(newItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  console.log({ pathname });
  return items;
};

export const renderNavbarItems = (items) =>
  items.map(({ title, link, isActive }, index) => (
    <li class={`jobs tld ${isActive ? "active" : ""}`} key={index}>
      <Link
        to={link}
        title="Jobs"
        class="gtmHeaderNav header-block-link"
      >
        {title}
      </Link>
    </li>
  ));
