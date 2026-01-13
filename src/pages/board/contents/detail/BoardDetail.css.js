import styled from "styled-components";

export const BoardDetailWrap = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(100dvh - 52px);
    padding-top: 52px;
`;

export const BoardDetailContainer = styled.div`
    max-width: 564px;
    width: 100%;

    .contents {
        background-color: #f5f5f5;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 564px) {
        padding: 0 1rem;
    }
`;
