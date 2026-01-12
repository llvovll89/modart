import styled from "styled-components";
import {fadeDown, fadeIn} from "../../../../../styles/animation";

export const QnaListWarp = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #f9fdfa;
    padding: 2rem 3rem;

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`;

export const QnaListContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 52px);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: space-evenly;
    user-select: none;

    .title {
        h1 {
            text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;
            font-weight: 700;
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            animation: ${fadeIn} 0.8s ease-in-out;
        }

        span {
            font-size: clamp(0.75rem, 1.5vw, 1rem);
        }
    }

    .desc {
        font-weight: 500;
        text-shadow: rgba(0, 0, 0, 0.15) 2px 5px 4px;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: clamp(0.75rem, 1.5vw, 1.75rem);
        animation: ${fadeDown} 0.8s ease-in-out;
    }
`;

export const QnaCard = styled.div`
    width: 100%;
    margin: 0 auto;

    .qna_contents {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        .list_item {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            .qna_items {
                width: 100%;
                padding: 0.5rem 1rem;

                gap: 6px;
                background: #fff;
                border: 1px solid #ededed;
                border-radius: 6px;
                transition: all 0.2s linear;
                box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2px;

                &.active {
                    display: flex;
                    flex-direction: column;
                    border-color: #09f;
                }

                .inner {
                    .qna_title {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        font-size: clamp(12px, 1.5vw, 14.5px);
                        font-weight: 500;
                        line-height: 1.6;
                        color: #333;
                        cursor: pointer;

                        .qna_q_icon {
                            color: #09f;
                            font-size: clamp(20px, 2vw, 22px);
                        }
                    }
                }

                .qna_answer {
                    position: relative;
                    overflow: hidden;

                    max-height: 0;
                    opacity: 0;
                    transform: translateY(-4px);
                    padding: 0;
                    border-top: 0;
                    pointer-events: none;

                    transition: max-height 260ms ease, opacity 180ms ease,
                        transform 180ms ease, padding 260ms ease;

                    .qna_desc {
                        color: #4d5256;
                        font-size: clamp(12px, 1.5vw, 14px);
                    }

                    &.active {
                        max-height: 240px; /* 답변 길면 숫자 키우세요 */
                        opacity: 1;
                        transform: translateY(0);
                        padding: 1rem 0 0 0.5rem;
                        border-top: 1px solid rgba(226, 220, 220, 0.45);
                        pointer-events: auto;
                    }
                }
            }
        }

        .view_more {
            margin: 0 auto;
            text-align: center;
            width: 150px;

            a {
                width: 100%;
                border-radius: 6px;
                display: inline-block;
                padding: 12px;
                background: #09f;
                color: #fff;
                font-weight: 600;
                transition: all 0.2s linear;

                &:hover {
                    background: #0077cc;
                }

                font-size: clamp(12px, 1.5vw, 14px);
            }
        }
    }
`;
