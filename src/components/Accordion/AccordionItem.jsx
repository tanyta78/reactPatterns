import React, { createContext } from 'react'

export const AccordionItemContext = createContext()

export default function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  )
}
