import React from "react";
import { connect } from "react-redux";
import { fetchPostsByCountry } from "../actions";

let CountryPosts = ({ countryText, countryParam, getPosts }) => (
  <span
    className="text-gray-300 text-sm px-2 cursor-pointer"
    onClick={() => getPosts(countryParam)}
  >
    {countryText}
  </span>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = { getPosts: fetchPostsByCountry };

CountryPosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryPosts);

export default CountryPosts;
