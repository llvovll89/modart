import styled from 'styled-components';

export const TodayContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 16rem;
  background: #09f;
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
      padding: 20px;
      width: 100%;

      svg {
        width: 100%;
        height: 100%;
        color: #fefefe;
      }
    }
  }
`;

export const TodayContents = styled.div`
  width: 100%;
  background: #fefefe;

  .today_list {
    margin: 12px auto 0px auto;
    max-width: 1280px;
    padding: 3px 6px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .today_card {
      display: flex;
      padding: 3px;
      min-height: 57px;
      max-height: 70px;
      margin-bottom: 6px;
      background-color: #f6f6f6;
      border-bottom: 1px solid #fff;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .numbers {
        width: 42px;
        padding-right: 12px;
        border-right: 1px solid #ededed;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-size: clamp(12.5px, 1.5vw, 13.5px);
        }
      }

      .today_type {
        min-width: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 12px;
        border-right: 1px solid #ededed;

        span {
          font-size: clamp(12.5px, 1.5vw, 13.5px);
        }
      }

      .today_img {
        img {
          width: 70px;
          height: 100%;
          object-fit: cover;
          vertical-align: top;
          cursor: pointer;
        }
      }

      .items {
        padding: 3px 2px;

        .today_title {
          color: rgb(50, 98, 197);
          font-size: clamp(14.5px, 2vw, 16px);
          cursor: pointer;
          transition: all 0.15s linear 0s;

          &:hover {
            color: rgb(0, 68, 255);
            text-decoration: underline 0.5px;
          }
        }

        .item_type {
          display: inline-block;
          color: rgb(104, 104, 104);
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
`;
