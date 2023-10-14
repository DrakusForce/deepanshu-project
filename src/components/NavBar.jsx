import React, { useEffect, useRef } from "react";
import { UilSlidersV, UilAngleDown } from "@iconscout/react-unicons";
import "../css/NavBar.css";

function NavBar({ groups, setGroups, orders, setOrders }) {
  const menu = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menu.current && !menu.current.contains(event.target)) {
        document.getElementById("menu").classList.remove("depict");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  function open() {
    document.getElementById("menu").classList.toggle("depict");
  }

  return (
    <div className="Visible-Icon" ref={menu}>
      <div>
        <button className="btn" onClick={open}>
          <UilSlidersV />
          Display
          <UilAngleDown />
        </button>
      </div>
      <div id="menu" className="dropdown-menu">
        <div className="dropdown-options">
          <label htmlFor="group-select">Grouping</label>

          <select
            name="groups"
            id="group-select"
            value={groups}
            onChange={(e) => setGroups(e.target.value)}
          >
            <option value={"priority"}>Priority</option>
            <option value={"status"}>Status</option>
            <option value={"userId"}>User</option>
          </select>
        </div>
        <div className="dropdown-options">
          <label htmlFor="order-select">Ordering</label>

          <select
            name="orders"
            id="order-select"
            value={orders}
            onChange={(e) => setOrders(e.target.value)}
          >
            <option value={"priority"}>Priority</option>
            <option value={"title"}>Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
