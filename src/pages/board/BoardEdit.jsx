import React from 'react'
import { useParams } from 'react-router-dom'
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useSelector } from 'react-redux';

const BoardEdit = () => {
  const user = useSelector((state) => state.login.user);

  return (
    <Section>
      <CardForm>
        <form>
          <p className='nickname'>{user.nickname}</p>
        </form>
      </CardForm>
    </Section>
  )
}

export default BoardEdit