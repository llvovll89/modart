import styled from "styled-components";

export const InfoContainer = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: clamp(0.8rem, 1.5vw, 0.9rem);

    .top {
        width: 100%;
        display: flex;
        flex-direction: column;

        .user {
            padding: 0.75rem 1rem;
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            gap: 0.5rem;

            .user_img {
                width: 2rem;
                height: 2rem;
                border-radius: 100%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: fill;
                }
            }

            .not_user_img {
                width: 2rem;
                height: 2rem;
                border-radius: 100%;
                background-color: #c4c4c4;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            p {
                font-weight: 600;
            }
        }

        .boardImg {
            width: 100%;
            height: 600px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                object-fit: fill;
            }

            .body_spec {
                font-size: clamp(10px, 1vw, 12px);
                position: absolute;
                top: 0.5rem;
                left: 0.5rem;
                z-index: 10;
                background-color: rgba(255, 255, 255, 0.9);
                padding: 0.15rem 0.5rem;
                border-radius: 0.15rem;
                user-select: none;
            }
        }
    }

    .brand_area {
        user-select: none;
        padding: 0.75rem 1rem;
        width: 100%;
        height: 3.5rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .bottom {
        padding: 0.75rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        user-select: none;
        gap: 0.25rem;

        .desc {
            padding: 0.5rem 0;
        }

        .btnbox {
            display: flex;
            gap: 0.25rem;
            width: 100%;
            padding: 0.25rem 0;

            button {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .like_comments {
            display: flex;
            gap: 0.25rem;
        }
    }
`;
