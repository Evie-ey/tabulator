
import React, { useState } from "react";
import TabHeader from "./TabHeader";
import { TabPaneProps } from "./TabPane";


export type TabProps = {
  children : React.ReactElement<TabPaneProps>[],

}

export function Tab({children} : TabProps) : JSX.Element {
  const [active, setActive] = useState(children[0].props.title)

  function onTabChange(tab:string){
      setActive(tab)
  }

  return (
  <div className="tab-wrapper">

    <div className="tab-header-wrapper">

          {children.map((tab_pane) => {
            return (
              <TabHeader
                active={active}
                title={tab_pane.props.title}
                changeTab={onTabChange}
              />
            )

          })}

      </div>

          {children.map((tab_pane) => {
            return tab_pane.props.title === active ? tab_pane.props.children: ""

          })}


      </div>


  )
}



