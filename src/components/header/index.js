import styled from 'styled-components';

const HeaderContainer = styled.header`
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
        font-size: clamp(20px, 2.5vw, 24px);
        letter-spacing: -0.035rem;
        font-weight: 700;
        cursor: pointer;
        font-style: italic;
      }
    }

    .navbar {
      display: flex;
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
              font-weight: 600;
              color: #000;
              text-decoration: underline 0.5px;
              text-underline-offset: 3px;
            }
          }
          
          &:hover {
            background-color: rgba(32, 33, 36, 0.04);
          }

          &:last-of-type {
            min-width: 0;
          }

          &.user_nickname {
            a {
              position: relative;
            }
          }

          a,
          span {
            font-size: clamp(12px, 1.5vw, 13.5px);
            font-weight: 400;
            letter-spacing: 0.012rem;
            color: #5f6368;
            display: block;
              width: 100%;
              height: 100%;

            &:hover {
              color: #202124;
            }
          }
        }

        .logOut {
          cursor: pointer;

          span {
            display: flex;
            align-items: center;
            font-size: clamp(15px, 2vw, 16px);
          }
        }
      }

      .item_account {
        margin: 0 6px;

        .account {
          padding: 8px 16px;
          width: 100%;
          background: #09f;
          color: #fefefe;
          font-size: clamp(13.5px, 2vw, 14px);
          border-radius: 9999px;
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
            background-color: rgba(40, 41, 44, 0.04);
            a {
              font-weight: 600;
              color: #000;
              text-decoration: underline 0.5px;
              text-underline-offset: 3px;
            }
          }

          &:hover {
            background-color: rgba(32, 33, 36, 0.04);
          }

          &.user_nickname {
            a {
              position: relative;
            }
          }

          a,
          span {
            display: block;
            width: 100%;
            height: 100%;
            font-size: clamp(12px, 1.5vw, 13.5px);
            font-weight: 400;
            letter-spacing: 0.012rem;
            color: #5f6368;

            &:hover {
              color: #202124;
            }
          }
        }
      }
    }

    .toggle {
      display: none;
      width: 24px;
      height: 24px;
      cursor: pointer;

       svg {
        width: 100%;
        height: 100%;
       }
    }

    @media screen and (max-width: 768px) {
      overflow-x: scroll;
      gap: 16px;

        .toggle {
          display: flex;
          align-items: center;
          justify-content: center;
        }
    }
  }
`;

export { HeaderContainer };
