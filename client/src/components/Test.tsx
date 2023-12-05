import React from 'react'
import SpotlightCard from './SpotlightCard'

function Test() {
  return (
    
       <div className="scrolle flex flex-row gap-0 cursor-grab overflow-auto">
        <SpotlightCard index={1}/>
        <SpotlightCard index={2}/>
        <SpotlightCard index={3}/>
        <SpotlightCard index={4}/>
        <SpotlightCard index={5}/>
        <SpotlightCard index={6}/>
        <SpotlightCard index={7}/>
        <SpotlightCard index={8}/>
        <SpotlightCard index={9}/>
        </div>
    
  )
}

export default Test
