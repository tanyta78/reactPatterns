import React from 'react'
import { useAccordionContext } from './hooks/useAccordionContext'
import { useAccordionItemContext } from './hooks/useAccordionItemContext'

export default function AccordionContent({ className, children }) {
  const { openItemId, toggleItem } = useAccordionContext()
  const { id } = useAccordionItemContext()

  const isOpen = openItemId === id

  return (
    <div
      className={
        isOpen ? `${className ?? ''} open` : `${className ?? ''} close`
      }
    >
      {children}
    </div>
  )
}
