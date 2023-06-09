import styled from 'styled-components';

const HeaderContainer = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700&display=swap');

  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  .contents {
    margin: 0 auto;
    display: flex;
    max-width: 1280px;
    padding: 0 16px;
    height: 60px;
    line-height: 60px;
    justify-content: space-between;
    align-items: center;

    .logo {
      h1 {
        font-size: clamp(24px, 2.5vw, 32px);
        letter-spacing: -0.035rem;
        font-weight: 700;
        cursor: pointer;
        font-style: italic;
      }
    }

    .navbar {
      display: flex;
      gap: 30px;

      .users {
        display: flex;
        align-items: center;
        gap: 12px;

        .item {
          min-width: 76px;
          padding: 0 6px;
          text-align: center;

          &.active {
            background-color: rgba(40, 41, 44, 0.04);
            
            a {
              color: #000;
              text-decoration: underline 0.5px;
              text-underline-offset: 3px;
            }
          }

          &.user_nickname {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            width: 100%;

            img {
              width: 36px;
              height: 36px;
              object-fit: cover;
              border-radius: 50%;
            }
            a {
              position: relative;
            }
          }

          a,
          span {
            font-size: clamp(12px, 1.5vw, 13.5px);
            font-weight: 600;
            letter-spacing: 0.012rem;
            color: #333;
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .logOut {
          cursor: pointer;

          span {
            position: relative;
            display: block;
            font-size: clamp(15px, 2vw, 16px);
            width: 100%;
            height: 100%;

            svg {
              width: 20px;
              height: 20px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }

      .item_account {
        margin: 0 6px;

        .account {
          display: block;
    width: 100%;
    height: 100%;
          padding: 0px 6px;
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 600;
        }
      }

      .list {
        display: flex;
        align-items: center;

        .item {
          min-width: 76px;
          padding: 0 6px;
          text-align: center;

          &.active {

            a {
              background: #333;
              color: #fff;
              text-decoration: underline 0.5px;
              text-underline-offset: 3px;
            }
          }

          &:hover {
            background-color: #fefefe;
          }

          &.user_nickname {
            &.active {
              background: #74b0d7;
            }
            a {
              position: relative;
            }
          }

          a,
          span {
            display: block;
            width: 100%;
            height: 100%;
            font-size: clamp(14px, 1.5vw, 16px);
            font-weight: 600;
            letter-spacing: 0.012rem;
            color: #333;
            padding: 0 6px;
          }
        }
      }
    }

    .toggle {
      position: relative;
      display: none;
      cursor: pointer;
      overflow: hidden;
      width: 30px;
      height: 30px;
      background: rgba(0,0,0,0.075);
      border-radius: 3px;

      .close_icon {
        width: 19px;
        height: 19px;
        color: #09f;
      }

      .hamburger_icon {
        color: #09f;
        width: 24px;
        height: 24px;
      }

      svg {
        font-weight: 500;
        width: 100%;
        height: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      position: relative;

      /* toggle mode */
      .navbar {
        position: fixed;
        display: block;
        top: 0;
        margin-top: 60px;
        right: -75%;
        height: 100vh;
        z-index: 1500;
        background: #fefefe;
        width: 75%;
        transition: all 0.3s linear;

        &.mobile {
          right: 0;
        }

        .list {
          display: block;
          .item {
            padding: 0;
            border-bottom: 1px solid #ebebeb;
            &.active {
              background-color: rgba(40, 41, 44, 0.04);
              
              a {
                font-weight: 600;
                color: #000;
                text-decoration: underline 0.5px;
                text-underline-offset: 3px;
              }
            }

            a,
            span {
              display: block;
              padding: 6px 16px;
              letter-spacing: -0.15px;
              font-weight: 700;
              text-align: left;
              text-indent: 6px;

              &:hover {
                color: #202124;
              }
            }
          }
        }

        .users {
          width: 100%;
          border-bottom: 1px solid #ebebeb;

          &.sign {
            .item_account {
              display: block;
              width: 100%;
              text-align: center;
              margin: 0;

              .account {
                display: block;
                padding: 6px 16px;
                letter-spacing: 0.78px;
                font-weight: 700;
                text-align: left;
                text-indent: 6px;
                color: #202124;
                background: transparent;
              }
            }
          }

          .item {
            width: 100%;
            &.user_nickname {
              a {
                display: block;
                width: max-content;
                height: max-content;
                padding: 0;
              }
            }
            a,
            span {
              display: block;
              padding: 6px 16px;
              letter-spacing: -0.15px;
              font-weight: 700;
              text-indent: 6px;
              width: 100%;
              height: 100%;
            }
            &.logOut {
            }
          }
        }
      }

      .toggle {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export { HeaderContainer };
