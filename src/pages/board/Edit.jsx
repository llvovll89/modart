import React from 'react'
import { useParams } from 'react-router-dom'
import { CardForm, Section } from '../../styles/RecycleStyles';

const Edit = () => {
  const { id } = useParams();

  return (
    <Section>
      <CardForm>
        <form>
          <p className='nickname'></p>
        </form>
      </CardForm>
    </Section>
  )
}

export default Edit