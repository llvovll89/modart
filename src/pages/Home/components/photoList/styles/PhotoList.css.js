import styled from "styled-components";

export const PhotoListWrap = styled.section`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(
        135deg,
        rgb(232, 254, 255) 24%,
        rgb(205, 255, 255) 60%,
        rgb(179, 242, 246) 89%
    );
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
        text-shadow: rgba(0, 0, 0, 0.15) 2px 5px 4px;
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

    @media screen and (max-width: 768px) {
        .contents {
            grid-template-columns: repeat(2, 1fr);
            place-items: center;
            gap: 4px;
        }
    }
`;
