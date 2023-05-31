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
        font-size: clamp(16px, 2vw, 26px);
      }

      span {
        color: #fefefe;
        font-weight: 600;
        font-size: clamp(16px, 1.6vw, 20px);
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

export const TodayContents = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  background: #ffffff;

  .today_list {
    margin: 12px auto 0px auto;
    max-width: 1280px;
    padding: 3px 0px;
    display: flex;
    flex-direction: column;
    background: #FAFAFA;
    gap: 6px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .today_card {
      display: flex;
      margin: 0px 0px 6px 0px;
      padding: 3px;
      min-height: 57px;
      max-height: 70px;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .today_type {
        min-width: 42px;
        width: 76px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 12px;

        span {
          font-size: clamp(12.5px, 1.5vw, 13.5px);
        }
      }

      .today_img {
        padding-left: 12px;
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

  @media screen and (max-width: 768px) {
    .today_list {
      gap: 3px;
      .today_card {
        gap: 0px;
        margin: 0px 0px 2px;

        .today_type {
          padding-right: 0px;
          max-width: 70px;
        }

        .today_img {
          padding-left: 0px;
          padding-right: 6px;
        }
      }
    }  
  }
`;

export const TodayDetailPage = styled.div`
  margin: 30px auto;
  max-width: 964px;
  width: 100%;
  min-height: 460px;
  padding: 0px 6px;
  border-radius: 6px;
  background: #FFFFFF;

  .contents {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .today_header {
        display: flex;
        padding: 16px 12px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        
        .today_title {
          font-size: clamp(16px, 1.5vw, 18px);
          .today_type {
            margin-right: 12px;
            font-size: clamp(12px, 1vw, 13px);
            font-weight: 500;
          }
        }
        
        .today_date {
          font-size: clamp(12px, 1vw, 13px);
          color: #333;
          font-weight: 400;
        }
    }

    .user_info {
      padding: 16px 12px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      border-bottom: 1px solid #eee;

      .user_nickname {
        font-size: clamp(14px, 1.5vw, 15px);
      }

      .items {
        span {
          margin-right: 12px;
          font-size: clamp(12px, 1vw, 13px);

          &:last-child {
            margin-right: 0px;
          }
        }
      }
    }

    .today_desc {
      padding: 16px 12px;
      
      .desc {
        margin-bottom: 12px;
        display: inline-block;
      min-height: 200px;
      width: 100%;
      padding: 12px 6px 4px 6px;
      }
      
      .recommend {
        margin: 6px auto;
        display: block;
       padding : 12px 20px;
       font-size: clamp(14px, 1.5vw, 16px);
       background: rgba(47, 42, 42, 0.701);
       border-radius: 6px;
       color: #FFF;

      }
    }

    .comment {
      .comment_header {
        width: 100%;
        padding: 12px;
        background: #f3f3f3;
        border-radius: 6px;
        border: 1px solid #ccc;

        p {
          font-size: clamp(13px, 1.5vw, 14px);
        }
      }

      .comment_list {
        margin-top: 16px;

        .comment_item {
          padding: 6px 20px;
          .top {
            display: flex;
            align-items: center;
            margin-bottom: 6px;
            
            img {
              width: 40px;
              height: 40px;
              border-radius: 6px;
              object-fit: cover;
            }
  
            span {
              font-size: clamp(13px, 1.35vw, 14px);
  
              &.comment_name {
                font-weight: 600;
                margin-left: 12px;
              }
  
              &.comment_date {
                margin-left: 12px;
                font-size: clamp(12px, 1.2vw, 13px);
                font-weight: 400;
                color: #888;
              }
            }
          }
  
          .bt {
            padding: 12px 6px;
          }
        }
      }
      
      .comments {
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #e8e1e1;
        border-radius: 6px;

        .profile {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          gap: 6px;

          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
          }
          
          span {
            font-size: clamp(13px, 1.35vw, 14px);
            font-weight: 700;
          }
        }

        .comment_text {
          font-size: clamp(12.5px, 1.5vw, 14px);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .comment_form {
          margin-top: 6px;
          width: 100%;
          display: flex;
          gap: 6px;

          input {
            border: 1px solid #ccc;
            padding: 6px 20px;
            width: 100%;
            height: 56px;
            background: #ededed;

            &:focus {
              background: #FFF;
              border: 2px solid #09f;
            }
          }

          .submit {
            width: 96px;
            height: 56px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }
        }
      }
    }
  }
`