import styled from "styled-components";

const BoardWrap = styled.section`
    width: 100%;
    min-height: calc(100vh - 52px);
    background-color: #f9fdfa;
    padding: 52px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    @media screen and (max-width: 768px) {
        gap: 1rem;
    }
`;

const BoardInfoContainer = styled.div`
    width: 100%;
    padding: 2rem 4rem;
    display: flex;
    align-items: center;

    background: linear-gradient(
        135deg,
        rgb(255, 255, 255) 12%,
        rgb(179, 224, 255) 47%,
        rgb(255, 242, 246) 89%
    );
    user-select: none;

    .info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        title {
            h1 {
                text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;
                font-weight: 700;
                font-size: clamp(1.25rem, 3vw, 2rem);
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
            font-size: clamp(0.75rem, 1.5vw, 1.5rem);
        }

        .contents {
            position: relative;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            transition: 0.15s all linear;
            gap: 2px;

            no-photos,
            .no-boards {
                padding-left: 20px;
            }
        }

        .visible {
            text-align: center;

            button {
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
    }

    @media screen and (max-width: 768px) {
        padding: 2rem;
    }
`;

const BoardContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 1rem;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;

    .form_top {
        width: 100%;
        height: 2.5rem;
        padding: 0 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            display: flex;
            gap: 1rem;
            font-size: clamp(12px, 1.2vw, 14px);
            color: #666;

            li {
                cursor: pointer;
                user-select: none;
                &:hover {
                    color: #09f;
                }
            }
        }
    }

    .write_btn {
        padding: 8px 16px;
        font-size: clamp(12px, 1.2vw, 14px);
        background-color: #09f;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.15s linear;
        display: flex;
        align-items: center;
        gap: 6px;

        &:hover {
            background-color: #0077cc;
        }
    }

    @media screen and (max-width: 768px) {
        .form_top {
            padding: 0;
        }
    }
`;

export {BoardWrap, BoardInfoContainer, BoardContents};
