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
      display: flex;
      gap: 2px;
      align-items: center;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: clamp(16px, 2.5vw, 20px);
        color: #08f;
      }

      h1 {
        font-size: clamp(16px, 2.5vw, 20px);
        letter-spacing: -0.035rem;
        font-weight: 400;
        cursor: pointer;
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
            border-bottom: 1.5px solid #09f;
            background-color: rgba(32, 33, 36, 0.04);
            a {
              color: #000;
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
  }
`;

export { HeaderContainer };
