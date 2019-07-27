import React from "react";
import CountryPosts from "../containers/CountryPosts";

let Countries = () => (
  <div className="flex flex-wrap bg-gray-700 -mx-2 px-2 pt-2 pb-2 justify-start items-center">
    <span className="text-gray-500"> News by Country: </span>
    <CountryPosts countryText="Argentina" countryParam="ar" />
    <CountryPosts countryText="Brasil" countryParam="br" />
    <CountryPosts countryText="EE.UU" countryParam="us" />
    <CountryPosts countryText="México" countryParam="mx" />
    <CountryPosts countryText="Italia" countryParam="it" />
    <CountryPosts countryText="Gran Bretaña" countryParam="gb" />
  </div>
);

export default Countries;
