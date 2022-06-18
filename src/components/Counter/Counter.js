import React, {useEffect} from 'react'

const Counter = ({setCount, count}) => {
    
   useEffect(() => {
    const interval = setInterval(() => {
        setCount(seconds => seconds - 1)
    }, 1000);
    return () => clearInterval(interval)
   },[])


  return (
    <div>{count}</div>
  )
}

export default Counter