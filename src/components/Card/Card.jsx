import { Box } from "@chakra-ui/react";
import React from "react";
import { GrProjects } from "react-icons/gr";

function Card(props) {
  return (
    <div className="rounded-lg h-24 mt-5 w-full md:w-full bg-white p-4">
      <Box className=" flex justify-between  items-center ">
        <Box>
          <p className=" text-gray-700 font-semibold">{props.title}</p>
          <p className="font-bold text-2xl ">{props.number}</p>
        </Box>
        <Box className="rounded-lg p-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100">
          {props.icon}
        </Box>
      </Box>
      <Box className="text-xs flex justify-between w-2/3">
        <p className="text-green-500">{props.completed} Completed</p>
        <p className="text-orange-300">{props.pending} Pending</p>
      </Box>
    </div>
  );
}

export default Card;
