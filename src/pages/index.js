import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello People!</h1>
    <br />
    <Link to="/about/">Go to About</Link>
  </Layout>
)

export default IndexPage
