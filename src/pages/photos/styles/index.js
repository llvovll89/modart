import styled from "styled-components";

export const PhotoWrap = styled.section`
    width: 100%;
    min-height: calc(100vh - 52px);
    background-color: #f9fdfa;
    padding: 52px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    @media screen and (max-width: 768px) {
        gap: 1rem;
    }
`;

const PhotoInfoContainer = styled.div`
    width: 100%;
    padding: 2rem 4rem;
    display: flex;
    align-items: center;

    background: linear-gradient(
        135deg,
        rgb(207, 228, 192) 15%,
        rgb(242, 251, 235) 36%,
        rgb(198, 208, 234) 82%
    );
    user-select: none;

    .info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        title {
            h1 {
                text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;
                font-weight: 700;
                font-size: clamp(1.25rem, 3vw, 2rem);
            }

            span {
                font-size: clamp(0.75rem, 1.5vw, 1rem);
            }
        }

        .desc {
            font-weight: 500;
            text-shadow: rgba(0, 0, 0, 0.15) 2px 5px 4px;
            display: flex;
            flex-direction: column;
            font-size: clamp(0.75rem, 1.5vw, 1.5rem);
        }

        .contents {
            position: relative;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            transition: 0.15s all linear;
            gap: 2px;

            no-photos,
            .no-boards {
                padding-left: 20px;
            }
        }

        .visible {
            text-align: center;

            button {
                span {
                    display: inline-flex;
                    width: 26px;
                    height: 26px;
                    svg {
                        width: 100%;
                        height: 100%;
                        color: #333;
                        &:hover {
                            color: #09f;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const PhotoContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 1rem 1rem 1rem;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;

    .form_top {
        width: 100%;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            display: flex;
            gap: 1rem;
            font-size: clamp(12px, 1.2vw, 14px);
            color: #666;

            li {
                cursor: pointer;
                user-select: none;
                &:hover {
                    color: #09f;
                }
            }
        }
    }

    .write_btn {
        padding: 8px 16px;
        font-size: clamp(12px, 1.2vw, 14px);
        background-color: #09f;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.15s linear;
        display: flex;
        align-items: center;
        gap: 6px;

        &:hover {
            background-color: #0077cc;
        }
    }
`;

const PhotoDetailPage = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    min-height: calc(100vh - 60px);
    padding: 12px 20px;
    position: relative;

    &.active {
        border-radius: 6px;
    }

    .contents {
        margin: 0 auto;
        max-width: 768px;
        word-break: break-all;
        width: 100%;
        padding: 12px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.07);
        border: 1px solid #eee;
        border-radius: 6px;

        &.active {
            width: 100%;
            margin: 0 auto;
        }

        .photo_users {
            width: 100%;
            display: flex;
            gap: 12px;
            margin-bottom: 16px;

            .user_img {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    vertical-align: top;
                    object-fit: cover;
                }
            }

            .user {
                display: flex;
                flex-direction: column;
                p {
                    font-weight: 700;
                    font-size: clamp(13px, 1.5vw, 16px);
                }

                span {
                    line-height: 1;
                    color: #9d8e8e;
                    font-size: clamp(12px, 1.25vw, 13.5px);
                }
            }
        }

        .snapImg {
            display: block;
            width: 100%;
            height: 450px;
            min-height: 400px;
            background: #fafafafa;
            border-radius: 6px;
            overflow: hidden;

            img {
                vertical-align: top;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 6px;
            }
        }

        .photo_info {
            padding: 12px 6px 0px 6px;

            .icon {
                padding: 12px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;

                    button {
                        width: 36px;
                        height: 36px;
                        margin-right: 12px;
                        border-radius: 50%;
                        position: relative;
                        color: #181818;

                        svg {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 80%;
                            height: 80%;
                        }
                    }
                }

                .date {
                    font-size: clamp(12px, 1.5vw, 14px);
                    font-weight: 500;
                    color: #9d8e8e;
                }
            }

            .photo_title {
                padding-top: 12px;

                .like_length {
                    font-size: clamp(13px, 1.5vw, 16px);
                    font-weight: 600;
                }

                .title {
                    font-size: clamp(14px, 1.8vw, 17px);
                    margin-bottom: 6px;
                    letter-spacing: 0.025rem;
                    font-weight: 500;

                    span {
                        font-weight: 600;
                    }
                }

                .desc {
                    letter-spacing: -0.015rem;
                    font-size: clamp(13px, 1.4vw, 15px);
                }
                .over {
                    margin-left: 6px;
                    cursor: pointer;
                    color: #7d7373;
                }
            }
        }
    }

    .comments {
        padding: 12px;
        padding-top: 40px;
        width: 100%;
        max-width: 768px;
        border-radius: 12px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-height: calc(100vh - 60px);
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;

        .comment_container {
            .profile {
                display: flex;
                align-items: center;
                gap: 6px;
                min-height: 60px;
                border-bottom: 1px solid #eee;
                justify-content: space-between;

                div {
                    display: flex;
                    align-items: center;
                    gap: 9px;

                    img {
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        object-fit: cover;
                    }

                    p {
                        font-weight: 700;
                        font-size: clamp(12px, 1.5vw, 14px);
                    }
                }

                .close_btn {
                    border-radius: 50%;
                    background: rgba(0, 0, 0, 0.07);
                    padding: 3px;
                    button {
                        font-size: clamp(12px, 1.5vw, 16px);
                    }
                }
            }

            .photo_desc {
                width: 100%;
                padding: 16px;

                p {
                    font-size: clamp(12.5px, 1.5vw, 14px);
                }

                .photo_desc_info {
                    .photo_desc_nickname {
                        font-weight: 700;
                    }
                }
            }

            .comment_list {
                width: 100%;
                padding: 12px;
                overflow-y: scroll;

                .comment_item {
                    margin-bottom: 20px;

                    .user_info {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 12px;
                        align-items: center;

                        .users {
                            display: flex;
                            gap: 6px;
                            align-items: center;

                            img {
                                width: 36px;
                                height: 36px;
                                border-radius: 50%;
                                object-fit: cover;
                            }

                            .comment_name {
                                font-weight: 600;
                                font-size: clamp(11.5px, 1vw, 12.5px);
                            }
                        }

                        .comment_date {
                            color: #ccc;
                            font-size: clamp(11px, 1vw, 12px);
                        }
                    }

                    .content {
                        .comment_desc {
                            padding: 6px 0;
                            font-size: clamp(12px, 1.5vw, 13px);
                        }

                        .update_comment {
                            margin: 12px 0;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            gap: 6px;
                            justify-content: space-between;

                            .update_input {
                                width: 100%;
                                padding: 12px;
                                border: 1px solid #eee;
                                border-radius: 6px;
                                letter-spacing: -0.025rem;
                                font-size: clamp(12px, 1.5vw, 13.5px);

                                &:focus,
                                &:active {
                                    border: 1.5px solid #333;
                                }
                            }

                            .update_add_btn {
                                min-width: 42px;
                                height: 100%;

                                span {
                                    font-size: clamp(16px, 1.5vw, 20px);
                                }
                            }
                        }
                    }

                    .comment_btn {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        button {
                            padding: 6px 12px;

                            span {
                                font-size: clamp(14px, 1.5vw, 18px);
                            }

                            /* &.edit_comment_btn {
                color: #4bae4b;
              }

              &.delete_comment_btn {
                color: salmon;
              } */
                        }
                    }
                }
            }
        }

        .comment_form {
            width: 100%;
            margin-top: 12px;

            .comment_user {
                display: flex;
                justify-content: space-between;

                .info_contents {
                    display: flex;
                    gap: 6px;
                    align-items: center;

                    img {
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        object-fit: cover;
                    }

                    p {
                        font-weight: 700;
                        font-size: clamp(11px, 1.5vw, 13px);
                    }
                }

                .submit_btn {
                    padding: 6px 12px;
                    font-size: clamp(11px, 1.5vw, 13px);
                    border-radius: 6px;
                    color: #fff;
                    background: #333;
                }
            }
            .input_form {
                margin-top: 16px;
                textarea {
                    resize: none;
                    width: 100%;
                    height: 46px;
                    border: 1px solid #eee;
                    border-radius: 3px;
                    padding: 12px;
                    font-size: clamp(12.5px, 1.25vw, 14px);
                    letter-spacing: -0.025rem;

                    &:focus {
                        border: 1.5px solid #7d7373;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 12px;
        gap: 6px;

        .contents {
            .snapImg {
                min-height: 300px;
                height: 350px;
            }
        }
    }
`;

export {PhotoInfoContainer, PhotoContents, PhotoDetailPage};
