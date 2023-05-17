import React, { useEffect, useRef, useState } from 'react';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { createData } from '../../store/reducers/boardSlice';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const WritePost = () => {
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
      navigate('/');
      console.log(addData);
    } catch (error) {
      alert('게시글 등록에 실패하였습니다.');
      console.log(error);
    }
  };

  return (
    <Section>
      <CardForm>
        <div className="post_title">
          <h1>{"<OOTD>"}</h1>
        </div>

        <form onSubmit={onSubmitHandler} encType="multipart/form-data">
          <p className="nickname">
            <span className="author">작성자</span>
            {nickName}
          </p>
          <input
            ref={inputRef}
            type="text"
            onChange={onChangeHandler}
            autoComplete="off"
            name="title"
            placeholder="글제목"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            autoComplete="off"
            name="brand"
            placeholder="브랜드명 ex) 나이키"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            autoComplete="off"
            name="height"
            placeholder="키"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            autoComplete="off"
            name="weight"
            placeholder="몸무게"
          />
          <textarea
            type="text"
            name="desc"
            onChange={onChangeHandler}
            placeholder="contents.."
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

export default WritePost;
