import React from 'react'
import {useRouter} from 'next/router'
import useSWR from 'swr'

const Result = () => {
  const router = useRouter()
  const {session_id} = router.query

  const {data, error} = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    url => fetch(url).then(res => res.json()),
  )

  return (
    <div>
      <h1>Successful Payment</h1>
      <div>{JSON.stringify(data, null, 2) ?? 'Loading...'}</div>
    </div>
  )
}

export default Result
