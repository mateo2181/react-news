import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
let Channel = ({ channelName, channelString, getPosts, active }) => (
  <div
    onClick={() => getPosts(channelString)}
    className={
      active === channelString
        ? "rounded-sm bg-blue-500 text-white py-2 px-4"
        : "text-gray-400 py-2 px-4 hover:underline cursor-pointer"
    }
  >
    <div>{channelName}</div>
  </div>
);

const mapStateToProps = state => ({ active: state.channel });
/*const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    fetchPosts(ownProps.channelString);
  }
}); */
const mapDispatchToProps = { getPosts: fetchPosts };
Channel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
export default Channel;
