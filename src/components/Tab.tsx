
import React, { useEffect, useState } from "react";
import TabHeader from "./TabHeader";
import { TabPaneProps } from "./TabPane";


type GetIndex<T> = T extends `${infer N extends number}` ? N : never


export type TabProps <T extends React.ReactElement<TabPaneProps>[]> = {children: [...T]} & (
  | {

    initialActive: GetIndex<`${number}` & keyof T>,
    active?: never,
    onActiveChange?: never
  }
  | {


    active: string,
    onActiveChange: (title:string) => any,
    initialActive?: never,
  }


)

export function Tab<T extends React.ReactElement<TabPaneProps>[]>(props : TabProps<T>) : JSX.Element {


  const [active_tab, setActive] = useState("")

  useEffect(()=> {
    if("initialActive" in props) {
      props.initialActive !== undefined ? setActive(props.children[props.initialActive].props.title):
      setActive("");
    } else {
      setActive(props.active)
    }


  }, [props])


  function onTabChange(title:string){
    props.onActiveChange && props.onActiveChange(title)
    setActive(title)

  }

  return (
  <div className="tab-wrapper">
    <div className="tab-header-wrapper">
      {props.children.map((tab_pane, index) => {
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

            if(tab_pane.props.title !== active_tab) return ""
              return (
                <div data-testid="content" key={tab_pane.props.title}>
                  {tab_pane.props.title === active_tab ? tab_pane.props.children: ""}
                </div>
              )

          })}


      </div>


  )
}



