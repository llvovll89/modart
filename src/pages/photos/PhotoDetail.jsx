import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addComment,
  deleteComment,
  getPhotos,
  recommendViews,
  updatedComment,
} from '../../store/reducers/photoSlice';
import { PhotoDetailPage } from '.';
import { Section } from '../../styles/RecycleStyles';
import {
  AiOutlineHeart,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFileAdd,
  AiOutlineComment,
} from 'react-icons/ai';
import moment from 'moment';
import { firebaseAuth } from '../../firebase/firebase';

const PhotoDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.login.user);
  const photoList = useSelector((state) => state.photo.photos);
  const [overDesc, setOverDesc] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [updateCommentText, setUpdateCommentText] = useState('');
  const [updateCommentId, setUpdateCommentId] = useState('');
  const [commentToggle, setCommentToggle] = useState(false);
  const dispatch = useDispatch();

  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const photo = photoList.find((photo) => photo.id === id);

  const handleRecommendClick = (photoId) => {
    if (user) {
      dispatch(recommendViews({ photoId }))
        .then(() => {
          dispatch(getPhotos());
        })
        .catch((err) => {
          console.error('추천을 할 수 없습니다.', err);
        });
    } else {
      alert('로그인한 유저만 좋아요를 할 수 있습니다.');
      return null;
    }
  };

  const addCommentClick = (photoId) => {
    const currentUser = firebaseAuth.currentUser;
    const currentUserId = currentUser ? currentUser.uid : null;

    if (!user) {
      window.alert('로그인 하셔야 등록할 수 있습니다.');
      return;
    }

    if (commentText.trim() === '') {
      window.alert('댓글 내용을 입력해주세요.');
      return;
    }

    const commentData = {
      userId: currentUserId,
      id:
        photo.comments.length > 0
          ? photo.comments[photo.comments.length - 1].id + 1
          : 0,
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

  const toggleUpdateComment = (commentId, commentText) => {
    if (updateCommentId === commentId) {
      setUpdateCommentId('');
      setUpdateCommentText('');
    } else {
      setUpdateCommentId(commentId);
      setUpdateCommentText(commentText);
    }
  };

  const editCommentHandler = (photoId, commentId) => {
    const currentUser = firebaseAuth.currentUser;
    const currentUserId = currentUser ? currentUser.uid : null;

    if (!user) {
      window.alert('로그인 후 이용해주세요.');
      return;
    }

    if (updateCommentText.trim() === '') {
      window.alert('수정할 글을 입력 후 저장해주세요');
      return;
    }

    const comment = photo.comments[commentId];

    const updateCommentData = {
      userId: currentUserId,
      text: updateCommentText,
      author: comment.author,
      profileImg: comment.profileImg ? user.profileImg : '',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    dispatch(updatedComment({ photoId, commentId, updateCommentData })).then(
      () => {
        dispatch(getPhotos());
        setUpdateCommentId(null);
        setUpdateCommentText('');
      }
    );
  };

  const deleteCommentHandler = (photoId, commentId) => {
    alert('현재 삭제 이벤트 수정중!')
    return null;

    if (!user) {
      window.alert('로그인 후 이용해주세요.');
      return;
    }

    const comment = photo.comments[commentId];

    // 현재는 edit , delete기능이 로그인 user와 author가 같을시 보이기에 필요X
    if (comment && comment.author !== user.nickname) {
      window.alert('다른 유저의 댓글은 삭제 할 수 업습니다.');
      return;
    }

    dispatch(deleteComment({ photoId, commentId }))
      .then(() => {
        dispatch(getPhotos());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    handleScrollToTop();

    return () => {
      removeEventListener('scroll', handleScrollToTop);
    };
  }, []);

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
                  <img
                    src={photo.profileImg ? photo.profileImg : NO_IMAGE_URL}
                    alt={photo.nickname}
                  />
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
                    <button
                      className="like"
                      onClick={() => handleRecommendClick(photo.id)}
                    >
                      <AiOutlineHeart />
                    </button>
                    <button
                      className="comment_btn"
                      onClick={() => setCommentToggle(!commentToggle)}
                    >
                      <AiOutlineComment />
                    </button>
                  </div>
                  <span className="date">{photo.createdAt} ...</span>
                </div>
                <div className="photo_title">
                  {/*
                  recommend
                */}
                  <span className="like_length">
                    좋아요 {photo.recommend ? photo.recommend + '개' : '0개'}
                  </span>
                  <h1 className="title">
                    <span>{photo.nickname}</span> {photo.title}
                  </h1>
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
                <div className="comment_container">
                  <div className="profile">
                    <div>
                      {photo.profileImg ? (
                        <img src={photo.profileImg} alt={photo.nickname} />
                      ) : (
                        <img src={NO_IMAGE_URL} alt={photo.nickname} />
                      )}
                      <p>{photo.nickname}</p>
                    </div>
                    <div className="close_btn">
                      <button onClick={() => setCommentToggle(!commentToggle)}>
                        ❌
                      </button>
                    </div>
                  </div>

                  <div className="photo_desc">
                    <p className="photo_desc_info">
                      <span className='photo_desc_nickname'>{photo.nickname}</span> {photo.title}
                    </p>
                    <p className="photo_desc_desc">{photo.desc}</p>
                  </div>

                  <ul className="comment_list">
                    {photo.comments &&
                    Array.isArray(photo.comments) &&
                    photo.comments.length > 0
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
                                    <img
                                      src={NO_IMAGE_URL}
                                      alt="default_name"
                                    />
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
                                {updateCommentId === comment.id ? (
                                  <div className="update_comment">
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      className="update_input"
                                      onChange={(e) =>
                                        setUpdateCommentText(e.target.value)
                                      }
                                    />
                                    <button
                                      type="submit"
                                      className="update_add_btn"
                                      onClick={() =>
                                        editCommentHandler(photo.id, commentId)
                                      }
                                    >
                                      <span>
                                        <AiOutlineFileAdd />
                                      </span>
                                    </button>
                                  </div>
                                ) : (
                                  <p className="comment_desc">{comment.text}</p>
                                )}
                              </div>

                              {user && user.nickname === comment.author ? (
                                <div className="comment_btn">
                                  <button
                                    className="edit_comment_btn"
                                    onClick={() =>
                                      toggleUpdateComment(
                                        comment.id,
                                        comment.text
                                      )
                                    }
                                  >
                                    <span>
                                      <AiOutlineEdit />
                                    </span>
                                  </button>
                                  <button
                                    className="delete_comment_btn"
                                    onClick={() =>
                                      deleteCommentHandler(photo.id, commentId)
                                    }
                                  >
                                    <span>
                                      <AiOutlineDelete />
                                    </span>
                                  </button>
                                </div>
                              ) : null}
                            </li>
                          )
                        )
                      : null}
                  </ul>
                </div>

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
