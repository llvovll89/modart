import styled from 'styled-components';
import { InputStyles, ButtonStyles, FormStyles } from './Styled-css';

const Section = styled.section`
  width: 100%;
  padding-top: 60px;
  min-height: 100vh;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    /* padding-left: 16px;
    padding-right: 16px; */
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 40px;

  .title {
    h1 {
      font-size: clamp(16px, 1.5vw, 18px);
    }
    span {
      font-size: clamp(12px, 1vw, 13px);
    }
  }

  .contents {
    margin-top: 20px;

    .no-photos,
    .no-boards {
      padding-left: 20px;
    }
  }
`;

const AuthForm = styled.div`
  position: relative;
  max-width: 760px;
  min-height: 500px;
  width: 100%;
  gap: 6px;
  box-shadow: 0 8px 16px rgba(182, 190, 204, 0.5);
  display: flex;

  .toggle {
    position: absolute;
    top: 20px;
    left: 0;
    display: none;
    cursor: pointer;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  .left {
    position: relative;
    flex: 1 1 50%;
    background: #23272b;

    .textbox {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fefefe;
      text-align: center;
      display: flex;
      flex-direction: column;
      width: 100%;

      .title {
        padding: 3px 0;
        letter-spacing: -0.055rem;
        font-size: clamp(26px, 3.5vw, 30px);
        font-weight: 700;
      }

      span {
        display: inline-block;
        letter-spacing: -0.035rem;
        font-size: clamp(20px, 2vw, 26px);
        font-weight: 700;
      }
    }
  }

  .right {
    position: relative;
    padding: 40px 16px 36px 16px;
    flex: 1 1 50%;
    margin-top: auto;

    form {
      .area {
        position: relative;
        width: 100%;

        input {
          margin-bottom: 14px;
          border-bottom: 1px solid #999;
          height: 46px;
        }

        input:active,
        input:focus {
          border-bottom: 2px solid #09f;
        }

        label {
          position: absolute;
          left: 10px;
          top: 0px;
          font-size: clamp(12px, 1.5vw, 13px);
          transition: top 0.25s ease-in-out;
          color: #625f5f;
          cursor: pointer;
        }

        input:focus + label {
          top: -6px;
        }
      }

      button {
        background: #181818;
        color: #fff;
        height: 56px;
        line-height: 1.5rem;
        font-size: 16px;
        transition: background 0.25s ease-in-out;

        &:hover,
        &:active {
          background: #09f;
        }
      }

      a {
        width: 100%;
      }
    }

    .signUp_link {
      margin-top: 12px;
      text-align: center;

      a {
        font-size: clamp(12px, 1.8vw, 14px);
      }
    }

    .socialLogin {
      display: flex;
      flex-direction: column;
      margin-top: 12px;

      button {
        height: 56px;
        font-size: 16px;
        line-height: 1.5rem;
      }

      .googleLogin {
        display: flex;
        align-items: center;
        gap: 20%;
        background: #09f;
        color: #fefefe;
        transition: background 0.25s ease-in-out;

        &:hover,
        &:active {
          background: #625f5f;
        }

        .googleIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fefefe;
          width: 40px;
          height: 40px;

          svg {
            width: 26px;
            height: 26px;
          }
        }

        .googleText {
        }
      }
    }
  }

  @media screen and (max-width: 646px) {
    flex-direction: column;
    min-height: 100vh;
    box-shadow: none;
    justify-content: space-between;

    .toggle {
      display: block;
    }
    .left {
      width: 100%;
      max-width: 454px;
      display: flex;
      align-items: center;
      background: #ffffff;

      .textbox {
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: column;
        top: 0;
        left: 0;
        transform: none;
        color: #181818;
      }
    }

    .right {
      padding: 20px 6px;
    }
  }
`;

const Card = styled.div`
  min-width: 220px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 6px;

  .top {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      /* object-fit: fill; */
    }
  }

  .bottom {
    padding-top: 6px;

    .photo_category {
      vertical-align: middle;
      overflow: hidden;
      color: #222;
      font-weight: 700;
      font-size: clamp(11px, 1.5vw, 12.5px);
    }

    .board_nickname,
    .photo_nickname {
      vertical-align: top;
      display: inline-block;
      overflow: hidden;
      height: 17px;
      line-height: 17px;
      padding-bottom: 2px;
      font-size: clamp(12px, 1.5vw, 13px);
      font-weight: 700;
      color: #222;
      text-overflow: ellipsis;
      width: fit-content;
      white-space: nowrap;
    }

    .board_title,
    .board_desc,
    .photo_title,
    .photo_desc {
      margin-top: 6px;
      max-height: 44px;
      line-height: 16px;
      font-size: clamp(12px, 1.5vw, 13px);
      white-space: normal;
    }

    .photo_title {
      margin-bottom: 3px;
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 180px;
    .top {
      height: 260px;
    }
  }
`;

const CardForm = styled.div`
  margin: 0 auto;
  max-width: 460px;
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .post_title {
    h1 {
      letter-spacing: -0.035rem;
      font-size: clamp(18px, 2.5vw, 24px);
    }
  }

  form {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;

    .nickname {
      font-size: clamp(14px, 2vw, 16px);
      font-weight: 600;
      min-height: 36px;
      line-height: 36px;
      margin-bottom: 12px;

      span {
        padding-right: 12px;
        font-weight: 500;
        font-size: clamp(12px, 1.5vw, 14px);
      }
    }

    input,
    textarea,
    button {
      outline: none;
    }

    input[type='text'] {
      height: 56px;
      border: 1px solid #e5e8eb;
      padding: 18px 12px;
      transition: all 0.15s ease-in-out;
      font-size: clamp(12.5px, 1.5vw, 15px);
      transition: border-color 0.15s ease-in-out;
      margin-bottom: 12px;

      &::placeholder {
        color: #908787;
      }

      &:focus {
        border: 2px solid #181818;
      }
    }

    select {
      height: 56px;
      padding: 18px 12px;
      margin-bottom: 12px;
    }

    textarea {
      height: 120px;
      padding: 9px 16px;
      font-size: clamp(12.5px, 1.5vw, 15px);
      margin-bottom: 12px;
      transition: border-color 0.15s linear;
      border: 1px solid #e5e8eb;
      resize: none;

      &::placeholder {
        color: #908787;
      }

      &:focus {
        border: 2px solid #181818;
      }
    }

    button[type='submit'] {
      background: #181818;
      height: 56px;
      padding: 12px 20px;
      color: #fefefe;
      font-size: clamp(12.5px, 1.5vw, 15px);
      transition: all 0.2s ease-in-out;

      &:hover,
      &:focus {
        background: transparent;
        color: #222;
      }
    }

    .category-wrap {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-bottom: 12px;

      label {
        position: relative;
        display: block;
        margin: 16px 0;
        color: #181818;
        font-size: clamp(13px, 1.5vw, 15px);
        cursor: pointer;

        input[type='checkbox'] {
          appearance: none;
        }

        i {
          position: absolute;
          top: 1px;
          left: -8px;
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 1px solid #181818;
          border-radius: 3px;
        }

        input[type='checkbox']:checked ~ i {
          top: 1px;
          border-top: none;
          border-right: none;
          height: 9px;
          width: 18px;
          transform: rotate(-45deg);
          border-color: #09f;
        }

        span {
          position: relative;
          transition: all 0.25s linear;
          margin: 0 16px;

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background: #09f;
            transform: translateY(-50%) scaleX(0);
            transform-origin: right;
            transition: transform 0.25s linear;
          }
        }

        input[type='checkbox']:checked ~ span::before {
          transform: translateY(-50%) scaleX(1);
          transform-origin: left;
          transition: transform 0.25s linear;
        }
      }
    }

    .file_label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 56px;
      justify-content: center;
      cursor: pointer;
      background: #181818;
      color: #fff;
      transition: 0.15s all linear;
      opacity: 0.88;
      margin-bottom: 12px;

      p {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: center;
        font-size: clamp(12.5px, 1.5vw, 15px);

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(16px, 1.5vw, 18px);
          svg {
            width: 100%;
            height: 100%;
          }
        }

        .label_text {
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 10px;

    form {
      gap: 9px;
    }
  }
`;

const AlertStyled = styled.div`
  width: 100%;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.86);
  background: #f8d7da;
  text-align: center;

  p {
    padding: 12px;
    font-size: clamp(14px, 2vw, 15px);
  }
`;

const Form = styled.form`
  ${FormStyles}
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 50%;

  h1 {
    font-size: clamp(18px, 2.5vw, 20px);
    margin: 12px 0;
  }
`;
const Input = styled.input`
  ${InputStyles}
`;
const Button = styled.button`
  ${ButtonStyles}
`;

const DetailForm = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 60px;
  max-width: 964px;
  display: flex;
  justify-content: center;
  gap: 20px;

  .snapImg {
    width: 35vw;
    min-height: 500px;

    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .snapInfo {
    width: 50vw;
    .title {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 20px;

      font-size: clamp(16px, 2vw, 18px);

      span {
        color: #b2b2b2;
        font-size: clamp(11px, 1vw, 12px);
      }
    }

    .tr {
      margin-bottom: 12px;
      padding: 6px;

      .th {
        display: inline-block;
        min-width: 100px;
        font-size: clamp(14px, 1vw, 15px);
      }
      .td {
        font-size: clamp(12px, 1vw, 14px);
        font-weight: 600;
      }

      &:last-child {
        .td {
          color: #da2e4b;
          font-size: clamp(16px, 2vw, 20px);
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    gap: 12px;

    .snapImg {
      width: 50vw;
      min-height: 350px;
    }

    .snapInfo {
      .tr {
        display: inline-flex;
        padding: 6px 0;
        margin-bottom: 9px;
        gap: 3px;

        .th {
          display: inline-block;
          min-width: 52px;
          font-size: clamp(14px, 1vw, 15px);
        }
        .td {
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 600;
          word-break: break-all;
        }
      }
    }
  }
`;

export {
  Section,
  CardForm,
  AlertStyled,
  Container,
  Card,
  AuthForm,
  Form,
  Input,
  Button,
  DetailForm,
};
