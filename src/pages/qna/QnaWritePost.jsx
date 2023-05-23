import React, { useState } from 'react';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { createData } from '../../store/reducers/qnaSlice';
import { QnaWriteForm } from '.';

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
      <QnaWriteForm>
        <div className="post_title">
          <h1>{'<Question>'}</h1>
        </div>
        <div className="qna_write">
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <p className="nickname">{nickName}</p>

            <div className="qna_cardForm">
              <div className="title">
              <span className="q">
                Q.
              </span>
                <input
                  type="text"
                  name="title"
                  placeholder="제목"
                  autoComplete="off"
                  onChange={onChangeHandler}
                />
                <span className="number_check">(0/70자)</span>
              </div>
              <div className="desc">
                <textarea
                  type="text"
                  name="desc"
                  placeholder="내용"
                  autoComplete="off"
                  onChange={onChangeHandler}
                />
              </div>

          <div className="file_input">
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
          </p>
        </label>
          </div>
            </div>

            <button type="submit">게시하기</button>
          </form>
        </div>
      </QnaWriteForm>
    </Section>
  );
};

export default QnaWritePost;
