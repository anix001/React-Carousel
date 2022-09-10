import React from 'react'

interface IMainLayoutProps{
    children: React.ReactNode
}

const MainLayout = ({children}:IMainLayoutProps) => {
  return (
    <>
     {children}
    </>
  )
}

export default MainLayout