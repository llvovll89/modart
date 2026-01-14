import styled from "styled-components";

export const PhotoListWrap = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #f9fdfa;
    padding: 1rem 3rem;

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`;

export const PhotoListContainer = styled.div`
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
        }

        span {
            font-size: clamp(0.75rem, 1.5vw, 1rem);
        }
    }

    .desc {
        font-weight: 500;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: clamp(0.75rem, 1.5vw, 1.75rem);
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

    .view_more {
        margin: 0 auto;
        text-align: center;

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

    @media screen and (max-width: 768px) {
        .contents {
            grid-template-columns: repeat(2, 1fr);
            place-items: center;
            gap: 4px;
        }
    }
`;
