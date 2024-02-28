import React, { createContext, useState } from 'react'
import AccordionContent from './AccordionContent'
import AccordionItem from './AccordionItem'
import AccordionTitle from './AccordionTitle'

export const AccordionContext = createContext({
  openItemId: null,
  toggleItem: () => {}
})

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState()

  function toggleItem(id) {
    setOpenItemId((prevId) => (id === prevId ? null : id))
  }

  const ctxValue = {
    openItemId,
    toggleItem
  }

  return (
    <AccordionContext.Provider value={ctxValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle
Accordion.Content = AccordionContent
