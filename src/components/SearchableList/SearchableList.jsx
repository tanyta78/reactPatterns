import React, { useRef, useState } from 'react'

export default function SearchableList({ items, itemKeyFn, render, children }) {
  const lastChange = useRef() //used for debouncing
  const [searchTerm, setSearchTerm] = useState('')

  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleSearch(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current)
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null
      setSearchTerm(event.target.value)
    }, 500)
  }

  return (
    <div className="searchable-list">
      <input
        type="search"
        placeholder="Search"
        onChange={handleSearch}
      />
      <ul>
        {searchResult.map((item) => (
          <li key={itemKeyFn(item)}>
            {render ? render(item) : children(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}
