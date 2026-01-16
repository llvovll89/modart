import styled from "styled-components";

export const TodayStoryDetailWrap = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: calc(100dvh - 52px);
    padding-top: 52px;
    position: relative;
`;
export const TodayStoryDetailContainer = styled.article`
    max-width: 768px;
    width: 100%;
    margin: 2rem 0;
    border: 1px solid rgb(238, 238, 238);
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .contents {
        background-color: #f5f5f5;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .comment_header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fafafa;
        padding: 0.5rem 1rem;
        user-select: none;

        .left {
            display: flex;
            gap: 0.5rem;

            p {
                display: flex;
                align-items: center;
                gap: 0.3rem;
            }
        }
    }

    @media (max-width: 564px) {
        padding: 0 1rem;
    }
`;
