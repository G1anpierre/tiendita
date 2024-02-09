import type {NextApiHandler, NextApiRequest, NextApiResponse} from 'next'

const credentialAuth: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  // POST - ok
  console.log(req.body)
  if (req.body.password === 'aprender') {
    const user = {
      name: 'Gianpierre',
      email: 'fgianpierre@gmail.com',
      image: '',
    }

    return res.status(200).json(user)
  }

  // GET any not OK
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  res.status(401).end()
}

export default credentialAuth
