import styled from 'styled-components';

export const QnaContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 16rem;
  background: pink;
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
        background: #181818;
        border-radius: 4px;
        color: #fefefe;
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
`;

export const QnaArticle = styled.article`
  margin: 30px auto 0px auto;
  max-width: 964px;
  position: relative;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #cecece;

  .qna_card {
    width: 100%;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
    border-top-width: 1px;
    border-bottom-width: 0;
    word-break: break-all;

    .card_header {
      width: 100%;
      padding: 0 0 10px;
      border-bottom: 1px solid #e3e3e3;

      h1 {
        word-wrap: break-word;
        font-weight: 700;
        margin-bottom: 12px;
        font-size: clamp(20px, 2.5vw, 24px);
        span {
          margin-right: 6px;
          font-size: clamp(21px, 2.6vw, 25px);
          color: #3772f0;
          font-weight: 500;
        }
      }

      .card_info {
        display: flex;
        align-items: center;
        gap: 6px;

        .inner {
          display: flex;
          gap: 3px;
          font-size: clamp(12px, 1.3vw, 14px);
        }

        .date {
          color: #aaa;
          font-size: clamp(12px, 1.3vw, 14px);
        }
      }
    }

    .card_contents {
      padding: 10px 0;
      .card_desc {
        margin-bottom: 6px;
      }
    }

    .card_footer {
      position: relative;

      .inner {
        display: flex;
      }
    }
  }
`;

export const QnaContents = styled.div`
  width: 100%;
  background: #fefefe;

  .qna_list {
    max-width: 1280px;
    margin: 12px auto 0px auto;
    padding: 1px 3px 0 1px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .qna_card {
      display: flex;
      min-height: 57px;
      margin-bottom: 6px;
      background-color: #f6f6f6;
      border-bottom: 1px solid #fff;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
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
`;

export const QnaCard = styled.div`
  max-width: 1024px;
  padding: 16px;
`