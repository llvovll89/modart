import styled from "styled-components";

export const BoardDetailContainer = styled.div`
    margin: 0px auto;
    margin-top: 30px;
    max-width: 1024px;
    min-height: calc(100vh - 60px);
    padding: 20px 20px 12px 20px;

    .contents {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 12px;

        .board {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 12px;

            .boardImg {
                width: 40%;
                min-height: 400px;
                height: 450px;

                img {
                    width: 100%;
                    height: 100%;
                    vertical-align: top;
                }
            }

            .boardInfo {
                width: 50%;
                padding: 20px 16px 16px 16px;
                .title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;

                    h1 {
                        font-size: clamp(16px, 2vw, 20px);
                        letter-spacing: -0.025rem;

                        span {
                            letter-spacing: -0.075rem;
                            font-weight: 500;
                            font-size: clamp(13px, 1.2vw, 14px);
                        }
                    }

                    .date {
                        font-size: clamp(11px, 1vw, 12px);
                        letter-spacing: -0.035rem;
                    }
                }
                .info {
                    .user {
                        display: flex;
                        gap: 12px;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 20px;

                        .user_info {
                            display: flex;
                            gap: 6px;
                            align-items: center;

                            img {
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                                object-fit: cover;
                            }
                            p {
                                font-size: clamp(13px, 1.5vw, 14px);
                            }
                        }
                        .like {
                            p {
                                font-size: clamp(12px, 1vw, 13px);
                            }
                        }
                    }

                    .area {
                        margin-bottom: 12px;

                        label {
                            font-size: clamp(12px, 1.2vw, 13.5px);
                        }

                        p {
                            font-size: clamp(11px, 1.1vw, 12.5px);
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }

                        .spec {
                            margin-top: 4px;
                            p {
                                line-height: 1.25;
                            }
                        }
                    }
                }

                .btnbox {
                    width: 100%;
                    margin-top: 30px;
                    text-align: center;

                    button {
                        padding: 12px 20px;
                        font-size: clamp(11px, 1vw, 14px);
                        cursor: pointer;
                        margin-right: 12px;

                        &:nth-child(1) {
                            color: red;
                        }

                        &:nth-child(2) {
                            color: #09f;
                        }
                    }
                }
            }
        }

        .comment {
            padding: 16px 20px 12px 20px;
            width: 100%;
            min-height: 120px;

            .comment_form {
                .users {
                    padding: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;

                    .profile {
                        .profile_contents {
                            display: flex;
                            align-items: center;
                            gap: 6px;

                            .profileImg {
                                width: 36px;
                                height: 36px;
                                border-radius: 50%;
                            }

                            .nickname {
                                font-size: clamp(12px, 1vw, 14px);
                            }
                        }
                    }

                    .submit_btn {
                        cursor: pointer;
                        border: 1px solid #cecece;
                        padding: 9px 16px;
                        border-radius: 4px;
                        font-size: clamp(12px, 1vw, 14px);
                        color: #000;
                    }
                }
                .form {
                    width: 100%;
                    padding: 12px;
                    textarea {
                        border-radius: 4px;
                        resize: none;
                        width: 100%;
                        height: 100px;
                        padding: 12px;
                        outline: none;
                        border: 1px solid #cecece;
                        letter-spacing: -0.012rem;

                        &:focus {
                            border: 1.5px solid #09f;
                        }
                    }
                }
            }

            .comment_list {
                width: 100%;
                padding: 12px;
                .comment_item {
                    margin-bottom: 20px;

                    .profile {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 12px;

                        .users {
                            display: flex;
                            align-items: center;
                            gap: 6px;

                            img {
                                width: 30px;
                                height: 30px;
                                object-fit: cover;
                                border-radius: 50%;
                            }

                            .comment_name {
                                font-size: clamp(11.5px, 1vw, 12.5px);
                            }
                        }

                        .comment_date {
                            font-size: clamp(11.5px, 1vw, 12.5px);
                            color: #999;
                        }
                    }

                    .content {
                        .comment_desc {
                            font-size: clamp(12px, 1.5vw, 13px);
                        }
                    }
                }
            }

            @media screen and (max-width: 768px) {
                padding: 0px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 12px;
        .contents {
            .board {
                display: block;

                .boardImg {
                    width: 100%;
                    min-height: 350px;
                    height: 400px;
                }

                .boardInfo {
                    width: 100%;
                    padding: 12px 6px 6px;
                }
            }
        }
    }
`;
