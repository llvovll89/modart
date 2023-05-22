import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Section } from '../../../styles/RecycleStyles';
import { AccountEditForm } from '.';
import { updateUserData } from '../../../store/reducers/loginSlice';
import UserImg from '../../../assets/images/main.gif';

const AccountEdit = () => {
  const [active, setActive] = useState({});
  const [updateData, setUpdateData] = useState({});
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const changeBtnClick = (key) => {
    setActive((prevActive) => ({
      ...prevActive,
      name: key === 'name' ? !prevActive.name : prevActive.name,
      email: key === 'email' ? !prevActive.email : prevActive.email,
      intro: key === 'intro' ? !prevActive.intro : prevActive.intro,
      password: key === 'password' ? !prevActive.password : prevActive.password,
    }));
  };

  const updateUsersData = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfileUser = (e) => {
    dispatch(updateUserData(updateData));
  };

  return (
    <Section>
      <AccountEditForm>
        <div className="contents">
          <div className="contents_title">
            <h3>프로필 관리</h3>
          </div>

          <div className="user_profile">
            <div className="user_img">
              <img src={UserImg} alt={user.nickname} />
            </div>

            <div className="user_detail">
              <div className="user_nickname">
                <p>{user.nickname}</p>
              </div>
              <div className="profile_btn">
                <div className="img_change">
                  <input
                    type="file"
                    id="photo"
                    style={{ display: 'none' }}
                    name="photo"
                    // onChange={onChangeHandler}
                  />

                  <label htmlFor="photo" className="file_label">
                    <p>이미지변경</p>
                  </label>
                </div>
                <div className="img_delete">
                  <p>삭제하기</p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile_info">
            <div className="info_title">
              <h3>프로필 정보</h3>
            </div>

            <div className={`area${active.name ? ' active' : ''}`}>
              <label>프로필 이름</label>
              <div className={`input_area${active.name ? ' active' : ''}`}>
                {active.name ? (
                  <input
                    type="text"
                    name="nickname"
                    placeholder={user.nickname}
                    onChange={updateUserData}
                  />
                ) : (
                  <p>{user.nickname}</p>
                )}
                {active.name ? (
                  <div className="btn_area">
                    <button
                      className="back"
                      onClick={() => changeBtnClick('name')}
                    >
                      돌아가기
                    </button>
                    <button className="submit" onClick={updateProfileUser}>저장하기</button>
                  </div>
                ) : (
                  <button
                    className="change_btn"
                    onClick={() => changeBtnClick('name')}
                  >
                    변경
                  </button>
                )}
              </div>
            </div>
            <div className={`area${active.email ? ' active' : ''}`}>
              <label>Email</label>
              <div className={`input_area${active.email ? ' active' : ''}`}>
                {active.email ? (
                  <input
                    type="text"
                    name="email"
                    placeholder={user.email}
                    onChange={updateUserData}
                  />
                ) : (
                  <p>{user.email}</p>
                )}
                {active.email ? (
                  <div className="btn_area">
                    <button
                      className="back"
                      onClick={() => changeBtnClick('email')}
                    >
                      돌아가기
                    </button>
                    <button className="submit" onClick={updateProfileUser}>저장하기</button>
                  </div>
                ) : (
                  <button
                    className="change_btn"
                    onClick={() => changeBtnClick('email')}
                  >
                    변경
                  </button>
                )}
              </div>
            </div>
            <div className={`area${active.intro ? ' active' : ''}`}>
              <label>소개</label>
              <div className={`input_area${active.intro ? ' active' : ''}`}>
                {active.intro ? (
                  <input
                    type="text"
                    name="intro"
                    placeholder={
                      user.intro ? user.intro : '자신을 소개 해주세요...'
                    }
                  />
                ) : (
                  <p>{user.intro ? user.intro : '자신을 소개 해주세요...'}</p>
                )}
                {active.intro ? (
                  <div className="btn_area">
                    <button
                      className="back"
                      onClick={() => changeBtnClick('intro')}
                    >
                      돌아가기
                    </button>
                    <button className="submit" onClick={updateProfileUser}>저장하기</button>
                  </div>
                ) : (
                  <button
                    className="change_btn"
                    onClick={() => changeBtnClick('intro')}
                  >
                    변경
                  </button>
                )}
              </div>
            </div>
            <div className={`area${active.password ? ' active' : ''}`}>
              <label>비밀번호변경</label>
              <div className={`input_area${active.password ? ' active' : ''}`}>
                {active.password ? (
                  <input type="password" />
                ) : (
                  <p>비밀번호변경</p>
                )}
                {active.password ? (
                  <div className="btn_area">
                    <button
                      className="back"
                      onClick={() => changeBtnClick('password')}
                    >
                      돌아가기
                    </button>
                    <button className="submit">저장하기</button>
                  </div>
                ) : (
                  <button
                    className="change_btn"
                    onClick={() => changeBtnClick('password')}
                  >
                    변경
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </AccountEditForm>
    </Section>
  );
};

export default AccountEdit;
