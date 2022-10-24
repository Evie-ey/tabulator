import React from "react";

export type TabPaneProps = {
  title: string,
  children: any,

}
 export function TabPane({children}: TabPaneProps) : JSX.Element {
  return (
    <>
      {children}
    </>
  )

}

