import styled from "styled-components";

export const CommentsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    user-select: none;
    gap: 1rem;
    padding: 0 0.25rem;

    .comment_item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .user {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                img {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }

            .comment_date {
                font-size: clamp(0.7rem, 1vw, 0.85rem);
            }
        }
    }

    .comment_write {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1rem;
        height: 50px;

        .profile {
            .no_user {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                .no_user_img {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    background-color: #ccc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    object-fit: cover;
                    overflow: hidden;
                }

                span {
                    font-size: clamp(0.7rem, 1vw, 0.85rem);
                }
            }
        }

        .comment_form {
            flex: 1;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            height: 100%;

            .comment_input {
                width: calc(100% - 80px);
                height: 80%;
                padding: 0.25rem 0.5rem;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: clamp(0.8rem, 1vw, 1rem);
            }

            .submit {
                padding: 0.25rem 0.5rem;
                color: #fff;
                min-width: 70px;
                background-color: #09f;
                height: 80%;
            }
        }
    }
`;
