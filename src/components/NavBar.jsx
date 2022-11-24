import React from "react";
import { Link as LinkRoute } from "react-router-dom";

export default function NavBar({ naV }) {
  return (
    <nav className={`${naV}`}>
      <LinkRoute to="/">
        Home
      </LinkRoute>
      <LinkRoute to="/Hotels">
        Hotel
      </LinkRoute>
      <LinkRoute to="/Cities">
        City
      </LinkRoute>
      <LinkRoute to="/NewHotel">
        New Hotel
      </LinkRoute>
      <LinkRoute to="/NewCity">
        New City
      </LinkRoute>
      <LinkRoute to="/MyHotels">
        My Hotels
      </LinkRoute>
      <LinkRoute to="/MyCities">
        My Cities
      </LinkRoute>
      <LinkRoute to="/MyItineraries">
        My Itineraries
      </LinkRoute>
    </nav>
  );
}
