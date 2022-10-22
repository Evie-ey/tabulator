
import React, { useEffect, useRef, useState } from "react";
import TabHeader from "./TabHeader";
import { TabPaneProps } from "./TabPane";


export type TabProps =
  | {
    children : React.ReactElement<TabPaneProps>[],
    initialActive: number,
    active?: never,
    onActiveChange?: never,
  }
  | {
    children : React.ReactElement<TabPaneProps>[],
    active: string,
    onActiveChange: () => any,
    initialActive?: never,
  }


export function Tab(props : TabProps) : JSX.Element {
  const [active_tab, setActive] = useState("")


  useEffect(()=> {
    if("initialActive" in props) {
      console.log(props.children && props.children, 'children ')
      props.initialActive &&  setActive(props.children[props.initialActive].props.title)
    } else {
      setActive(props.active)
    }

  }, [props])


  function onTabChange(title:string){
      setActive(title)
  }

  return (
  <div className="tab-wrapper">

    <div className="tab-header-wrapper">

          {props.children.map((tab_pane, index) => {
            console.log(index, 'index')
            return (
              <TabHeader
              active_tab={active_tab}
                title={tab_pane.props.title}
                changeTab={onTabChange}
                key={tab_pane.props.title}
              />
            )

          })}

      </div>

          {props.children.map((tab_pane) => {
            return tab_pane.props.title === active_tab ? tab_pane.props.children: ""

          })}


      </div>


  )
}



