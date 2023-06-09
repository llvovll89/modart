import styled from 'styled-components';

export const QnaContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 16rem;
  background: #dda0aa;
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
        word-break: break-all;
        line-height: 1.25;
        font-size: clamp(16px, 2vw, 26px);
      }

      span {
        line-height: 1.25;
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(16px, 2vw, 20px);
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
      width: 100%;
      padding: 20px;

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

export const QnaArticle = styled.article`
  margin: 30px auto 0px auto;
  max-width: 964px;
  position: relative;
  padding: 36px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 6px;
  border: 1px solid #eee;

  .qna_card {
    width: 100%;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
    border-top-width: 1px;
    border-bottom-width: 0;
    word-break: break-all;

    .card_header {
      width: 100%;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;

      h1 {
        word-wrap: break-word;
        font-weight: 700;
        margin-bottom: 16px;
        font-size: clamp(16px, 2vw, 24px);

        span {
          margin-right: 6px;
          font-size: clamp(22px, 2.5vw, 26px);
          color: #3772f0;
          font-weight: 500;
        }
      }

      .card_info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 6px;

        .inner {
          display: flex;
          gap: 6px;
          font-size: clamp(12px, 1.3vw, 14px);
          align-items: center;

          .profile_img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            overflow: hidden;
          }

          img {
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }

        .date {
          color: #aaa;
          font-size: clamp(12px, 1.3vw, 13px);
        }
      }
    }

    .card_contents {
      padding: 10px 0;
      min-height: 150px;
      .card_desc {
        padding-top: 12px;
        margin-bottom: 6px;
        font-size: clamp(14px, 1vw, 16px);
        line-height: 1.5;
        letter-spacing: -0.025rem;
      }
      .update_input {
        width: 100%;
        margin-bottom: 6px;
        font-size: clamp(14px, 1vw, 16px);
        letter-spacing: -0.025rem;
        padding: 12px;
      }
    }

    .card_footer {
      position: relative;

      .inner {
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
        gap: 12px;

        .qna_btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px;
          border-radius: 6px;
          font-size: clamp(12px, 1.5vw, 14px);
          color: #ffffff;

          span {
          }

          &:nth-child(1) {
            background: #d472a3;
          }
          &:nth-child(2) {
            background: #5fcb5f;
          }
          &:nth-child(3) {
            background: #09f;
          }

          &:nth-child(4) {
            &:focus {
              color: #333;
            }

            background: #d7d72a;
          }

          svg {
            font-size: clamp(18px, 1.5vw, 20px);
          }
        }
      }

      .comment {
        margin-top: 30px;
        padding: 0px 6px;

        .comment_in {
          display: flex;
          flex-direction: column;
          gap: 9px;
          background: #fafafa;
          margin-bottom: 12px;

          .top {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 12px;

            .profile {
              display: flex;
              align-items: center;
              gap: 6px;

              img {
                border-radius: 50%;
                width: 30px;
                height: 30px;
              }

              span {
                font-size: clamp(13px, 1.5vw, 14px);
              }
            }

            .submit {
              font-weight: 700;
              letter-spacing: 0.025rem;
              padding: 8px 12px;
              background: #09f;
              border-radius: 6px;
              color: #fff;
              font-size: clamp(12px, 1.5vw, 14px);
            }
          }

          .bottom {
            padding: 12px;
            width: 100%;

            textarea {
              width: 100%;
              height: 100px;
              resize: none;
              padding: 12px;
              outline: none;
              border: 1px solid #eee;
            }
          }
        }

        .comment_item {
          width: 100%;
          margin: 12px 0;
          padding-bottom: 6px;
          border-bottom: 1px solid #ddd;

          .profile {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .user {
              display: flex;
              align-items: center;
              gap: 6px;

              img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
              }
              span {
                font-size: clamp(12px, 1.5vw, 13px);
              }
            }
            .date {
              font-size: clamp(11px, 1vw, 12px);
              color: #aaa;
            }
          }

          .comment_desc {
            .edit_value {
              margin: 12px 0;
              width: 100%;
              padding: 12px;
              border-radius: 4px;
              outline: none;
              border: 1px solid rgb(238, 238, 238);
            }

            p {
              text-indent: 6px;
              margin: 12px 0px 6px 0px;
              line-height: 30px;
              min-height: 60px;
              font-size: clamp(12px, 1.5vw, 14px);
            }
          }

          .comment_btns {
            padding: 6px 0px;
            width: 100%;

            button {
              padding: 6px 12px;
              border-radius: 4px;
              font-size: clamp(12px, 1vw, 13px);
              color: #fff;
              margin-right: 12px;
            }

            .delete_btn {
              background: red;
            }

            .edit_btn {
              background: #55a555;
            }

            .save_btn {
              background: #09f;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 16px;

    .qna_card {
      .card_header {
        .card_info {
          display: flex;
          gap: 16px;
          padding: 6px;
          align-items: center;
          justify-content: space-between;

          .inner {
            gap: 9px;

            .profile_img {
              width: 28px;
              height: 28px;
            }
          }
        }
      }

      .card_contents {
        padding: 16px 0px 10px 0px;

        .card_desc {
          margin-bottom: 9px;
        }
      }

      .card_footer {
        .inner {
          justify-content: center;

          .qna_btn {
            justify-content: center;
            gap: 6px;
            padding: 9px 12px;
          }
        }

        .comment {
          margin-top: 16px;
          padding: 6px;

          .comment_in {
            display: flex;
            flex-direction: column;
            gap: 9px;
            background: #fafafa;

            .top {
              .profile {
                gap: 6px;

                img {
                  border-radius: 50%;
                  width: 28px;
                  height: 28px;
                }
              }

              .submit {
                font-weight: 700;
              }
            }

            .bottom {
              padding: 6px 2px 0px 2px;
              border-radius: 6px;
              width: 100%;
              textarea {
              }
            }
          }
        }
      }
    }
  }
`;

export const QnaContents = styled.div`
  max-width: 1024px;
  margin: 12px auto 0px auto;
  background: #ffffff;

  .qna_list {
    padding: 1px 3px 0 1px;
    /* font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif; */
    width: 100%;

    .qna_card {
      display: flex;
      min-height: 40px;
      align-items: center;
      background: #ffffff;
      width: 100%;
      margin-bottom: 3.5px;
      word-break: break-all;
      padding: 12px 12px 20px 12px;
      flex-direction: column;
      align-items: flex-start;
      min-height: 26px;
      gap: 6px;
      border-bottom: 1px solid #eee;

      p {
        padding-left: 6px;
        display: block;
        font-size: clamp(12px, 1vw, 13px);
      }

      .number {
        text-align: center;
      }
      .title {
        font-weight: 700;
        margin: 6px 0;
        text-overflow: ellipsis;
        color: #0c2d43;
        cursor: pointer;
        color: #333;
        font-size: clamp(13.5px, 1.5vw, 16px);

        &:hover {
          color: #770088;
          text-decoration: underline 0.5px;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      .sub_contents {
        display: flex;
        align-items: center;
        gap: 20px;

        .views,
        .like {
          cursor: pointer;
          min-width: 40px;

          svg {
            color: #0c2d43;
          }
        }
      }

      .qna_img {
        img {
          width: 60px;
          height: 50px;
          vertical-align: top;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .qna_list {
      margin: 20px 0;
      .qna_card {
        .number {
          text-align: center;
        }
        .title {
          &:hover {
            color: #770088;
            text-decoration: underline 0.5px;
          }
        }

        .sub_contents {
          display: flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
        }

        .qna_img {
          img {
            width: 60px;
            height: 50px;
            vertical-align: top;
          }
        }
      }
    }
  }
`;

export const QnaCard = styled.div`
  width: 100%;
  max-width: 964px;
  padding: 16px;
  margin: 0 auto;
  margin-top: 30px;

  .qna_contents {
    width: 100%;

    .list_item {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .qna_items {
        width: 100%;
        padding: 20px 16px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        background: #fff;
        border: 1px solid #ededed;
        border-radius: 6px;
        transition: all 0.2s linear;

        &.active {
        }

        .inner {
          .qna_title {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 9px;
            font-size: clamp(12px, 1.5vw, 14.5px);
            font-weight: 500;
            line-height: 1.6;
            color: #333;
            cursor: pointer;

            .qna_q_icon {
              color: #09f;
              font-size: clamp(20px, 2vw, 22px);
            }
          }
        }

        .qna_answer {
          position: relative;
          border-top: 1px solid rgba(226, 220, 220, 0.45);
          padding: 20px 0px 0px 6px;
          overflow: hidden;

          .qna_desc {
            color: #4d5256;
            font-size: clamp(12px, 1.5vw, 14px);
          }
        }
      }
    }
    .view_more {
      margin: 0 auto;
      margin-top: 20px;
      min-height: 36px;
      width: 100px;
      text-align: center;

      a {
        width: 100%;
        border: 1px solid #eee;
        border-radius: 6px;
        display: inline-block;
        padding: 12px;

        font-size: clamp(12px, 1.5vw, 14px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 16px 9px;

    .qna_contents {
      .list_item {
        .qna_items {
          padding: 12px;

          .qna_answer {
            padding: 12px 0px 6px 0px;
            .qna_desc {
              left: 6px;
              word-break: break-all;
            }
          }
        }
      }
    }
  }
`;

export const QnaWriteForm = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  max-width: 768px;
  background: #fff;
  padding: 12px 0px 0px 0px;

  .post_title {
    margin: 0 auto;
    width: 100%;
    text-align: center;

    h1 {
      font-size: clamp(18px, 2vw, 20px);
    }
  }

  .qna_write {
    margin: 0 auto;
    margin-top: 30px;
    padding: 0 16px;
    width: 100%;
    border-width: 1px;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      .nickname {
        padding: 0 16px;
        font-size: clamp(14px, 1.5vw, 16px);
      }

      .qna_cardForm {
        position: relative;
        border-radius: 12px;
        border-width: 1px;
        padding: 16px 16px 20px 16px;

        .title {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          padding-bottom: 1rem;
          align-items: center;
          border-bottom: 1px solid #dedede;

          .q {
            display: inline-flex;
            align-items: center;
            margin-right: 12px;
            font-size: clamp(20px, 2vw, 22px);

            svg {
              width: 26px;
              height: 100%;
              color: #08f;
            }
          }

          input {
            order: 0;
            width: calc(100% - 42px);
            padding: 12px 6px;
          }

          .number_check {
            font-size: clamp(12px, 1vw, 13px);
            --text-opacity: 1;
            color: #b6becc;
            color: rgba(182, 190, 204, var(--text-opacity));
            min-width: 57px;
          }
        }

        .desc {
          margin: 20px auto;
          min-height: 260px;
          padding: 12px;
          border-bottom: 1px solid #dedede;

          textarea {
            min-height: 260px;
            width: 100%;
            resize: none;
            outline: none;
            border: 0;
            line-height: 1.5;
          }
        }

        .file_input {
          width: 100%;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;

          background: #218832;
          .file_label {
            width: 100%;
            height: 100%;
            p {
              display: inline-flex;
              width: 100%;
              height: 100%;
              align-items: center;
              justify-content: center;
              color: #fefefe;
              cursor: pointer;
              gap: 4px;
              font-size: clamp(14px, 1.5vw, 16px);

              span {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                svg {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }

        .submit {
          margin-top: 12px;
          width: 100%;
          height: 46px;
          background: #181818;
          color: #fefefe;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    min-height: 100vh;

    .qna_write {
      width: 100%;
      form {
        .qna_cardForm {
          padding: 0px;

          .title {
            width: 100%;

            .number_check {
              min-width: 57px;
            }

            .q {
              svg {
                width: 23px;
              }
            }
          }
        }
      }
    }
  }
`;
