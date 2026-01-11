import styled, {keyframes} from "styled-components";
import {fadeDown, fadeIn, fadeUp} from "../../../../styles/animation";

export const Main_container = styled.main`
    height: calc(100vh - 52px);
    position: relative;
    background-blend-mode: screen;
    margin: 0 auto;
    background: linear-gradient(
        135deg,
        rgb(255, 255, 255) 12%,
        rgb(179, 224, 255) 47%,
        rgb(255, 242, 246) 89%
    );
    display: flex;
    align-items: center;
    justify-content: center;

    .mobile_subItems {
        display: none;
    }

    .contents {
        position: relative;
        max-width: 1280px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 2rem;

        .items {
            .overview {
                position: relative;
                width: 100%;
                user-select: none;
                text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;

                h1 {
                    font-size: clamp(1.2rem, 3vw, 3rem);
                    font-weight: 600;
                    animation: ${fadeIn} 2s ease-in-out;

                    .indent {
                        font-weight: 700;
                        display: inline-block;
                        font-size: clamp(1.2rem, 3.5vw, 3.5rem);
                        margin-right: 6px;
                        color: #09f;
                        letter-spacing: 0.01rem;
                    }
                }

                .sub_text {
                    margin: 6px 0;
                    font-weight: 600;
                    font-size: clamp(1.2rem, 3vw, 3rem);
                    animation: ${fadeDown} 2s ease-in-out;
                }
            }
        }

        @media (max-width: 564px) {
            padding: 3rem 1rem;
            height: 100%;
            justify-content: flex-end;
            color: #fff;
            backdrop-filter: blur(5px);

            .items {
                padding-bottom: 4rem;

                .overview {
                    h1 {
                        font-size: clamp(2rem, 2.5vw, 3rem);

                        .indent {
                            font-size: clamp(2.5rem, 3vw, 3.5rem);
                        }
                    }

                    .sub_text {
                        font-size: clamp(1.5rem, 2.5vw, 3rem);
                    }
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
        }
    }

    .mobile_subItems {
        position: absolute;
        bottom: 2rem;
        left: 1.5rem;
        display: flex;
        flex-direction: column;
        text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;
        background-color: rgba(255, 255, 255, 0.7);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: clamp(0.7rem, 1.5vw, 0.85rem);
        font-weight: 500;
        user-select: none;
    }

    .main_bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
        opacity: 0.1;
    }

    @media (max-width: 564px) {
        .main_bg {
            opacity: 0.5;
        }
    }
`;
