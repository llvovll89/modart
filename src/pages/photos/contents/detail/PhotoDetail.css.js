import styled from "styled-components";

export const PhotoDetailWrap = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(100dvh - 52px);
    padding-top: 52px;
    position: relative;
`;

export const PhotoDetailContainer = styled.div`
    max-width: 564px;
    width: 100%;

    .contents {
        background-color: #181616;
        color: #ffffff;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 564px) {
        padding: 0 1rem;
    }
`;
