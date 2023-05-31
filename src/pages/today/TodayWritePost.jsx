import React, { useState } from 'react';
import { CardForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { createData } from '../../store/reducers/todaySlice';

const TodayWritePost = () => {
  const [addData, setAddData] = useState({ photo: null, fileName: '' });
  const user = useSelector((state) => state.login.user);
  const nickName = user?.nickname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    if (e.target.name === 'photo') {
      setAddData({
        ...addData,
        [e.target.name]: e.target.files[0],
      })
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
          <h1>{'<Todays Story>'}</h1>
        </div>

        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <p className="nickname">
            <span className="author">작성자</span>
            {nickName}
          </p>

          <input
            type="text"
            name="title"
            placeholder="제목"
            autoComplete="off"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="desc"
            placeholder="내용"
            autoComplete="off"
            onChange={onChangeHandler}
          />

          <select
            name="type"
            value={addData.type || ''}
            placeholder="종류"
            autoComplete="off"
            onChange={onChangeHandler}
          >
            <option value="">종류 선택</option>
            <option value="패션">패션</option>
            <option value="연예인">연예인</option>
            <option value="운동">운동</option>
            <option value="유머">유머</option>
            <option value="미용">미용</option>
            <option value="미스터리">미스터리</option>
          </select>

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
              <span className="label_text">{addData.fileName}</span>
            </p>
          </label>

          <button type="submit">게시하기</button>
        </form>
      </CardForm>
    </Section>
  );
};

export default TodayWritePost;
