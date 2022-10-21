import React from "react";

type ITab = {
  title: string;
  changeTab:(title: string) => any;
  active: string;
}

const TabHeader = ({title, changeTab, active}: ITab) => {
  return (
          <button className={`header-buttons ${title === active? 'active': ''}`}
            onClick={()=>changeTab(title)}
          > {title}</button>
  )
}

export default TabHeader
