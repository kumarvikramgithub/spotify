import React from 'react'

const Card = ({ iconName = "dashicons:spotify", fontSize='16', color='red', title, description, thumbnailUrl }) => {
  return (
    <div className="w-1/5 bg-black bg-opacity-20 hover:bg-opacity-50 hover:bg-slate-500 p-4 rounded-md cursor-pointer">
      <div>
        <div className="Img relative">
          <img
            src={thumbnailUrl}
            alt="Playlist Thumbnail"
            className="rounded-sm"
          />
        </div>
      </div>
      <div>
        <div className="text-white text-base font-bold py-3">{title}</div>
        <div className="text-gray-500 text-sm font-semibold">{description}</div>
      </div>
    </div>
  );
};

export default Card
