import styled from "styled-components";
import {fadeIn} from "../../styles/animation";

const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: 0.3s opacity ease-in-out;
    color: ${(props) => (props.$isHome ? "#000" : "#FFFFFF")};
    background: ${(props) => (props.$isHome ? "#FFFFFF" : "#000000")};

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
                font-size: clamp(24px, 3vw, 30px);
                letter-spacing: 0.05rem;
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
