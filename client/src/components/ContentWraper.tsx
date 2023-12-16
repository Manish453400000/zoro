import React from 'react'

interface ChildComponent {
  children: React.ReactNode
}
const ContentWraper: React.FC<ChildComponent> = ({children}) => {
  return (
    <div className='container-div-wrapper'>
      <div className="contentWraper">
        {children}
      </div>
    </div>
  )
}

export default ContentWraper