import styled from "styled-components";

export const AccountWrap = styled.section`
    position: absolute;
    left: -20px;
    top: 100%;
    width: 140px;
    background: #fff;

    @media screen and (max-width: 564px) {
        left: 0;
        top: 100%;
        width: 100%;
    }
`;
export const AccountContainer = styled.ul`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;

    li {
        font-weight: 600;
        color: #333;
        transition: all 0.2s ease-in-out;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        cursor: pointer;
        padding: 0.5rem 0.25rem;
        border-radius: 5px;

        svg {
            font-size: 1.2rem;
        }

        span {
            font-size: clamp(0.8rem, 1vw, 0.9rem);
        }

        &:hover {
            background: #09f;
            color: #fff;
        }
    }

    @media screen and (max-width: 564px) {
        width: 100%;
    }
`;
