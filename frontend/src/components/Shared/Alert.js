import React from 'react'
import { Icon } from "@iconify/react";

const AlertMessage = ({ message, classNames, iconName, iconClasses }) => {
  return (
    <div
      className={`${classNames} p-3 flex items-center justify-center font-roboto`}
    >
      <Icon icon={iconName} fontSize="18" className={`${iconClasses} mr-4`} />
      {message}
    </div>
  );
};

export default AlertMessage
