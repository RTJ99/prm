import React, { useState } from "react";
import SidebarLink from "./SidebarLink";
import { GrHomeRounded, GrProjects, GrUserExpert } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { MdEvent, MdOutlineWatchLater } from "react-icons/md";
import {
  AiOutlineStar,
  AiOutlineDelete,
  AiOutlineProject,
} from "react-icons/ai";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

// import logo from "../../assets/logo.png";
function Sidebar(props) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="m-5 rounded-lg bg-white text-[#1E2875] lg:flex lg:flex-col hidden drop-shadow-sm  w-8/12 lg:w-full h-[100vh] p-3">
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-between hover:cursor-pointer mb-5 mt-2"
        >
          <div className="w-full flex items-center">
            <GrProjects
              color="#1E2875"
              size={30}
              className="text-[#1E2875] mr-2"
            />
            <p className="font-bold text-[#1E2875] text-3xl">PMS</p>
          </div>
        </div>

        <SidebarLink icon={<HiOutlineHome />} title={"Dashboard"} link={"/"} />
        <SidebarLink
          icon={<AiOutlineProject />}
          title={"Projects"}
          link={"/important"}
        />
        <SidebarLink icon={<BiTask />} title={"Tasks"} link={"/tasks"} />
        <SidebarLink icon={<FaTasks />} title={"Todos"} link={"/todos"} />
        <SidebarLink icon={<MdEvent />} title={"Events"} link={"/events"} />
        <SidebarLink icon={<GrUserExpert />} title={"Leads"} link={"/leads"} />
        <SidebarLink icon={<FiUsers />} title={"Clients"} link={"/clients"} />
        <SidebarLink
          icon={<HiOutlineUsers />}
          title={"Team Members"}
          link={"/team-members"}
        />
      </div>
    </div>
  );
}

export default Sidebar;
