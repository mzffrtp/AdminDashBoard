import React from "react"
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider"
import Navbar from "./components/Navbar";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
function App() {
  const { activeMenu } = useStateContext()
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg mt-28">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray" style={{ borderRadius: "50%", backgroundColor: "pink" }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white mt-28"><Sidebar /></div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar /></div>
            )}
          <div className={`dark:bg-main-drk-bg bg-main-bg min-h-screen w-full border-4 ${activeMenu ? "md:ml-72" : "flex-2"}`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"><Navbar /></div>

            <div>
              <Routes>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
