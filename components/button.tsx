import React from 'react'

type ButtonType = {
  children: React.ReactNode
  callback: () => void
}

const Button: React.FC<ButtonType> = ({children, callback}) => {
  return (
    <>
      <button className="button primary" onClick={callback}>
        {children}
      </button>
      <style jsx>{`
        .button {
          border: none;
          border-radius: 8px;
          color: white;
          background-color: grey;
          padding: 10px 0;
          font: normal 400 14px/16px Poppins;
          cursor: pointer;
        }

        .button.primary {
          background-color: #0ac763;
        }
      `}</style>
    </>
  )
}

export default Button
