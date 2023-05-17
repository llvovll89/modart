import React from 'react';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QnaWritePost = () => {
  const user = useSelector((state) => state.login.user);
  const nickName = user?.nickname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Section>
      <CardForm>
        <form encType="multipart/form-data">
          <p className="nickname">{nickName}</p>

          <input type="text" placeholder='제목' />
          <input type="text" placeholder='내용' />

          <button type="submit">게시하기</button>
        </form>
      </CardForm>
    </Section>
  );
};

export default QnaWritePost;
