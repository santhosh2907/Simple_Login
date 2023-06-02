import React from 'react'

const Dashboard = () => {
    const storedUser = localStorage.getItem('user');
  return (
    <>
        
        <p>{localStorage.getItem('user')}</p>
        {/* <p>{JSON.parse(storedUser)}</p> */}

    </>
  )
}

export default Dashboard