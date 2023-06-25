// Import icons
import { BiHomeCircle, BiHash, BiBookmark } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiFileList2Line } from "react-icons/ri";
import { GoVerified } from "react-icons/go";

// Import styling of element companent

export default function Element({ name, hide, active, setActive }) {
  const changeToActive = () => {
    setActive(name);
  };

  let selectedIcon = null;

  switch (name) {
    case "home":
      selectedIcon = <BiHomeCircle className="icon" />;
      break;
    case "explore":
      selectedIcon = <BiHash className="icon" />;
      break;
    case "bookmarks":
      selectedIcon = <BiBookmark className="icon" />;
      break;
    case "profile":
      selectedIcon = <BsPerson className="icon" />;
      break;
    case "more":
      selectedIcon = <CiCircleMore className="icon" />;
      break;
    case "verified":
      selectedIcon = <GoVerified className="icon" />;
      break;
    case "notifications":
      selectedIcon = <IoMdNotificationsOutline className="icon" />;
      break;
    case "messages":
      selectedIcon = <HiOutlineEnvelope className="icon" />;
      break;
    case "lists":
      selectedIcon = <RiFileList2Line className="icon" />;
      break;
    default:
      selectedIcon = null;
  }

  return (
    <div
      className={`div-element ${active ? "active" : ""}`}
      onClick={changeToActive}
    >
      {selectedIcon}
      <span className={hide ? "span-name hide" : "span-name"}>{name}</span>
    </div>
  );
}
