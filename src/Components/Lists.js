import React from 'react'

const Lists = ({usernames}) => {
  return (
    <div>
      <ul>
      {
        usernames.map((username,index)=>(
            <li key={index}>
            {username.name}
            </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Lists
