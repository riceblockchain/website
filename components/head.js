import React from 'react'
import NextHead from 'next/head'
import FavIcons from '../components/favicons'
import MetaTags from '../components/metatags'

const Head = props => (
  <NextHead>
    <title>Rice Blockchain</title>
    <MetaTags/>
    <FavIcons/>
  </NextHead>
)

export default Head
