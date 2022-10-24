import React from "react";

type ITab = {
  title: string;
  changeTab:(title: string) => any;
  active_tab: string;
  showonce?: string
}

const TabHeader = ({title, changeTab, active_tab, showonce}: ITab) => {

  return (
          <button className={`${showonce} header-buttons ${title === active_tab? 'active': ''}`}
            onClick={()=>changeTab(title)}
            data-testid={title}

          > {title}</button>
  )
}

export default TabHeader
