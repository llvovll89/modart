import styled from "styled-components";
import { fadeDown, fadeIn } from "../../../../styles/animation";

export const Main_container = styled.main`
    height: calc(100dvh - 52px);
    position: relative;
    background-blend-mode: screen;
    margin: 0 auto;
    isolation: isolate;
    background: linear-gradient(
        135deg,
        rgb(255, 255, 255) 12%,
        rgb(245, 244, 255) 47%,
        rgb(255, 242, 246) 89%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .mobile_subItems {
        display: none;

        strong {
            color: #09f;
        }
    }

    .blur {
        width: 100%;
        height: calc(100dvh - 52px);
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    .blur::after {
        content: "";
        position: absolute;
        inset: 0;
        backdrop-filter: blur(7px);
        background: rgba(255, 255, 255, 0.02);
    }

    .main_video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        backface-visibility: hidden;
    }

    .contents {
        position: relative;
        max-width: 1280px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
        z-index: 2;

        .overview {
            position: relative;
            width: 100%;
            user-select: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            // color: #191919;
            color: #fff;
            gap: 0.5rem;

            .inner {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            h1 {
                font-size: clamp(1.2rem, 3vw, 2rem);
                font-weight: 700;
                animation: ${fadeIn} 2s ease-in-out;

                .indent {
                    font-weight: 800;
                    display: inline-block;
                    font-size: clamp(1.2rem, 3.5vw, 3.5rem);
                    margin-right: 6px;
                    color: #09f;
                    letter-spacing: 0.01rem;
                }
            }

            .sub_text {
                margin: 6px 0;
                font-weight: 700;
                font-size: clamp(1.2rem, 3vw, 2rem);
                animation: ${fadeDown} 2s ease-in-out;
            }
        }

        @media (max-width: 564px) {
            padding: 3rem 1rem;
            height: 100%;
            color: #fff;
            // backdrop-filter: blur(5px);

            .overview {
                h1 {
                    font-size: clamp(1rem, 2.5vw, 3rem);

                    .indent {
                        font-size: clamp(1.5rem, 3vw, 3.2rem);
                    }
                }

                .sub_text {
                    font-size: clamp(1rem, 2.5vw, 3rem);
                }
            }
        }
    }

    .continue {
        position: absolute;
        bottom: 2rem;
        display: flex;
        align-items: center;
        right: 4%;
        color: #ffffff;
        z-index: 10;

        .page_down_icon {
            width: auto;
            max-width: none;
            height: max(2.8958vw, 4rem);
            aspect-ratio: 1 / 2;
            cursor: pointer;
        }

        .desc {
            display: flex;
            flex-direction: column;
            font-size: clamp(0.7rem, 1.5vw, 0.85rem);
            font-weight: 500;
            user-select: none;
            width: max-content;

            strong {
                color: #09f;
                font-weight: 800;
            }

            span {
                &:last-child {
                    font-size: clamp(0.6rem, 1.2vw, 0.75rem);
                }
            }
        }
    }
`;
