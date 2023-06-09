import styled, { keyframes } from 'styled-components';
import { InputStyles, ButtonStyles, FormStyles } from './Styled-css';

// animation
const loading = keyframes`
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
`;

// styles

export const ModalContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 6px;
  padding: 12px;
`

const Section = styled.section`
  width: 100%;
  padding-top: 60px;
  min-height: 100vh;
  background: #ffffff;

  &.today_detail_section,
  &.qna_write_section,
  &.photo_detail_section {
    background: #fafafa;
  }

  @media screen and (max-width: 768px) {
    /* padding-left: 16px;
    padding-right: 16px; */
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
  height: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.photo_container,
  &.today_container {
    padding: 0px;
    .contents {
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      transition: 0.15s all linear;
    }

    .visible {
      margin-top: 12px;
      text-align: center;

      button {
        padding: 12px;
        min-width: 120px;

        span {
          display: inline-flex;
          width: 26px;
          height: 26px;
          svg {
            width: 100%;
            height: 100%;
            color: #333;
            &:hover {
              color: #09f;
            }
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      .contents {
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
      }
    }
  }

  .title {
    padding: 0 16px;
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
  max-width: 768px;
  min-height: 500px;
  width: 100%;
  gap: 6px;
  box-shadow: 0 8px 16px rgba(182, 190, 204, 0.5);
  display: flex;

  &.active {
    &::after {
      position: absolute;
      content: "";
      background: rgba(0,0,0,0.42);
      width: 100%;
      height: 100%;
    }
  }

  .toggle {
    position: absolute;
    top: 0;
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
    background: #0b3b6b;

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

        &.file {
          margin-bottom: 16px;

          label {
            width: 100%;
            height: 52px;
            display: inline-flex;
            position: relative;
            left: 0;
            top: 0;
            align-items: center;
            padding: 6px 12px;
            background: #fe5493;
            color: #fff;
            justify-content: center;
            gap: 20%;

            p {
              line-height: 1.5rem;
            }

            span {
              position: absolute;
              left: 12px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;

              svg {
                width: 100%;
                height: 100%;
              }
            }
          }
        }

        input {
          margin-bottom: 20px;
          border-bottom: 1px solid #999;
          height: 46px;
          font-size: clamp(13.5px, 1.5vw, 15px);
        }

        input:active,
        input:focus {
          border-bottom: 2px solid #09f;
        }

        label {
          position: absolute;
          left: 10px;
          top: -2px;
          font-size: clamp(12px, 1.5vw, 13px);
          transition: top 0.25s ease-in-out;
          color: #625f5f;
          cursor: pointer;
        }

        input:focus + label {
          top: -8px;
        }
      }

      button {
        background: #181818;
        color: #fff;
        height: 52px;
        line-height: 1.5rem;
        font-size: clamp(14px, 1.5vw, 15px);
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

      .resetPassword {
        button {
          transition: color 0.2s linear;
          &:hover {
            color: #20f;
          }
        }
      }
    }

    .socialLogin {
      display: flex;
      flex-direction: column;
      margin-top: 12px;

      button {
        height: 52px;
        font-size: clamp(14px, 1.5vw, 15px);
        line-height: 1.5rem;
      }

      .googleLogin {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #09f;
        color: #fefefe;
        transition: background 0.25s ease-in-out;

        &:hover,
        &:active {
          background: #625f5f;
        }

        .googleIcon {
          position: absolute;
          display: flex;
          left: 12px;
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

  .reset_form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 360px;
    height: 360px;
    background: #FFF;
    transform: translate(-50%, -50%);
    z-index: 100;
    padding: 40px 20px 36px;
    display: flex;
    border-radius: 6px;
    box-shadow: 0 2px 2px rgba(0,0,0,0.122);
    flex-flow: column wrap;
    justify-content: space-between;

    p {
      display: block;
      font-size: clamp(14.5px, 1.5vw, 18px);
      text-align: center;
      margin-bottom: 12px;
      font-weight: 700;
      letter-spacing: 0.1rem;
    }

    .input_area {
      position: relative;
      width: 100%;

      label {
        display: inline-block;
        padding: 0 12px;
        font-size: clamp(11.5px, 1vw, 13px);
        margin-bottom: 6px;
      }

      input {
        display: block;
        width: 100%;
        padding: 12px;
        min-height: 46px;
        border-bottom: 1px solid #131313;
      }
    }

    .send {
      width: 100%;
      background: #191919;
      min-height: 46px;
      color: #fff;
    }

    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      display: block;
      width: 28px;
      height: 28px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    box-shadow: none;
    justify-content: space-between;
    max-width: 564px;

    .toggle {
      display: block;
    }
    .left {
      width: 100%;
      min-height: 200px;
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
  min-width: 240px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 6px;
  transition: all 0.15s linear;

  &.board_card {
    min-width: 250px;

    @media screen and (max-width: 564px) {
      min-width: 270px;

      .top {
        width: 100%;
      }
    }
  }

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
    text-overflow: ellipsis;

    .photo_category,
    .today_category {
      vertical-align: middle;
      overflow: hidden;
      color: #222;
      font-weight: 700;
      font-size: clamp(11px, 1.5vw, 13px);
    }

    .board_nickname,
    .photo_nickname,
    .today_nickname {
      vertical-align: top;
      display: inline-block;
      overflow: hidden;
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
    .photo_desc,
    .today_desc,
    .today_title {
      max-height: 44px;
      line-height: 16px;
      font-size: clamp(11px, 1.5vw, 14px);
      white-space: normal;
      word-break: break-all;
    }

    .photo_title {
      margin-bottom: 3px;
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 90%;
    
    .top {
      height: 260px;
    }
  }

  @media screen and (max-width: 564px) {
    .top {
      height: 240px;
      width: 200px;
    }

    &.photo_card,
  &.today_card {
    height: 300px;

    .top {
      width: 100%;
      height: 160px;
    }
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
  gap: 36px;

  &.ootd {
    justify-content: stretch;
    padding-top: 50px;
    max-width: 768px;

    .ootd_form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 12px;
      place-items: center;

      .text_area {
        display: flex;
        flex-flow: column wrap;
        gap: 6px;
        width: 100%;

        label {
          font-size: clamp(12px, 1.5vw, 14px);
          color: #908787;
        }
  
        input[type="text"] {
          &::placeholder {
            color: #333;
          } 
          border: 1px solid #c4cbd2;
          margin-bottom: 0;
          width: 100%;
        }

        textarea {
          &::placeholder {
            color: #333;
          }
        }

      }
      .text_area:last-child {
    grid-column: span 2;
  }
    }

    .submit_btn {
      display: flex;
      width: 100%;
      gap: 12px;
      align-items: center;
      
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

      button[type='submit'] {
      width: 100%;
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

    }

    
  }

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

    .text_area {
      margin: 12px 0;
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

const LoaderContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .loader {
    width: 60px;
    height: 60px;
    border: 12px solid #eeeeee;
    border-top-color: #08f;
    border-radius: 50%;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
    animation: ${loading} 1.5s ease infinite;
  }

  h1 {
    font-size: clamp(18px, 2vw, 22px);
    font-weight: 700;
    letter-spacing: -0.075rem;
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
  LoaderContainer,
  DetailForm,
};
