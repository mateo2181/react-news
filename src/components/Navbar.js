import React from "react";
import ChannelsField from "./ChannelsField";
import Countries from "./Countries";

const Navbar = () => {
  return (
    <nav id="navbar" className="w-full self-center z-10 fixed top-0">
      <ChannelsField />
      <Countries />
    </nav>
  );
};

export default Navbar;
