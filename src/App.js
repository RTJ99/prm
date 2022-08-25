import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/SideNav";
import ContentArea from "./components/ContentArea/ContentArea";
import MobileSidebar from "./components/Sidebar/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Card from "./components/Card/Card";
import { GrProjects } from "react-icons/gr";
import { MdEvent, MdTask } from "react-icons/md";
import BarChartComponent from "./components/BarChart/BarChartComponent";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="lg:flex max-h-[100vh] overflow-hidden">
      <div className="lg:w-2/12">
        <Sidebar />
        <div className="lg:hidden ">
          <MobileSidebar
            showSidebar={showSidebar}
            handleShowSidebar={handleShowSidebar}
          />
        </div>{" "}
        <div className="block  fixed top-6 z-[1] left-9 rounded flex py-2  justify-center sm:hidden w-[60px]">
          <Box
            onClick={handleShowSidebar}
            className="lg:hidden p-2 border rounded-md "
          >
            <AiOutlineMenu
              size={28}
              onClick={handleShowSidebar}
              className="text-center"
              color="#000"
            />
          </Box>
        </div>
      </div>
      <div className="lg:w-10/12">
        <ContentArea>
          <Header />
          <Dashboard />
          <Box className="bg-white rounded-lg p-5 mt-8">
            <BarChartComponent />
          </Box>
        </ContentArea>
      </div>
    </div>
  );
}

export default App;
