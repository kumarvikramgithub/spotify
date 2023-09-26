import React from 'react'
import Card from "./Card.jsx";
const PlaylistContainer = ({ title, cardsDetails }) => {
  return (
    <div className="w-full">
      <div className="mb-5 font-bold text-white text-2xl">{title}</div>
      <div className="playlistCard flex justify-between space-x-3">
        {cardsDetails.map((card) => {
          return <Card {...card} />;
        })}
      </div>
    </div>
  );
};

export default PlaylistContainer
