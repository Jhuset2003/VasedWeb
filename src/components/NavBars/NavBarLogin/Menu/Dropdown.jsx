import React, { useState, useEffect, useRef } from "react";
import {
  dropdown_wrapper,
  dropdown_activator,
  dropdown_item_list,
  active,
  item_list,
} from "./dropdown.module.css";
import { FiMenu } from 'react-icons/fi';

function Dropdown({ items = [], dropdownTitle }) {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
        className={dropdown_activator}
        aria-haspopup="true"
        
        onClick={clickHandler}
        ref={activatorRef}
      >
       <button className='BtnWhite'><FiMenu/></button>
      </button>
      <ul
        ref={dropdownListRef}
        className={`${dropdown_item_list} ${isOpen ? active : ""} `}
      >
        {items.map((item, index) => {
          return (
            <li className={item_list} key={index}>
              <a href={item.slug} onClick={clickHandler}>{item.anchor}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;