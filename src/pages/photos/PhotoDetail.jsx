import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addComment, getPhotos } from '../../store/reducers/photoSlice';
import { PhotoDetailPage } from '.';
import PhotoImg from '../../assets/images/main.gif';
import { Section } from '../../styles/RecycleStyles';
import { AiFillHeart } from 'react-icons/ai';
import { ImBubble } from 'react-icons/im';
import moment from 'moment';

const PhotoDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.login.user);
  const photoList = useSelector((state) => state.photo.photos);
  const [overDesc, setOverDesc] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commentToggle, setCommentToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const photo = photoList.find((photo) => photo.id === id);

  const addCommentClick = (photoId) => {
    if (!user) {
      window.alert('로그인 하셔야 등록할 수 있습니다.');
      return;
    }

    const commentData = {
      id: Date.now(),
      text: commentText,
      author: user.nickname,
      profileImg: user.profileImg ? user.profileImg : '',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    dispatch(addComment({ photoId, commentData }))
      .then(() => {
        setCommentText('');
        dispatch(getPhotos());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(photo);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <Section className="photo_detail_section">
      <PhotoDetailPage className={commentToggle ? 'active' : ''}>
        {photo && (
          <>
            <div className={`contents ${commentToggle ? 'active' : ''}`}>
              <div className="photo_users">
                <div className="user_img">
                  <img src={PhotoImg} alt={photo.nickname} />
                </div>
                <div className="user">
                  <p>{photo.nickname}</p>
                  <span>{photo.category}</span>
                </div>
              </div>
              <div className="snapImg">
                <img src={photo.photo} alt={photo.nickname} />
              </div>
              <div className="photo_info">
                <div className="icon">
                  <div className="link">
                    <button className="like">
                      <AiFillHeart />
                    </button>
                    <button
                      className="comment_btn"
                      onClick={() => setCommentToggle(!commentToggle)}
                    >
                      <ImBubble />
                    </button>
                  </div>
                  <span className="date">{photo.createdAt} ...</span>
                </div>
                <div className="photo_title">
                  <h1 className="title">{photo.title}</h1>
                  <p className="desc">
                    {photo.desc.length > 60 && !overDesc
                      ? photo.desc.slice(0, 60)
                      : photo.desc}
                    {photo.desc.length > 60 && (
                      <span
                        className="over"
                        onClick={() => setOverDesc(!overDesc)}
                      >
                        {overDesc ? '... 접기' : '... 더보기'}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            {commentToggle && (
              <div className="comments">
                <div className="profile">
                  {user ? (
                    <>
                      {user.profileImg ? (
                        <img src={user.profileImg} alt={photo.nickname} />
                      ) : (
                        <img src={NO_IMAGE_URL} alt={photo.nickname} />
                      )}
                      <p>{user.nickname}</p>
                    </>
                  ) : (
                    <>
                      <img src={NO_IMAGE_URL} alt="..." />
                      <p>Default Nickname</p>
                    </>
                  )}
                </div>

                <ul className="comment_list">
                  {photo.comments && photo.comments.length > 0
                    ? Object.entries(photo.comments).map(
                        ([commentId, comment]) => (
                          <li className="comment_item" key={commentId}>
                            <div className="user_info">
                              <div className="users">
                                {comment.profileImg ? (
                                  <img
                                    src={comment.profileImg}
                                    alt={comment.author}
                                  />
                                ) : (
                                  <img src={NO_IMAGE_URL} alt="default_name" />
                                )}

                                <span className="comment_name">
                                  {comment.author}
                                </span>
                              </div>
                              <span className="comment_date">
                                {comment.createdAt}
                              </span>
                            </div>
                            <div className="content">
                              <p className="comment_desc">{comment.text}</p>
                            </div>
                          </li>
                        )
                      )
                    : null}
                </ul>
                <div className="comment_form">
                  <div className="comment_user">
                    {user ? (
                      <div className="info_contents">
                        <img src={user.profileImg} alt={user.nickname} />
                        <p>{user.nickname}</p>
                      </div>
                    ) : (
                      <div className="info_contents">
                        <img src={NO_IMAGE_URL} alt="default_user" />
                        <p>default_user</p>
                      </div>
                    )}
                    <button
                      className="submit_btn"
                      type="submit"
                      onClick={() => addCommentClick(photo.id)}
                    >
                      댓글등록
                    </button>
                  </div>
                  <div className="input_form">
                    <textarea
                      name="comment"
                      id="comment"
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </PhotoDetailPage>
    </Section>
  );
};

export default PhotoDetail;
