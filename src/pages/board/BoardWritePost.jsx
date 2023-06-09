import React, { useEffect, useRef, useState } from 'react';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { createData } from '../../store/reducers/boardSlice';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const BoardWritePost = () => {
  const user = useSelector((state) => state.login.user);
  const nickName = user?.nickname;
  const inputRef = useRef();
  const [addData, setAddData] = useState({});

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

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const dataWithNickName = { ...addData, nickname: nickName };
      await dispatch(createData(dataWithNickName)).unwrap();
      alert('게시글이 성공적으로 등록되었습니다.');
      navigate(-1);
      console.log(addData);
    } catch (error) {
      alert('게시글 등록에 실패하였습니다.');
      console.log(error);
    }
  };

  return (
    <Section>
      <CardForm className='ootd'>
        <div className="post_title">
          <h1>DailyLook</h1>
        </div>

        <p className="nickname">
            {nickName}
          </p>
        <form onSubmit={onSubmitHandler} encType="multipart/form-data" className='ootd_form'>
          <div className="text_area">
            <label htmlFor="title">제목</label>
            <input
              ref={inputRef}
              type="text"
              onChange={onChangeHandler}
              autoComplete="off"
              name="title"
              id="title"
              placeholder="글제목"
            />
          </div>
          <div className="text_area">
            <label htmlFor="brand">브랜드</label>
            <input
              type="text"
              onChange={onChangeHandler}
              autoComplete="off"
              name="brand"
              id="brand"
              placeholder="브랜드명 ex) 나이키"
            />
          </div>
          <div className="text_area">
            <label htmlFor="height">신장</label>
            <input
              type="text"
              id="height"
              onChange={onChangeHandler}
              autoComplete="off"
              name="height"
              placeholder="키"
            />
          </div>
          <div className="text_area">
            <label htmlFor="weight">몸무게</label>
            <input
              type="text"
              onChange={onChangeHandler}
              autoComplete="off"
              name="weight"
              placeholder="몸무게"
              id="weight"
            />
          </div>
          <div className="text_area">
            <label htmlFor="desc">내용</label>
            <textarea
              type="text"
              name="desc"
              onChange={onChangeHandler}
              placeholder="contents.."
              id="desc"
            />
          </div>
        </form>

        <div className="submit_btn">
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
        </div>
      </CardForm>
    </Section>
  );
};

export default BoardWritePost;
