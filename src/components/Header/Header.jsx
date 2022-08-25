import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  MenuButton,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdMail,
  MdMailOutline,
  MdMessage,
  MdOutlineNotifications,
} from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
function Header() {
  const [showSidebar, setShowSidebar] = useState(true);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logout = (response) => {
    localStorage.clear();
    window.location = "/";
  };
  return (
    <Box
      d="flex"
      //   flexDirection={"row"}
      justifyContent={"space-between"}
      bgColor="#FFFF"
      borderRadius="md"
      my={2}
      p={3}
      alignItems="center"
      className=" flex justify-between h-[70px] rounded-lg drop-shadow-sm "
    >
      <Box className="flex ml-16 lg:ml-0 items-center text-[#1E2875] md:block">
        {/* <Sidebar
          showSidebar={showSidebar}
          handleShowSidebar={handleShowSidebar}
        /> */}
        <InputGroup>
          <InputLeftAddon children={<BsSearch />} />
          <Input variant="outline" type="search" placeholder="Search" />
        </InputGroup>
      </Box>
      <Box className="hidden md:flex justify-between w-2/12 items-center">
        <MdOutlineNotifications
          className="text-[#1E2875] text-center"
          size={30}
        />
        <MdMailOutline className="text-[#1E2875] text-center" size={30} />
        <Box>
          <Avatar
            name="Dan Abrahmov"
            src={require("../../assets/avatar.jpg")}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
