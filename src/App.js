import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import { appContext } from "./context/appContext";

function App() {
  const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [curentColor, setCurentColor] = useState("#03C9D7");
  const [curentMode, setCurentMode] = useState("Ligth");
  const [themeSettings, setThemeSettings] = useState(false);
  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });
  const setMode = (e) => {
    setCurentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  return (
    <div>
      <BrowserRouter>
        <appContext.Provider
          value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            curentMode,
            setCurentMode,
            themeSettings,
            setThemeSettings,
            setMode,
            setColor,
            curentColor,
          }}
        >
          <div className={curentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
              <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
                {/* The Tooltip component displays a pop-up containing an information or a message when you hover, click, focus, or touch an element.  */}
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    className="text-3xl hover:bg-light-gray p-2 hover:drop-shadow-xl hover:text-blue-400 rounded-3xl text-white"
                    style={{ backgroundColor: curentColor }}
                    onClick={() => {
                      setThemeSettings(true);
                    }}
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar  dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0">
                  <Sidebar />
                </div>
              )}
              <div
                className={`bg-main-bg dark:bg-main-dark-bg min-h-screen w-full ${
                  activeMenu ? "md:ml-72" : "flex-2"
                }`}
              >
                <div className="fixed md:static dark:bg-main-dark-bg navbar w-full">
                  <Navbar />
                </div>

                <div>
                  {themeSettings && <ThemeSettings />}
                  <Routes>
                    {/* dashboard  */}
                    <Route path="/" element={<Ecommerce />} />
                    <Route path="/ecommerce" element={<Ecommerce />} />

                    {/* pages  */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    {/* apps  */}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/color-picker" element={<ColorPicker />} />

                    {/* charts  */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
