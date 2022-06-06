import React, { useState, useEffect, useRef, useContext } from "react";
import {
  dropdown_wrapper,
  dropdown_activator,
  dropdown_item_list,
  active,
  item_list,
} from "./dropdown.module.css";
import { FiMenu } from 'react-icons/fi';
import navStyles from "../NavStyles/NavbarStyles.module.css"
import { SessionContext } from "../../../context/SessionContext";

function Dropdown({ items = [], dropdownTitle, itemsstudents }) {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user }  = useContext(SessionContext)

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = event => {
    // console.log(event);
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const clickOutsideHandler = event => {
    if (dropdownListRef.current) {
      if (
        dropdownListRef.current.contains(event.target) ||
        activatorRef.current.contains(event.target)
      ) {
        return;
      }

      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector("a").focus();
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.addEventListener("mousedown", clickOutsideHandler);
    }
  }, [isOpen]);

  return (
    <div className={dropdown_wrapper} onKeyUp={keyHandler}>
      <button
        className={dropdown_activator }
        aria-haspopup="true"
        
        onClick={clickHandler}
        ref={activatorRef}
        
      >
        <div className={navStyles.BtnWhite}><FiMenu/></div>
      </button>
      <ul
        ref={dropdownListRef}
        className={`${dropdown_item_list} ${isOpen ? active : ""} `}
      >
        {user.role === 1 || user.role === 2 ?
        <>
        {items.map((item, index) => {
          return (
            <li className={item_list} key={index}>
              <div onClick={clickHandler}>{item.anchor}</div>
            </li>
          );
        })}
        </>
        :<>
        {itemsstudents.map((item, index) => {
          return (
            <li className={item_list} key={index}>
              <div onClick={clickHandler}>{item.anchor}</div>
            </li>
          );
        })}
        </>}
      </ul>
    </div>
  );
}

export default Dropdown;