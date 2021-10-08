import React from 'react'

type ThemeWrapperProps = {
  children: React.ReactNode
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({children}) => {
  return (
    <>
      {children}
      <style jsx global>{`
        :root {
          --primaryColor: #0a0a0a;
          --secondaryColor: #865dff;
          --tomato: #fc462d;
          --green: #0ac763;
        }
      `}</style>
    </>
  )
}

export default ThemeWrapper
