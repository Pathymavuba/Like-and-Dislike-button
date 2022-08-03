import React, { useState } from 'react'

const App = () => {
  const[like,setLike]=useState(100)
  const[dislike,setDislike]=useState(4)

  const[likeactive,setLikeactive]=useState(false)
  const[dislikeactive,setDislikeactive]=useState(false)
  
  const likef = ()=>{
    if(likeactive){
      setLikeactive(false)
      setLike(like-1)
    }
    else{
      setLikeactive(true)
      setLike(like+1)
      if(dislikeactive){
        setDislikeactive(false)
        setLike(like+1)
        setDislike(dislike-1)
      }
    }
  }
  const dislikef = ()=>{
    if(dislikeactive){
      setDislikeactive(false)
      setDislike(dislike-1)
    }
    else{
      setDislikeactive(true)
      setDislike(dislike+1)
      if(likeactive){
        setLikeactive(false)
        setDislike(dislike+1)
        setLike(like-1)
      }
    }
  }

  return (
    <div className='App'>
      <div></div>
      <button onClick={likef} className={[likeactive? 'active-like':'button']}>Like {like}</button>
      <button onClick={dislikef}  className={[dislikeactive? 'active-dislike':'button']}>Dislike {dislike}</button>
      <div></div>
    </div>
  )
}

export default App