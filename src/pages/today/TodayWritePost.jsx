import React, { useState } from 'react';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { createData } from '../../store/reducers/todaySlice';

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
      const dataWidthNickName = { ...addData, nickname: nickName };
      await dispatch(createData(dataWidthNickName)).unwrap();
      navigate(-1);
    } catch (error) {
      alert('게시글 등록에 실패하였습니다.');
      console.log(error);
    }
  };

  return (
    <Section>
      <CardForm>
        <div className="post_title">
          <h1>{'<Todays Story>'}</h1>
        </div>

        <form encType="multipart/form-data">
          <p className="nickname">
            <span className="author">작성자</span>
            {nickName}
          </p>

          <input
            type="text"
            name="title"
            placeholder="제목"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="desc"
            placeholder="내용"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="type"
            placeholder="종류"
            onChange={onChangeHandler}
          />

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
