import React from 'react'
import { Icon } from "@iconify/react";
const IconText = ({title,iconName, fontSize="24", active}) => {
  return (
    <div
      className={`icontext w-full flex items-center p-3 cursor-pointer ${
        active ? "text-white" : "text-gray-400"
      } hover:text-white`}
    >
      <div>
        <Icon icon={iconName} fontSize={fontSize} />
      </div>
      <div className={`ml-4 font-semibold text-base`}>{title}</div>
    </div>
  );
}

export default IconText
