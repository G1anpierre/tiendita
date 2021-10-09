import React from 'react'
import {NextPage} from 'next'
import NotFound from './404'
import ServerError from './500'

type ErrorPageProps = {
  statusCode?: number
  message?: string
}

const ErrorPage: NextPage<ErrorPageProps> = ({statusCode, message}) => {
  if (statusCode === 404) {
    return <NotFound />
  }

  if (typeof statusCode === 'number' && statusCode > 500) {
    return <ServerError statusCode={statusCode} />
  }

  let errorMessage = message
  if (!message) {
    errorMessage = statusCode
      ? 'An error occurred on the server'
      : 'An error occurred on the client'
  }

  return (
    <div>
      <h1>hei {errorMessage}</h1>
      {!statusCode ? null : <h2> ERRORCODE : {statusCode}</h2>}
    </div>
  )
}

ErrorPage.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {statusCode}
}

export default ErrorPage
