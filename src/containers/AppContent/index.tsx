import React from 'react'

const AppContent: React.FC = props => {
  return (
    <div className="bg-blue-50 w-screen h-screen">
      <div>{props.children}</div>
    </div>
  )
}

export default AppContent
