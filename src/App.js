import React, { useState } from 'react'

const App = () => {
  const[like,setLike]=useState(100)
  const[dislike,setDislike]=useState(4)
  return (
    <div className='App'>
      <div></div>
      <button>Like {like}</button>
      <button>Dislike {dislike}</button>
    </div>
  )
}

export default App