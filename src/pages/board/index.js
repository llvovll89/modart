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
        font-size: clamp(20px, 2.5vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(18px, 2vw, 20px);
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
    height: 14rem;

    .contents {
      .image {
        width: 75%;
      }
    }
  }
`;

const BoardContents = styled.div`
  width: 100%;
  background: #fefefe;

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
      background-color: #f6f6f6;
      border-bottom: 1px solid #fff;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
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
          .item_brand {
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
    .board_card {
      padding: 0 6px;
    }
  }
`;

const BoardDetailPage = styled.div`
  margin: 0px auto;
  max-width: 1024px;
  min-height: calc(100vh - 60px);
  padding: 20px 20px 12px 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;

  .contents {
    display: flex;
    flex-direction: column;
    width: 100%;

    .board {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 12px;

      .boardImg {
        width: 40%;
        min-height: 500px;
        height: 550px;

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
          .area {
            margin-bottom: 12px;

            &:first-child {
              display: flex;
              gap: 12px;
              align-items: center;
              margin-bottom: 20px;

              .user_img {
                width: 40px;
                height: 40px;
                overflow: hidden;
                border-radius: 50%;

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }

              p {
                font-size: clamp(14.5px, 1.5vw, 16px);
              }
            }

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
      }
    }

    .comment {
      padding: 16px 12px 12px 12px;
    }
  }

  @media screen and (max-width: 768px) {
    .contents {
      .board {
        display: block;

        .boardImg {
          width: 100%;
          min-height: 450px;
          height: 500px;
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
