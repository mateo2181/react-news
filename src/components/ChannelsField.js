import React from "react";
import Channel from "../containers/Channel";
const ChannelsField = () => (
  <div className="flex flex-wrap bg-gray-800 -mx-2 px-2 pt-2 pb-2 justify-between">
    <Channel channelName="BBC" channelString="bbc-news" />
    <Channel channelName="CNBC" channelString="cnbc" />
    <Channel channelName="CNN" channelString="cnn" />
    <Channel channelName="FT" channelString="financial-times" />
    <Channel channelName="ESPN" channelString="espn" />
    <Channel channelName="GOOGLE" channelString="google-news" />
  </div>
);

export default ChannelsField;
