import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Section } from '../../../styles/RecycleStyles';
import { AccountEditForm } from '.';
import {
  changePassword,
  updateUserData,
} from '../../../store/reducers/loginSlice';
import NoUserImg from '../../../assets/images/user.png';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { deleteAccount } from '../../../store/reducers/loginSlice';
import { useNavigate } from 'react-router-dom';

const AccountEdit = () => {
  const [active, setActive] = useState({});
  const [updateData, setUpdateData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const changeBtnClick = (key) => {
    setActive((prevActive) => ({
      ...prevActive,
      name: key === 'name' ? !prevActive.name : prevActive.name,
      email: key === 'email' ? !prevActive.email : prevActive.email,
      intro: key === 'intro' ? !prevActive.intro : prevActive.intro,
      password: key === 'password' ? !prevActive.password : prevActive.password,
      photo: key === 'photo' ? !prevActive.photo : prevActive.photo,
    }));
  };

  const passwordChangeAlert = () => {
    alert('해시 암호화 설정이 되어있어 비밀번호는 변경 불가합니다.');
    return;
  };

  const updateUsersData = (e) => {
    const { name, value } = e.target;
    if (e.target.name === 'photo') {
      setSelectedImage(e.target.files[0]);
    } else {
      setUpdateData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const passwordChangeHandler = async () => {
    try {
      dispatch(changePassword({ currentPassword, newPassword }));
      changeBtnClick('password');
    } catch (error) {
      console.log('비밀번호 변경에 실패하였습니다.', error);
    }
  };

  const uploadFile = async (file) => {
    try {
      const storageRef = ref(storage, 'users_photos');
      const fileRef = ref(storageRef, file.name);
      await uploadBytes(fileRef, file);
      const fileURL = await getDownloadURL(fileRef);
      return fileURL;
    } catch (error) {
      console.log('이미지 업로드에 실패했습니다.', error);
      return null;
    }
  };

  const updateProfileUser = async (key) => {
    try {
      let newData = {};

      if (active.name && updateData.nickname) {
        newData.nickname = updateData.nickname;
        changeBtnClick('name');
      }
      if (active.email && updateData.email) {
        newData.email = updateData.email;
        changeBtnClick('email');
      }
      if (active.intro && updateData.intro) {
        newData.intro = updateData.intro;
        changeBtnClick('intro');
      }
      if (active.password && updateData.password) {
        newData.password = updateData.password;
        changeBtnClick('password');
      }
      if (selectedImage) {
        const photoURL = await uploadFile(selectedImage);
        newData.profileImg = photoURL;
      }

      if (Object.keys(newData).length > 0) {
        await dispatch(updateUserData(newData)).unwrap();
        const updatedUser = { ...user, ...newData };
        dispatch({ type: 'login/updateUserData', payload: updatedUser });
        changeBtnClick(key);

        if (selectedImage) {
          updatedUser.profileImg = URL.createObjectURL(selectedImage);
        }
      }

      changeBtnClick(key);
    } catch (error) {
      console.log('데이터 업데이트에 실패하였습니다.', error);
    }
  };

  const deleteAccountHandler = () => {
    if (!user) {
      window.alert('로그인하여야만 가능합니다.');
      return;
    }

    const alertDeleteAccount = confirm('정말 계정을 탈퇴 하시겠습니까?');
    if (alertDeleteAccount) {
      dispatch(deleteAccount());
      navigator('/');
    }

    return;
  };

  useEffect(() => {
    setActive({});
  }, [user]);

  return (
    <Section>
      <AccountEditForm>
        <div className="contents">
          <div className="contents_title">
            <h3>프로필 관리</h3>
          </div>

          <div className="user_profile">
            <div className="user_img">
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt={user.nickname}
                  style={{ maxWidth: '90px', maxHeight: '90px' }}
                />
              ) : user.profileImg ? (
                <img
                  src={user.profileImg}
                  alt={user.nickname}
                  style={{ maxWidth: '90px', maxHeight: '90px' }}
                />
              ) : (
                <img
                  src={NoUserImg}
                  alt={user.nickname}
                  style={{ maxWidth: '90px', maxHeight: '90px' }}
                />
              )}
            </div>

            <div className="user_detail">
              <div className="user_nickname">
                <p className="nickname">{user.nickname}</p>
              </div>
              {user.intro ? (
                <div className="user_intro">
                  <p>{user.intro}</p>
                </div>
              ) : null}
              <div className="profile_btn">
                <div className="img_change">
                  <input
                    type="file"
                    id="photo"
                    style={{ display: 'none' }}
                    name="photo"
                    onChange={updateUsersData}
                  />
                  {selectedImage ? (
                    <button
                      className="file_label"
                      onClick={() => {
                        updateProfileUser('photo'), changeBtnClick('photo');
                      }}
                    >
                      <p>저장하기</p>
                    </button>
                  ) : (
                    <label htmlFor="photo" className="file_label">
                      <p>프로필변경</p>
                    </label>
                  )}
                </div>
                {selectedImage ? (
                  <div className="img_delete">
                    <p onClick={() => setSelectedImage(null)}>삭제하기</p>
                  </div>
                ) : null}
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
                    onChange={updateUsersData}
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
                    <button
                      className="submit"
                      onClick={() => updateProfileUser('name')}
                    >
                      저장하기
                    </button>
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
            {/*
              <div className={`area${active.email ? ' active' : ''}`}>
              <label>Email</label>
              <div className={`input_area${active.email ? ' active' : ''}`}>
                {active.email ? (
                  <input
                    type="text"
                    name="email"
                    placeholder={user.email}
                    onChange={updateUsersData}
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
                    <button
                      className="submit"
                      onClick={() => updateProfileUser('email')}
                    >
                      저장하기
                    </button>
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
            */}
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
                    onChange={updateUsersData}
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
                    <button
                      className="submit"
                      onClick={() => updateProfileUser('intro')}
                    >
                      저장하기
                    </button>
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
                  <>
                    <input
                      type="password"
                      className="password"
                      placeholder="이전 비밀번호 입력.."
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      className="password"
                      placeholder="새로운 비밀번호 입력.."
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </>
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
                    <button
                      className="submit"
                      onClick={() => {
                        updateProfileUser('password');
                        passwordChangeHandler();
                      }}
                    >
                      저장하기
                    </button>
                  </div>
                ) : (
                  <button
                    className="change_btn"
                    onClick={() => {
                      // changeBtnClick('password'),
                      passwordChangeAlert();
                    }}
                  >
                    변경
                  </button>
                )}
              </div>
            </div>

            <div className="area deleteAccount">
              <label htmlFor="deleteAccount_btn">계정삭제</label>
              <button
                className="deleteAccount_btn"
                name="deleteAccount_btn"
                onClick={deleteAccountHandler}
              >
                계정삭제
              </button>
            </div>
          </div>
        </div>
      </AccountEditForm>
    </Section>
  );
};

export default AccountEdit;
