import React from 'react'

interface ISliderprops {
    children:React.ReactNode
}
const SilderLayout = ({children}:ISliderprops) => {
  return (
    <>
     {children}
    </>
  )
}

export default SilderLayout