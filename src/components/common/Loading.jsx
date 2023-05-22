import React from 'react'
import { LoaderContainer, Section } from '../../styles/RecycleStyles'

const Loading = () => {
  return (
    <Section>
      <LoaderContainer>
        <div className="loader"></div>
        <h1>Loading...wait for website..</h1>
      </LoaderContainer>
    </Section>
  )
}

export default Loading