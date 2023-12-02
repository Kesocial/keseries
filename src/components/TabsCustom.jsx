"use client"
import {Tabs, Tab} from "@nextui-org/react";

export function TabsCustom({items,component:Component,ariaLabel,variant,fullWidth}) {
  return (
    <Tabs classNames={{panel: "w-full"}} fullWidth={fullWidth} aria-label={ariaLabel} items={items} variant={variant}>
    {(item) => (
      <Tab  key={item.id} title={item.title}>
        <Component {...item}/>
      </Tab>
    )}
  </Tabs>
  )
}

