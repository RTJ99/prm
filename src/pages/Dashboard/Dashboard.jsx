import React from "react";

import { ImUsers } from "react-icons/im";
import { GiCargoCrane } from "react-icons/gi";
import { GiTruck } from "react-icons/gi";
import { BiNotepad, BiTask } from "react-icons/bi";
import { SplineGraph } from "../../components/Spline/SplineGraph";
import Graph from "../../components/Graph/Graph";
import Donut from "../../components/Donut/Donut";
import { Box, Text } from "@chakra-ui/react";
import { MdEvent, MdTask } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import Card from "../../components/Card/Card";
import Monochrome from "../../components/Monochrome/Monochrome";
import { AiOutlineProject } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";

function Dashboard(props) {
  let deliveriesSample = [
    { in: 1, out: 7 },
    { in: 3, out: 17 },
    { in: 4, out: 8 },
    { in: 5, out: 12 },
    { in: 16, out: 12 },
  ];
  let vehiclesSample = [
    { in: 1, out: 7 },
    { in: 3, out: 17 },
    { in: 4, out: 8 },
    { in: 5, out: 12 },
    { in: 16, out: 12 },
  ];
  let servicesSample = [
    { in: 8, out: 2 },
    { in: 12, out: 5 },
    { in: 6, out: 8 },
    { in: 11, out: 12 },
    { in: 4, out: 12 },
  ];

  return (
    <>
      <Box className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-full">
        <Card
          title={"Projects"}
          number={"100"}
          icon={<AiOutlineProject size={30} color="#1E2875" />}
          pending={"23"}
          completed={"67"}
        />
        <Card
          title={"Tasks"}
          number={"90"}
          icon={<BiTask size={30} color="#1E2875" />}
          pending={"21"}
          completed={"69"}
        />
        <Card
          title={"Todos"}
          number={"98"}
          icon={<FaTasks size={30} color="#1E2875" />}
          pending={"23"}
          completed={"75"}
        />
        <Card
          title={"Events"}
          number={"9"}
          icon={<MdEvent size={30} color="#1E2875" />}
          pending={"3"}
          completed={"6"}
        />
      </Box>

      <Box className="mt-8 bg-white rounded-lg p-5">
        <Text className="text-3xl font-bold text-gray-700">Projects</Text>
        <Graph
          series={[
            {
              name: "Successful",
              data: deliveriesSample.map((amount) => parseInt(amount.in)),
            },
            {
              name: "Unsuccessful",
              data: deliveriesSample.map((amount) => parseInt(amount.out)),
            },
          ]}
          amounts={deliveriesSample}
          title={"Projects"}
        />
      </Box>
      <Box className="mt-8 bg-white rounded-lg p-5">
        <Text className="text-3xl font-bold text-gray-700">Tasks</Text>
        <SplineGraph />
      </Box>
      <Box className="mt-8 bg-white rounded-lg p-5">
        <Text className="text-3xl font-bold text-gray-700">Todos</Text>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto gap-8">
          <Donut />
          <Monochrome />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
