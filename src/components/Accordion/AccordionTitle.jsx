import React from 'react';
import { useAccordionContext } from './hooks/useAccordionContext';
import { useAccordionItemContext } from './hooks/useAccordionItemContext';

export default function AccordionTitle({ className, children }) {
  const { toggleItem } = useAccordionContext()
  const { id } = useAccordionItemContext()

  return (
    <h3
      onClick={() => toggleItem(id)}
      className={className}
    >
      {children}
    </h3>
  )
}
