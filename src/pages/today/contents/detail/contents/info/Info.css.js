import styled from "styled-components";

export const InfoContainer = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    user-select: none;
    gap: 0.5rem;

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
        font-size: clamp(0.8rem, 1vw, 1rem);
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;

        .left {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            .author {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                .user_img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background-color: #ccc;
                }
            }

            .today_date {
                color: #777;
            }
        }

        .items {
            display: flex;
            gap: 0.5rem;
            align-items: center;

            li {
                display: flex;
                align-items: center;
                gap: 0.15rem;
            }
        }
    }

    .today_desc {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .desc {
            height: 250px;
            background-color: #f5f7f8;
            padding: 1rem;
        }

        .recommend {
            background-color: #09f;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            width: fit-content;
            margin: 0 auto;
            cursor: pointer;
        }
    }
`;
