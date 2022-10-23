import React from "react";

type ITab = {
  title: string;
  changeTab:(title: string) => any;
  active_tab: string;
}

const TabHeader = ({title, changeTab, active_tab}: ITab) => {

  return (
          <button className={`header-buttons ${title === active_tab? 'active': ''}`}
            onClick={()=>changeTab(title)}

          > {title}</button>
  )
}

export default TabHeader
