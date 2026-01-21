import styled from "styled-components";
import { fadeUp } from "../../../../../styles/animation";

export const BoardListWrap = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #f9fdfa;
    padding: 1rem 3rem;

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`;

export const BoardListContainer = styled.div`
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

   .no_board_container {
    margin: 5rem auto;
    padding: 3rem 2rem;
    max-width: 420px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    text-align: center;
    animation: fadeUp 0.6s ease-out;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .empty_icon {
        font-size: 3.5rem;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: clamp(1.2rem, 2vw, 1.5rem);
        font-weight: 700;
        color: #222;
    }

    p {
        font-size: clamp(0.9rem, 1.5vw, 1.1rem);
        color: #666;
        line-height: 1.5;
    }

    .no_board_container {
        margin: 5rem auto;
        padding: 3rem 2rem;
        max-width: 420px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        text-align: center;
        animation: ${fadeUp} 0.6s ease-out;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        .empty_icon {
            font-size: 3.5rem;
            margin-bottom: 0.5rem;
        }

        h2 {
            font-size: clamp(1.2rem, 2vw, 1.5rem);
            font-weight: 700;
            color: #222;
        }

        p {
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
            color: #666;
            line-height: 1.5;
        }
    }

    .empty_button {
        margin-top: 1rem;
        padding: 12px;
        border-radius: 8px;
        background: linear-gradient(135deg, #00aaff, #0077cc);
        color: #fff;
        font-weight: 600;
        transition: all 0.25s ease;
        box-shadow: 0 6px 15px rgba(0, 119, 204, 0.3);

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 119, 204, 0.45);
        }
    }
}
`;
