import { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import Element from "./Element";
import logoSvg from "../assets/react.svg";

export default function SideBar() {
  const [close, setClose] = useState(false);
  const [activeElement, setActiveElement] = useState(null);

  const changeState = () => {
    setClose(!close);
  };

  const elements = [
    "home",
    "explore",
    "notifications",
    "messages",
    "verified",
    "profile",
    "more"
  ];

  const setActive = (elementName) => {
    setActiveElement(elementName);
  };

  return (
    <>
      <section className={close ? "hideSection" : "showSection"}>
        <div className="div-element" onClick={changeState}>
          <AiOutlineTwitter className="icon-twitter" />
        </div>
        <div className="element">
          {elements.map((elem, index) => (
            <Element
              name={elem}
              hide={close}
              active={activeElement === elem}
              setActive={setActive}
              key={index}
            />
          ))}
        </div>
    </section>
    </>
  );
}
