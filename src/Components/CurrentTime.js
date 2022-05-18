import React from 'react'

export default function CurrentTime () {

  const dateTime = new Date().toLocaleString();

  return (
    <>
        <h4>{dateTime}</h4>
    </>
  )
}
