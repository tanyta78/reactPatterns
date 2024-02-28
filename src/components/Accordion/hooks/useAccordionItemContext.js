import { useContext } from 'react'
import { AccordionItemContext } from '../AccordionItem'

export function useAccordionItemContext(params) {
  const ctx = useContext(AccordionItemContext)

  if (!ctx) {
    throw new Error(
      'AccordionItem related components must be wrapped by <AccordionItem>'
    )
  }

  return ctx
}
