import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
let Button = ({ getPosts, channel }) => (
  <button
    onClick={() => {
      getPosts(channel);
    }}
    className="px-4 py-2 bg-blue-200 rounded-lg border border-gray-700"
  >
    Get top news
  </button>
);

const mapStateToProps = state => ({ channel: state.channel });
const mapDispatchToProps = { getPosts: fetchPosts };
Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
export default Button;
