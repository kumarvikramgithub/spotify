import React from 'react'
import { Icon } from "@iconify/react";
import Navbar from '../Shared/Navbar.js'
import IconText from '../Shared/IconText.js'
import PlaylistContainer from "../Shared/PlaylistContainer.js";
const Home = () => {
  const playListPreviewData = [
    {
      title: "Spotify Playlists",
      cardsDetails: [
        {
          title: `Today's Top Hits`,
          description: `Zach Bryan & Kacey Musgraves are on top of the Hottest 50!`,
          thumbnailUrl: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
        {
          title: `RapCaviar`,
          description: `New Music from Doja Cat, Lil Tecca and Moneybagg Yo.`,
          thumbnailUrl: `https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
        {
          title: `Today's Top Hits`,
          description: `Zach Bryan & Kacey Musgraves are on top of the Hottest 50!`,
          thumbnailUrl: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
        {
          title: `Today's Top Hits`,
          description: `Zach Bryan & Kacey Musgraves are on top of the Hottest 50!`,
          thumbnailUrl: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
        {
          title: `Today's Top Hits`,
          description: `Zach Bryan & Kacey Musgraves are on top of the Hottest 50!`,
          thumbnailUrl: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
      ],
    },
    {
      title: "Sound of India",
      cardsDetails: [
        {
          title: `Today's Top Hits`,
          description: `Zach Bryan & Kacey Musgraves are on top of the Hottest 50!`,
          thumbnailUrl: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
        {
          title: `Today's Top Hits`,
          description: `Zach Bryan & Kacey Musgraves are on top of the Hottest 50!`,
          thumbnailUrl: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
        {
          title: `Today's Top Hits`,
          description: `Zach Bryan & Kacey Musgraves are on top of the Hottest 50!`,
          thumbnailUrl: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
        {
          title: `Today's Top Hits`,
          description: `Zach Bryan & Kacey Musgraves are on top of the Hottest 50!`,
          thumbnailUrl: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
        {
          title: `Today's Top Hits`,
          description: `Zach Bryan & Kacey Musgraves are on top of the Hottest 50!`,
          thumbnailUrl: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
        },
      ],
    },
  ];
  return (
    <div className="h-full w-full flex bg-slate-900">
      <div className="LeftSidebar h-full w-1/5 flex flex-col justify-between">
        <div className="bg-black rounded-xl p-3 m-2">
          <div className="logoDiv w-full border-b border-solid border-gray-700 flex p-3 mb-3">
            <Icon icon="logos:spotify" width="100" />
          </div>
          <IconText
            iconName="material-symbols:home"
            title="Home"
            fontSize="24"
            active
          />
          <IconText iconName="octicon:search-16" title="Search" fontSize="24" />
        </div>
        <div className="bg-black rounded-xl p-3 m-2 mt-0 h-full flex flex-col justify-between">
          <div>
            <IconText
              iconName="fluent:library-24-filled"
              title="Your Library"
              fontSize="24"
            />
            <IconText
              iconName="icon-park-solid:add"
              title="Create Playlist"
              fontSize="24"
            />
            <IconText
              iconName="mdi:heart-box"
              title="Liked Songs"
              fontSize="24"
            />
          </div>
          <div className=" w-1/2 border border-solid border-gray-500 p-1 text-white rounded-full flex justify-center items-center m-3 py-2 cursor-pointer hover:border-gray-100">
            <Icon icon="pajamas:earth" fontSize="18" />
            <div className="ml-1 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>
      <div className="rightSideContentContainer w-4/5 bg-slate-800 bg-opacity-90 text-white rounded-xl m-2 ml-0 overflow-auto">
        <div className="navba h-1/12">
          <Navbar />
        </div>
        <div className="content flex flex-wrap m-4">
          {  playListPreviewData.map((item, index)=>{
            return <div className="PlayListView w-full my-5">
                <PlaylistContainer
                  {...item}
                />
              </div>
          }) 
            }
        </div>
      </div>
    </div>
  );
}

export default Home
