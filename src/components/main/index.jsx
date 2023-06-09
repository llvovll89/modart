import styled, { keyframes } from 'styled-components';

const move = keyframes`
    0% {
        top: 45%;
    } 
    50% {
        top: 42%;
    }
    100% {
        top: 45%;
    }
`;

const cameraMove = keyframes`
    0% {
        top: 15%;
        transform: rotate(0deg);
    }
    50% {
        top: 19%;
        transform: rotate(16deg);
    }
    100% {
        top: 15%;
        transform: rotate(0deg);
    }
    `;

const mobileCameraMove = keyframes`
        0% {
        top: 52%;
    }
    50% {
        top: 55%;
    }
    100% {
        top: 52%;
    }
`;

const mobileQuestionMove = keyframes`
        0% {
        top: 10%;
        
    }
    50% {
        top: 13%;
        
    }
    100% {
        top: 10%;
        
    }
`;

const questionMove = keyframes`
        0% {
            top: 66%;
            transform: rotate(0deg);
        }
        50% {
            top: 69%;
            transform: rotate(-16deg);
        }
        100% {
            top: 66%;
            transform: rotate(0deg);
        }

        `;

export const Main_container = styled.main`
  @font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  height: calc(100vh - 60px);
  position: relative;
  background-blend-mode: screen;

  .contents {
    width: 100%;
    padding: 0 16px;
    height: calc(100vh - 60px);

    .items {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);
      max-width: 1300px;
      padding-left: 20px;
      width: 100%;
      z-index: 100;

      .overview {
        position: relative;
        width: 100%;

        .over {
          font-size: clamp(14.5px, 2.5vw, 24px);
        }

        h1 {
          font-size: clamp(16px, 2.5vw, 30px);
          font-weight: 600;
          line-height: 1.5;

          .indent {
            font-weight: 700;
            display: inline-block;
            font-size: clamp(17px, 2.5vw, 32px);
            font-style: italic;
            margin-right: 6px;
            color: #09f;
            letter-spacing: 0.01rem;
            text-decoration: underline;
          }
        }

        .sub_text {
          margin: 6px 0;
          line-height: 1.5;
          font-weight: 600;
          font-size: clamp(15.5px, 2vw, 36px);
        }
      }
    }

    .question_img,
    .camera_img {
      position: absolute;
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .question_img {
      top: 15%;
      right: 27%;
      animation: ${cameraMove} 3.5s linear infinite;
    }

    .camera_img {
      top: 66%;
      right: 4%;
      animation: ${questionMove} 4s linear infinite;
    }

    .main_img {
      position: absolute;
      top: 45%;
      right: 10%;

      transform: translate(10%, -45%);
      width: 355px;
      height: 355px;
      animation: ${move} 3s ease infinite;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .continue_btn {
      margin-top: 20px;
      display: block;
      width: 160px;
      padding: 12px;
      border-radius: 6px;
      background: #191919;
      color: #fff;
      text-align: center;
      font-size: clamp(14px, 1.5vw, 16px);
    }
  }

  @media screen and (max-width: 768px) {
    font-family: 'Noto Sans KR', sans-serif;

    .contents {
      .items {
        padding: 6px;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -80%);
        .overview {
          padding: 6px 6px 6px 12px;

          .over {
            line-height: 2;
          }

          h1 {
            letter-spacing: -0.05rem;
            font-weight: 700;
          }

          .sub_text {
            letter-spacing: -0.03rem;
            margin: 6px 0;
            font-weight: 700;
          }
        }
      }

      .camera_img,
      .question_img {
        display: none;
        width: 46px;
        height: 46px;
      }

      .camera_img {
        top: 52%;
        right: 82%;
        animation: ${mobileCameraMove} 4s linear infinite;
      }

      .question_img {
        right: 8%;
        top: 10%;
        animation: ${mobileQuestionMove} 3.5s linear infinite;
      }

      .main_img {
        width: 325px;
        height: 325px;

        top: 75%;
        right: 50%;
        transform: translate(50%, -75%);
      }

      .continue_btn {
        width: 140px;
        border-radius: 16px;
      }
    }
  }
`;
