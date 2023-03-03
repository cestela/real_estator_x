import { useList } from "@pankod/refine-core";
import React from "react";

import { Box, Typography } from "@pankod/refine-mui";

import { AgentCard } from "components";

const Agents = () => {
  const { data, isLoading, isError } = useList({
    resource: "users",
  });

  const allAgents = data?.data ?? [];

  console.log("agents", allAgents);
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (isError) {
    return <Typography>Error...</Typography>;
  }

  console.log("agents", allAgents);

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Agents List
      </Typography>
      <Box
        mt="20px"
        sx={{
          display: "flex",
          gap: "20px",
          backgroundColor: "#fcfcfc",
          flexWrap: "wrap",
        }}
      >
        {allAgents.map((agent) => (
          <AgentCard
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent.avatar}
            noOfProperties={agent.allProperties?.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Agents;
