import React from 'react';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd } from 'react-icons/ai';

const QnaWritePost = () => {
  const user = useSelector((state) => state.login.user);
  const nickName = user?.nickname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Section>
      <CardForm>
        <div className="post_title">
          <h1>{"<Question>"}</h1>
        </div>
        <form encType="multipart/form-data">
          <p className="nickname">
            <span className='author'>작성자</span>
            {nickName}
          </p>
          <input type="text" placeholder="제목" />
          <input type="text" placeholder="내용" />
           
          <label htmlFor="photo">
            <AiOutlineFileAdd />
            <input type="file" name="photo" />
          </label>

          <button type="submit">게시하기</button>
        </form>
      </CardForm>
    </Section>
  );
};

export default QnaWritePost;
