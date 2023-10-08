import { useEffect, useState } from 'react'

const User = (props) => {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('LEARN REACT')
    }, 1000)

    return () => {
      console.log('return')
      clearInterval(timer)
    }
  }, [])

  const { name, location } = props
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: { count2 }</h2>
      <h3>Name: { name }</h3>
      <h4>Location: {location}</h4>
      <h5>Contact: @JahnaviVuyyuru</h5>
    </div>
  )
}

export default User