import React from 'react'
import Place from '../components/Place'
import SearchableList from '../components/SearchableList/SearchableList'
import { PLACES } from '../data/places'

export default function RenderPropsExample() {
  return (
    <>
      <SearchableList
        items={PLACES}
        itemKeyFn={(item) => item.id}
      >
        {(item) => <Place item={item} />}
      </SearchableList>
      <SearchableList
        items={['item1', 'item2', 'item3']}
        itemKeyFn={(item) => item}
      >
        {(item) => item}
      </SearchableList>
      <SearchableList
        items={['k1', 'k2', 'k3']}
        itemKeyFn={(item) => item}
        render={(item) => item}
      />
    </>
  )
}
