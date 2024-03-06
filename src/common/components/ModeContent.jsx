import { useState } from "react";
import { VscColorMode } from "react-icons/vsc";

function ModeContent() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      handelDarktMode();
    } else {
      handelLighttMode();
    }
  };

  const handelDarktMode = () => {
    const root = document.documentElement;
    root.style.setProperty("--body-color", "#333333");
    root.style.setProperty("--header-color", "#fffffff3");
    root.style.setProperty("--text-color", "#fff");
    root.style.setProperty("--nav-color", "#00372a");
  };

  const handelLighttMode = () => {
    const root = document.documentElement;
    root.style.setProperty("--body-color", "#f9f9f9");
    root.style.setProperty("--header-color", "#00000095");
    root.style.setProperty("--text-color", "#00372a");
    root.style.setProperty("--nav-color", "#fff");
  };

  return (
    <>
      {isDarkMode ? (
        <VscColorMode
          style={{ width: "32px", height: "32px" }}
          onClick={toggleMode}
        />
      ) : (
        <VscColorMode
          style={{ width: "32px", height: "32px" }}
          onClick={toggleMode}
        />
      )}
    </>
  );
}

export default ModeContent;
