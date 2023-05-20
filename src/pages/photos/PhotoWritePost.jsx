import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';
import { useDispatch, useSelector } from 'react-redux';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { createData } from '../../store/reducers/photoSlice';

const PhotoWritePost = () => {
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
          <h1>{'<Photos>'}</h1>
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
                value="자연"
                onChange={onChangeHandler}
              />
              <i></i>
              <span>자연</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="인물"
                onChange={onChangeHandler}
              />
              <i></i>
              <span>인물</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="음식"
                onChange={onChangeHandler}
              />
              <i></i>
              <span>음식</span>
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
            placeholder="제목"
            name="title"
            autoComplete='off'
            onChange={onChangeHandler}
            />
            <input
            type="text"
            placeholder="설명"
            name="desc"
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

export default PhotoWritePost;
