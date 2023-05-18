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
  // const inputRef = useRef();

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
              자연
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="인물"
                onChange={onChangeHandler}
              />
              인물
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="음식"
                onChange={onChangeHandler}
              />
              음식
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="일상"
                onChange={onChangeHandler}
              />
              일상
            </label>
          </div>

          <input
            type="text"
            placeholder="제목"
            name="title"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="설명"
            name="desc"
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

export default PhotoWritePost;
