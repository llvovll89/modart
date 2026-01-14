import styled from "styled-components";

export const CommentContainer = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: clamp(0.8rem, 1.5vw, 0.9rem);

    .comment_form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 1rem 0.5rem;

        .user {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .profile_contents {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                .profileImg {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 100%;
                    background-color: #e0e0e0;
                    overflow: hidden;
                    object-fit: cover;
                }
            }
        }

        .form {
            width: 100%;

            textarea {
                width: 100%;
                height: 5rem;
                resize: none;
                padding: 0.5rem;
                border: 1px solid #d3d3d3;
            }
        }
    }
`;

export const CommentList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    user-select: none;

    .comment_item {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;
        font-size: clamp(0.6rem, 1.2vw, 0.8rem);

        .profile {
            display: flex;
            gap: 0.25rem;
            justify-content: space-between;
            align-items: center;

            .users {
                display: flex;
                align-items: center;
                gap: 0.25rem;

                .profile_img {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 100%;
                    background-color: #e0e0e0;
                    overflow: hidden;
                }
            }
        }

        .comment_desc {
            word-break: break-all;
            display: block;
        }
    }
`;
