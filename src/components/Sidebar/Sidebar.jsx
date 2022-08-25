import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar(props) {
  const logout = (response) => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div
      className={
        props.showSidebar
          ? "flex fixed h-[100vh]  md:hidden inset-y-0 left-0 w-full bg-[#0000008c] transform -translate-x-full  md:relative  transition duration-200 ease-in-out"
          : "transform -translate-x-0 duration-200 ease-in-out transition  fixed h-[100vh] inset-y-0 left-0 w-full bg-[#0000008c] block md:hidden z-50"
      }
    >
      <div className="sidebar bg-[#fff] w-3/4 space-y-6 py-7 px-6 h-full ">
        <nav
          onClick={props.handleShowSidebar}
          className="flex flex-col space-y-6 "
        >
          <Link to="/" className="text-[14px] text-primary">
            Home
          </Link>
          <Link to="/projects" className="text-[14px] text-primary">
            Projects
          </Link>

          <Link to="/about" className="text-[14px] text-primary]">
            About Us
          </Link>
          {localStorage.getItem("tokenlets") === null ? (
            <div>
              {" "}
              <Link to="/login" className="text-[14px] text-primary]">
                Login
              </Link>
              <Link to="/register" className="text-[14px] text-primary]">
                Sign Up
              </Link>
            </div>
          ) : (
            <>
              <Link to="/profile" className="text-[14px] text-primary]">
                Profile
              </Link>
              <Link to="/add-project" className="text-[14px] text-primary]">
                Add Project
              </Link>

              <b className="text-center">{localStorage.getItem("email")}</b>
              <button
                onClick={logout}
                className="bg-danger text-white px-8 py-2 rounded"
              >
                Logout
              </button>
              {/* <Button
                label={localStorage.getItem("email")}
                onClick={(event) => menu.current.toggle(event)}
              /> */}
            </>
          )}
        </nav>
        <div
          className="h-full absolute right-0 top-0"
          onClick={props.handleShowSidebar}
        >
          <p
            className="text-[30px] text-white font-black px-5"
            onClick={props.handleShowSidebar}
          >
            x
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
