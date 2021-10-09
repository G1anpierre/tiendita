import React from 'react'

type StatusCodeProps = {
  statusCode: number
}

const ServerError: React.FC<StatusCodeProps> = ({statusCode}) => {
  return <div>Hello Error {statusCode}</div>
}

export default ServerError
