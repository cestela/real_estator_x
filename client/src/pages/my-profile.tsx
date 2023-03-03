import { useGetIdentity, useList, useOne } from "@pankod/refine-core";
import React from "react";

import { Typography } from "@pankod/refine-mui";

import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userId,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};
export default MyProfile;
