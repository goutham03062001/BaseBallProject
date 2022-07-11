import React from "react";
import EventCard from "./EventCard";
import './Homepage.css'

const Events = [
  {
    team1: "team1",
    team2: "team2",
    venue: "venue",
    date: "date",
    time: "time",
    result: "result",
  },
  {
    team1: "team1",
    team2: "team2",
    venue: "venue",
    date: "date",
    time: "time",
    result: "result",
  },
  {
    team1: "team1",
    team2: "team2",
    venue: "venue",
    date: "date",
    time: "time",
    result: "result",
  },
];

const HomePage = () => {
  return (
    <div className="tournaments">
      <h1>Tournaments</h1>
      <div className="tournaments_list">
        {Events.map((event, index) => {
          return <EventCard key={index} event={event} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
