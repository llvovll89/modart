import styled from "styled-components";

export const BoardDetailWrap = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(100dvh - 52px);
    padding: 68px 1rem;
    position: relative;
`;

export const BoardDetailContainer = styled.div`
    width: min(768px, 100%);
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.77);
    overflow: hidden;
    backdrop-filter: blur(12px);

    .contents {
        background-color: #181818;
        color: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 564px) {
        padding: 0 1rem;
    }
`;
