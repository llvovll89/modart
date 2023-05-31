import styled from 'styled-components';

const BoardContainer = styled.div`
  background: rgb(49, 53, 51);
  margin: auto;
  width: 100%;
  height: 16rem;
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
        font-size: clamp(16px, 2vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(16px, 1vw, 20px);
      }

      .link-btn {
        margin-top: 20px;
        background: #fefefe;
        border-radius: 4px;
        color: #181818;
        padding: 12px 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
      }
    }

    .image {
      width: 100%;

      svg {
        width: 100%;
        height: 100%;
        color: #fefefe;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 12rem;

    .contents {
      .image {
        width: 75%;
      }
      .text {
      }
    }
  }
`;

const BoardContents = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  background: #ffffff;

  .board_list {
    margin: 12px auto 6px auto;
    max-width: 1280px;
    padding: 1px 3px 1px 1px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .board_card {
      display: flex;
      min-height: 57px;
      max-height: 70px;
      margin-bottom: 6px;
      border-bottom: 1px solid #ededed;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .like {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 6px;
        color: #AAA;

        .like_views {
          font-size: clamp(12px, 1.5vw, 14px);
        }
      }

      .board_img {
        img {
          width: 70px;
          height: 100%;
          object-fit: cover;
          vertical-align: top;
          cursor: pointer;
        }
      }

      .items {
        padding: 3px 0px;
        .board_title {
          color: #3262c5;
          font-size: clamp(14.5px, 2vw, 16px);
          cursor: pointer;
          transition: all 0.15s linear;

          &:hover {
            color: #04f;
            text-decoration: underline 0.5px;
          }
        }

        .item_contents {
          .item_brand, .item_views {
            display: inline-block;
            color: #686868;
            font-size: clamp(11px, 1vw, 12px);
            line-height: 1.5;
            margin-bottom: 2px;
          }

          .sub_items {
            margin: 3px 0px;
            display: flex;
            gap: 6px;
            font-size: clamp(11px, 1.2vw, 13px);

            &:first-child {
              justify-content: space-between;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .board_card {
      padding: 0 6px;
    }
  }
`;

const BoardDetailPage = styled.div`
  margin: 0px auto;
  margin-top: 30px;
  max-width: 1024px;
  min-height: calc(100vh - 60px);
  padding: 20px 20px 12px 20px;

  .contents {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 12px;

    .board {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 12px;

      .boardImg {
        width: 40%;
        min-height: 400px;
        height: 450px;

        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }

      .boardInfo {
        width: 50%;
        padding: 20px 16px 16px 16px;
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;

          h1 {
            font-size: clamp(16px, 2vw, 20px);
            letter-spacing: -0.025rem;

            span {
              letter-spacing: -0.075rem;
              font-weight: 500;
              font-size: clamp(13px, 1.2vw, 14px);
            }
          }

          .date {
            font-size: clamp(11px, 1vw, 12px);
            letter-spacing: -0.035rem;
          }
        }
        .info {
          .user {
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;

            .user_info {
              display: flex;
              gap: 6px;
              align-items: center;

              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
              }
              p {
                font-size: clamp(13px, 1.5vw, 14px);
              }
            }
            .like {
              p {
                font-size: clamp(12px, 1vw, 13px);
              }
            }
          }

          .area {
            margin-bottom: 12px;

            label {
              font-size: clamp(12px, 1.2vw, 13.5px);
            }

            p {
              font-size: clamp(11px, 1.1vw, 12.5px);
            }

            &:last-child {
              margin-bottom: 0;
            }

            .spec {
              margin-top: 4px;
              p {
                line-height: 1.25;
              }
            }
          }
        }

        .btnbox {
          width: 100%;
          margin-top: 30px;
          text-align: center;

          button {
            padding: 12px 20px;
            font-size: clamp(11px, 1vw, 14px);
            cursor: pointer;
            margin-right: 12px;

            &:nth-child(1) {
              color: red;
            }

            &:nth-child(2) {
              color: #09f;
            }
          }
        }
      }
    }

    .comment {
      padding: 16px 20px 12px 20px;
      width: 100%;
      min-height: 120px;

      .comment_form {
        .users {
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          .profile {
            .profile_contents {
              display: flex;
              align-items: center;
              gap: 6px;
              .profileImg {
              width: 36px;
              height: 36px;
              border-radius: 50%;
            }

            .nickname {
              font-size: clamp(12px, 1vw, 14px);
            }
            }
          }

          .submit_btn {
            cursor: pointer;
            border: 1px solid #cecece;
            padding: 9px 20px;
            border-radius: 4px;
          }
        }
        .form {
          width: 100%;
          padding: 12px;
          textarea {
            resize: none;
            width: 100%;
            height: 100px;
            padding: 12px;
            outline: none;
            border: 1px solid #cecece;
          }
        }
      }

      .comment_list {
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contents {
      .board {
        display: block;

        .boardImg {
          width: 100%;
          min-height: 350px;
          height: 400px;
        }

        .boardInfo {
          width: 100%;
          padding: 12px 6px 6px;
        }
      }
    }
  }
`;

export { BoardContainer, BoardContents, BoardDetailPage };
