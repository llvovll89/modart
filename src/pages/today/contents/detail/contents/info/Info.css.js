import styled from "styled-components";

export const InfoContainer = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    user-select: none;

    .today_header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
    }

    .user_info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
    }

    .today_desc {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .desc {
            height: 250px;
            background-color: #f5f7f8;
        }
    }
`;
