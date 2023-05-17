import React, { useState } from 'react';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd } from 'react-icons/ai';

const TodayWritePost = () => {
  const [addData, setAddData] = useState({});
  const user = useSelector((state) => state.login.user);
  const nickName = user?.nickname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    if (e.target.name === 'photo') {
      setAddData({
        ...addData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setAddData({
        ...addData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataWidthNickName = { ...addData, nickname: nickName, category };
      await dispatch
    } catch (error) {
      
    }
  }

  return (
    <Section>
      <CardForm>
      <div className="post_title">
      <h1>{"<Todays Story>"}</h1>
    </div>

        <form encType="multipart/form-data">
        <p className="nickname">
        <span className='author'>작성자</span>
        {nickName}
      </p>

          <input type="text" placeholder="제목" onChange={onChangeHandler} />
          <input type="text" placeholder="설명" onChange={onChangeHandler} />

          <label htmlFor="photo">
            <AiOutlineFileAdd />
            <input type="file" name="photo" onChange={onChangeHandler} />
          </label>

          <button type="submit">게시하기</button>
        </form>
      </CardForm>
    </Section>
  );
};

export default TodayWritePost;
