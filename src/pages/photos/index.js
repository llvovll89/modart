import styled from 'styled-components';

const PhotoContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 16rem;
  background: #3cdd7d;
  overflow: hidden;

  .contents {
    margin: auto;
    color: #181818;
    display: flex;
    max-width: 768px;
    height: 100%;
    padding: 0 16px;

    .text {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;

      p {
        color: #fefefe;
        font-size: clamp(16px, 2.5vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(15px, 2vw, 20px);
      }

      .link-btn {
        margin-top: 20px;
        background: #181818;
        border-radius: 4px;
        color: #fefefe;
        padding: 12px 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
      }
    }

    .image {
      padding: 20px;
      width: 100%;

      svg {
        width: 100%;
        height: 100%;
        color: #fefefe;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 13rem;
  }
`;

const PhotoContents = styled.div`
  max-width: 1280px;
  background: #ffffff;
  margin: 0 auto;

  .photo_list {
    max-width: 1280px;
    margin: 12px auto 6px auto;
    padding: 6px 3px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .photo_card {
      display: flex;
      min-height: 57px;
      max-height: 70px;
      margin-bottom: 6px;
      border-bottom: 1px solid #fff;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .photo_img {
        cursor: pointer;
        img {
          width: 70px;
          height: 100%;
          vertical-align: top;
        }
      }

      .items {
        padding: 3px 0px;
        .photo_title {
          color: #333;
          font-size: clamp(14.5px, 2vw, 16px);
          cursor: pointer;
          transition: all 0.15s linear;

          &:hover,
          &:focus {
            color: #08f;
            text-decoration: underline 0.5px;
          }
        }

        .item_contents {
          .item_category {
            display: inline-block;
            color: #686868;
            font-size: clamp(11px, 1vw, 12px);
            line-height: 1.5;
            margin-bottom: 2px;
          }

          .sub_items {
            display: flex;
            gap: 6px;

            font-size: clamp(11px, 1.2vw, 13px);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .photo_card {
      padding: 0 6px;
    }
  }
`;

const PhotoDetailPage = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  min-height: calc(100vh - 60px);
  padding: 12px 20px;
  display: flex;
  gap: 12px;

  &.active {
    border-radius: 6px;
  }

  .contents {
    margin: 0 auto;
    max-width: 768px;
    word-break: break-all;
    width: 100%;
    padding: 12px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.07);
    border: 1px solid #eee;
    border-radius: 6px;

    &.active {
      width: 100%;
      margin: 0 auto;
    }

    .photo_users {
      width: 100%;
      display: flex;
      gap: 12px;
      margin-bottom: 16px;

      .user_img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
          object-fit: cover;
        }
      }

      .user {
        display: flex;
        flex-direction: column;
        p {
          font-weight: 700;
          font-size: clamp(13px, 1.5vw, 16px);
        }

        span {
          line-height: 1;
          color: #9d8e8e;
          font-size: clamp(12px, 1.25vw, 13.5px);
        }
      }
    }

    .snapImg {
      display: block;
      width: 100%;
      height: 450px;
      min-height: 400px;
      background: #fafafafa;
      border-radius: 6px;
      overflow: hidden;

      img {
        vertical-align: top;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }
    }

    .photo_info {
      padding: 12px 6px 0px 6px;

      .icon {
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;

          button {
            width: 36px;
            height: 36px;
            margin-right: 12px
            border-radius: 50%;
            position: relative;
            color: #181818;

            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 80%;
              height: 80%;
            }
          }
        }

        .date {
          font-size: clamp(12px, 1.5vw, 14px);
          font-weight: 500;
          color: #9d8e8e;
        }
      }

      .photo_title {
        padding-top: 12px;

        .like_length {
          font-size: clamp(13px, 1.5vw, 16px);
          font-weight: 600;
        }

        .title {
          font-size: clamp(14px, 1.8vw, 17px);
          margin-bottom: 6px;
          letter-spacing: 0.025rem;
          font-weight: 500;

          span {
            font-weight: 600;
          }
        }

        .desc {
          letter-spacing: -0.015rem;
          font-size: clamp(13px, 1.4vw, 15px);
        }
        .over {
          margin-left: 6px;
          cursor: pointer;
          color: #7d7373;
        }
      }
    }
  }

  .comments {
    padding: 12px;
    width: 100%;
    border-radius: 12px;
    background: #fff;

    .profile {
      display: flex;
      align-items: center;
      gap: 6px;
      padding-bottom: 16px;
      border-bottom: 1px solid #eee;

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
      }

      p {
        font-weight: 700;
        font-size: clamp(12px, 1.5vw, 14px);
      }
    }

    .comment_list {
      width: 100%;
      padding: 12px;
      height: calc(100vh - 180px);
      overflow-y: scroll;

      .comment_item {
        margin-bottom: 20px;

        .user_info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          align-items: center;

          .users {
            display: flex;
            gap: 6px;
            align-items: center;

            img {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              object-fit: cover;
            }

            .comment_name {
              font-weight: 600;
              font-size: clamp(11.5px, 1vw, 12.5px);
            }

          }

          .comment_date {
            color: #ccc;
            font-size: clamp(11px, 1vw, 12px);
          }
        }

        .content {
          .comment_desc {
            padding: 6px 0;
            font-size: clamp(12px, 1.5vw, 13px);
          }

          .update_comment {
            margin: 12px 0;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 6px;
            justify-content: space-between;

            .update_input {
              width: 100%;
              padding: 12px;
              border: 1px solid #eee;
              border-radius: 6px;
              letter-spacing: -0.025rem;
              font-size: clamp(12px, 1.5vw, 13.5px);
            
              &:focus ,
              &:active {
                border: 1.5px solid #333;
              }
            }

            .update_add_btn {
              min-width: 42px;
              height: 100%;

              span {
                font-size: clamp(16px, 1.5vw, 20px);
              }
            }
          }
        }

        .comment_btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            button {
              padding: 6px 12px;
              
              span {
                font-size: clamp(14px, 1.5vw , 18px);
              }

              /* &.edit_comment_btn {
                color: #4bae4b;
              }

              &.delete_comment_btn {
                color: salmon;
              } */
            }
        }
      }
    }

    .comment_form {
      .comment_user {
        display: flex;
        justify-content: space-between;

        .info_contents {
          display: flex;
          gap: 6px;
          align-items: center;

          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            object-fit: cover;
          }

          p {
            font-weight: 700;
            font-size: clamp(11px, 1.5vw, 13px);
          }
        }

        .submit_btn {
          padding: 6px 12px;
          font-size: clamp(11px, 1.5vw, 13px);
          border-radius: 6px;
          color: #FFF;
          background: #333;
        }
      }
      .input_form {
        margin-top: 16px;
        textarea {
          resize: none;
          width: 100%;
          height: 46px;
          border: 1px solid #eee;
          border-radius: 3px;
          padding: 12px;
          font-size: clamp(12.5px, 1.25vw, 14px);
          letter-spacing: -0.025rem;

          &:focus {
            border: 1.5px solid #7d7373;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 12px;
    gap: 6px;

    .contents {
      .snapImg {
        min-height: 300px;
        height: 350px;
      }
    }
  }
`;

export { PhotoContainer, PhotoContents, PhotoDetailPage };
