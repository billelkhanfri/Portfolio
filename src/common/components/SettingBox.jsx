import { useState, useEffect, useRef } from "react";
import "../styles/common.css";
import Weather from "./weather/Weather";
import { CiMenuKebab } from "react-icons/ci";


function SettingBox() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    // add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      <div
        className={`toggle-settings ${toggle ? "toggle-settings--open" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <CiMenuKebab className={`gear ${toggle ? "active" : ""}`} />
      </div>

      
        <div className={`settings-box ${toggle ? "settings-box-open" : ""}`}>
          <div className="settings-container">
            <Weather></Weather>
          </div>
        </div>
      
    </div>
  );
}

export default SettingBox;
