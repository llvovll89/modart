import styled from "styled-components";
import {fadeIn} from "../../../styles/animation";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

export const ResetPassWordForm = styled.article`
    width: 100%;
    max-width: 400px;
    padding: 2.5rem 2rem;
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    animation: ${fadeIn} 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: clamp(1rem, 2.5vw, 1.25rem);
    }

    .desc {
        margin-bottom: 1.5rem;
        color: #333;
        font-size: 0.9rem;
        user-select: none;
        line-height: 1.4;
    }

    label {
        font-size: 0.85rem;
        color: #555;
        margin-bottom: 0.75rem;
        display: block;
    }

    input {
        width: 100%;
        padding: 0.75rem;
        border-radius: 8px;
        border: 1px solid #ddd;
        margin-bottom: 1.2rem;
        font-size: clamp(0.8rem, 1.5vw, 0.9rem);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;

        &:focus {
            outline: none;
            border-color: #09f;
            box-shadow: 0 0 0 2px #09f;
        }
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
`;

export const SendButton = styled.button`
    flex: 1;
    padding: 0.75rem;
    border-radius: 8px;
    border: none;
    background: #09f;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #0077cc;
    }
`;

export const CloseButton = styled.button`
    flex: 1;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #f5f5f5;
    }
`;
