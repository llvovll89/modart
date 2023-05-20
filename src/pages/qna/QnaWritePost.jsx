import React, { useState } from 'react';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { createData } from '../../store/reducers/qnaSlice';

const QnaWritePost = () => {
  const [addData, setAddData] = useState({});
  const [category, setCategory] = useState([]);
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
    } else if (e.target.name === 'category') {
      const { value, checked } = e.target;
      if (checked) {
        setCategory([...category, value]);
      } else {
        setCategory(category.filter((item) => item !== value));
      }
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
      await dispatch(createData(dataWidthNickName)).unwrap();
      alert('게시글이 성공적으로 등록되었습니다.');
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
          <h1>{'<Question>'}</h1>
        </div>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <p className="nickname">
            <span className="author">작성자</span>
            {nickName}
          </p>
          <div className="category-wrap">
            <label>
              <input
                type="checkbox"
                name="category"
                value="건강"
                onChange={onChangeHandler}
              />
              <i></i>
              <span>건강</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="패션"
                onChange={onChangeHandler}
              />
              <i></i>
              <span>패션</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="공부"
                onChange={onChangeHandler}
              />
              <i></i>
              <span>공부</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="일상"
                onChange={onChangeHandler}
              />
              <i></i>
              <span>일상</span>
            </label>
          </div>

          <input
            type="text"
            name="title"
            placeholder="제목"
            autoComplete='off'
            onChange={onChangeHandler}
            />
            <input
            type="text"
            name="desc"
            placeholder="내용"
            autoComplete='off'
            onChange={onChangeHandler}
          />

          <input
          type="file"
          id="photo"
          style={{ display: 'none' }}
          name="photo"
          onChange={onChangeHandler}
        />

          <label htmlFor="photo" className="file_label">
            <p>
              <span>
                <AiOutlineFileAdd />
              </span>
              사진올리기
            </p>
          </label>

          <button type="submit">게시하기</button>
        </form>
      </CardForm>
    </Section>
  );
};

export default QnaWritePost;
