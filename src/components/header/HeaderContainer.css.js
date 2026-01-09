import styled from "styled-components";
import {fadeIn} from "../../styles/animation";

const HeaderContainer = styled.header`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700&display=swap");

    background-color: #ffffff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;

    .contents {
        margin: 0 auto;
        display: flex;
        padding: 0 2rem;
        height: 52px;
        line-height: 52px;
        justify-content: space-between;
        align-items: center;

        .logo {
            h1 {
                color: rgb(29, 161, 255);
                text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;
                font-size: clamp(24px, 3vw, 30px);
                letter-spacing: 0.15rem;
                font-weight: 700;
                cursor: pointer;
                animation: ${fadeIn} 0.5s ease;
            }
        }

        .toggle {
            position: relative;
            display: none;
            cursor: pointer;
            overflow: hidden;
            width: 30px;
            height: 30px;
            border-radius: 3px;

            .close_icon {
                width: 19px;
                height: 19px;
            }

            .hamburger_icon {
                width: 24px;
                height: 24px;
            }

            svg {
                font-weight: 500;
                width: 100%;
                height: 100%;
            }
        }

        @media screen and (max-width: 646px) {
            position: relative;
            padding: 0 1rem;

            .toggle {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

export {HeaderContainer};
