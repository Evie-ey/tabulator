import React from "react";

export type TabPaneProps = {
  title: 'Kampala'| 'Dublin'|'India'|'Arua',
  children: any,

}
 export function TabPane({children}: TabPaneProps) : JSX.Element {
  return (
    <>
      {children}
    </>
  )

}

export enum TabTitles {
  Kampala = 'Kampala',
  Dublin = 'Dublin',
  India = 'India',
  Kigali = 'Kigali',
  Nairobi = 'Nairobi',


}
