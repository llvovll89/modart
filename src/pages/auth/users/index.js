import styled from 'styled-components';

export const AccountContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 40px 40px 160px;

  .contents {
    overflow: hidden;
    min-height: 300px;

    .users {
      display: flex;
      padding: 23px 0 23px 23px;
      border: 1px solid #ebebeb;
      border-radius: 10px;
      background-color: #fff;
      margin-bottom: 20px;

      .user_detail {
        display: flex;

        .user_thumb {
          position: relative;
          margin-right: 20px;
          width: 100px;
          height: 100px;
          border-radius: 100%;
          flex-shrink: 0;

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            border: 1px solid rgba(34, 34, 34, 0.05);
            border-radius: 50%;
          }

          img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }
        }

        .user_info {
          display: flex;
          align-items: center;

          .info_box {
            .name {
              font-size: clamp(16px, 1.5vw, 18px);
              letter-spacing: -0.27px;
              font-weight: 600;
              color: #000;
            }

            .email {
              line-height: 1.2;
              font-size: clamp(12px, 1.25vw, 14px);
              letter-spacing: -0.21px;
              color: rgba(34, 34, 34, 0.5);
            }

            .intro {
              line-height: 1.2;
              font-size: clamp(12px, 1.25vw, 14px);
              margin-bottom: 6px;
            }

            a {
              margin-top: 9px;
              display: inline-flex;
              cursor: pointer;
              align-items: center;
              justify-content: center;
              vertical-align: middle;
              text-align: center;
              color: rgba(34, 34, 34, 0.8);
              background-color: #fff;
              height: 36px;
              line-height: 36px;
              border: 1px solid #ebebeb;
              padding: 6px 12px;
              border-radius: 6px;
              font-size: clamp(12px, 1.5vw, 13.5px);
            }
          }
        }
      }

      .board_detail {
        position: relative;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          bottom: 0;
          background-color: #ebebeb;
          width: 1px;
        }

        .board_item {
          display: inline-block;
          min-width: 159px;
          text-align: center;

          .info {
            display: block;
            line-height: 19px;
            font-size: clamp(16px, 1.8vw, 16px);
            letter-spacing: -0.16px;
            font-weight: 700;
          }
        }

        .title {
          line-height: 19px;
          font-size: clamp(12px, 1.5vw, 13px);
          letter-spacing: -0.07px;
          color: rgba(34, 34, 34, 0.5);
        }
      }

      @media screen and (max-width: 768px) {
        display: block;
        padding: 0;
        background: #f7f6f6;
        border: none;

        .user_detail,
        .board_detail {
          background: #fefefe;
          padding: 12px 0px;
        }

        .user_detail {
          padding: 12px;
        }

        .board_detail {
          margin-top: 12px;
          border-bottom: 1px solid #eee;

          .board_item {
            padding: 6px 0px;
          }
        }
      }
    }

    .customer_service {
      padding: 23px;
      border: 1px solid #ebebeb;
      border-radius: 10px;
      background-color: #fff;
      display: flex;
      flex-flow: column wrap;
      gap: 12px;

      .customer_info {
        .customer_title {
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
          h1 {
            font-size: clamp(16px, 1.5vw, 22px);
          }
          span {
            line-height: 1.2;
            font-size: clamp(12px, 1.25vw, 14px);
            letter-spacing: -0.21px;
            color: rgba(34, 34, 34, 0.5);
          }
        }
      }

      .customer_contents {
        .items {
          padding: 20px 0px;
          border-bottom: 1px solid #eee;
          h2 {
            font-size: clamp(14.5px, 1.5vw, 18px);
            margin-bottom: 12px;
          }
          .item_container {
            width: 100%;
            justify-content: center;
            gap: 6px;
            display: flex;
            margin-bottom: 12px;
            flex-wrap: wrap;
            align-items: center;

        .item {
          padding: 20px;
          min-width: 120px;
          text-align: center;
          border-radius: 6px;
          border: 1px solid #eee;
          font-size: clamp(12.5px, 1.5vw, 14px);
          cursor: pointer;
        }
          }
        }

        .account_questions {
          padding: 20px 0px;
          border-bottom: 1px solid #eee;
          p {
            font-size: clamp(14.5px, 1.5vw, 18px);
            margin-bottom: 12px;
            font-weight: 700;
          }
        }

        @media screen and (max-width: 768px) {
           .items {
            .item_container {
              padding: 20px 0px;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
           }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0px 100px;
  }
`;

export const AccountEditForm = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 40px 40px 160px;
  min-height: calc(100vh - 60px);

  .contents {
    min-height: 380px;

    .contents_title {
      h3 {
        font-size: clamp(22px, 2vw, 26px);
        padding-bottom: 16px;
        border-bottom: 2px solid #181818;
      }
    }

    .user_profile {
      display: flex;
      display: flex;
      align-items: center;
      padding: 38px 0;
      background-color: #fff;
      border-bottom: 1px solid #ebebeb;

      .user_img {
        width: 90px;
        height: 90px;
        margin-right: 12px;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .user_detail {
        .user_nickname {
          margin-bottom: 12px;
          p {
            font-weight: 700;
            letter-spacing: -0.27px;
            line-height: 1.2;
            color: #000;
            font-size: clamp(18px, 1.5vw, 20px);
          }
        }

        .user_intro {
          margin-bottom: 12px;
          p {
            font-weight: 400;
            letter-spacing: -0.27px;
            line-height: 1.2;
            color: #716a6a;
            font-size: clamp(12.5px, 1vw, 14px);
          }
        }

        .profile_btn {
          display: flex;
          align-items: center;
          gap: 6px;

          .img_change,
          .img_delete {
            display: inline-flex;
            cursor: pointer;
            vertical-align: middle;
            justify-content: center;
            align-items: center;
            border: 1px solid #d3d3d3;
            color: rgba(34, 34, 34, 0.8);
            padding: 0 14px;
            height: 34px;
            border-radius: 10px;
          }

          .img_change {
            label {
              cursor: pointer;

              p {
                letter-spacing: -0.06px;
                font-size: clamp(12px, 1vw, 13px);
              }
            }
          }

          .img_delete {
            p {
              letter-spacing: -0.06px;
              font-size: clamp(12px, 1vw, 13px);
            }
          }
        }
      }
    }

    .profile_info {
      .info_title {
        margin: 12px 0;
        padding-bottom: 6px;
        border-bottom: 1px solid #ebebeb;
      }

      .area {
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        padding: 25px 0 12px;
        position: relative;
        border-bottom: 1px solid #ebebeb;

        &.deleteAccount {
          .deleteAccount_btn {
            margin: 0 auto;
            margin-top: 20px;
            width: 120px;
            padding: 9px 16px;
            color: #fff;
            background: red;
            border-radius: 6px;
          }
        }

        &.active {
          border-bottom: none;
        }

        label {
          font-size: clamp(12px, 1vw, 13px);
          letter-spacing: -0.07px;
          font-weight: 400;
          color: rgba(34, 34, 34, 0.5);
        }

        .input_area {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          &.active {
            display: block;
            width: 100%;

            input {
              padding: 7px 0;
              font-size: clamp(14px, 1.5vw, 15px);
              letter-spacing: -0.15px;
              width: 100%;
              line-height: 22px;
              border-bottom: 1px solid rgb(235, 235, 235);
            }

            .password {
              height: 46px;
            }

            .btn_area {
              padding-top: 28px;
              text-align: center;

              button {
                padding: 0 38px;
                height: 42px;
                display: inline-flex;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                vertical-align: middle;
                text-align: center;
                border-radius: 6px;
                font-size: 14px;
                letter-spacing: -0.14px;

                &:nth-child(1) {
                  border: 1px solid #d3d3d3;
                  margin-right: 20px;
                }

                &:last-child {
                  background: #181818;
                  color: #ffffff;
                }
              }
            }
          }

          p {
            padding-right: 58px;
            flex: 1;
            padding-top: 8px;
            padding-bottom: 8px;
            font-size: clamp(14px, 1.5vw, 15px);
            letter-spacing: -0.16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .change_btn {
            position: absolute;
            right: 0;
            height: 42px;
            min-width: 100px;
            background: #181818;
            padding: 0 20px;
            color: #fefefe;
            border-radius: 6px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 30px 20px 100px;

    .contents {
      .user_profile {
        padding: 26px 0px;
      }

      .profile_info .area .input_area.active .btn_area button {
        height: 36px;
        padding: 6px 20px;
      }

      .profile_info .area .input_area .change_btn {
        min-width: 75px;
      }
    }
  }
`;
