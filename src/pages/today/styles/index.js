import styled from "styled-components";

export const TodayStoryWrap = styled.section`
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

export const TodayInfoContainer = styled.div`
    width: 100%;
    padding: 2rem 4rem;
    display: flex;
    align-items: center;

    background: linear-gradient(
        135deg,
        rgb(152, 228, 192) 15%,
        rgb(201, 251, 235) 36%,
        rgb(148, 208, 204) 82%
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

export const TodayContents = styled.div`
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

export const TodayDetailPage = styled.div`
    margin: 30px auto;
    max-width: 964px;
    width: 100%;
    min-height: 460px;
    border-radius: 6px;
    padding: 12px 0;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.077);

    .contents {
        display: flex;
        flex-direction: column;
        gap: 6px;

        .today_header {
            display: flex;
            padding: 16px 12px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;

            .today_title {
                font-size: clamp(16px, 1.5vw, 18px);
                .today_type {
                    margin-right: 12px;
                    font-size: clamp(12px, 1vw, 13px);
                    font-weight: 500;
                }
            }

            .today_date {
                font-size: clamp(12px, 1vw, 13px);
                color: #333;
                font-weight: 400;
            }
        }

        .user_info {
            padding: 16px 12px;
            display: flex;
            width: 100%;
            justify-content: space-between;
            border-bottom: 1px solid #eee;

            .user_nickname {
                font-size: clamp(14px, 1.5vw, 15px);
            }

            .items {
                span {
                    margin-right: 12px;
                    font-size: clamp(12px, 1vw, 13px);

                    &:last-child {
                        margin-right: 0px;
                    }
                }
            }
        }

        .today_desc {
            padding: 16px 12px;

            .desc {
                margin-bottom: 12px;
                display: inline-block;
                min-height: 200px;
                width: 100%;
                padding: 12px 6px 4px 6px;
            }

            .recommend {
                margin: 6px auto;
                display: block;
                padding: 12px 20px;
                font-size: clamp(14px, 1.5vw, 16px);
                background: #09f;
                border-radius: 6px;
                color: #fff;
            }
        }

        .comment {
            .comment_header {
                width: 100%;
                padding: 12px;
                background: #181818;
                border-radius: 6px;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: space-between;

                p {
                    font-size: clamp(13px, 1.5vw, 14px);
                }

                button {
                    font-size: clamp(13px, 1.5vw, 14px);
                    color: #fff;
                }
            }

            .comment_list {
                margin-top: 16px;

                .comment_item {
                    padding: 6px 20px;
                    .top {
                        display: flex;
                        align-items: center;
                        margin-bottom: 6px;

                        img {
                            width: 40px;
                            height: 40px;
                            border-radius: 6px;
                            object-fit: cover;
                        }

                        span {
                            font-size: clamp(13px, 1.35vw, 14px);

                            &.comment_name {
                                font-weight: 600;
                                margin-left: 12px;
                            }

                            &.comment_date {
                                margin-left: 12px;
                                font-size: clamp(12px, 1.2vw, 13px);
                                font-weight: 400;
                                color: #888;
                            }
                        }
                    }

                    .bt {
                        padding: 12px 0px;
                        min-height: 50px;
                    }

                    .btns {
                        padding: 12px 0px 0px 0px;
                        display: flex;
                        gap: 12px;

                        button {
                            min-height: 36px;
                            cursor: pointer;
                            padding: 6px 12px;
                            font-size: clamp(11px, 1.5vw, 12px);
                            border: 1px solid #ccc;
                            border-radius: 6px;

                            &:first-child {
                                color: #3aa53a;
                            }

                            &:last-child {
                                color: #dc5b4c;
                            }
                        }
                    }
                }
            }

            .comments {
                margin-top: 20px;
                padding: 20px;

                .profile {
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                    gap: 6px;

                    img {
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                    }

                    span {
                        font-size: clamp(13px, 1.35vw, 14px);
                        font-weight: 700;
                    }
                }

                .comment_text {
                    font-size: clamp(12.5px, 1.5vw, 14px);
                    font-weight: 600;
                    margin-bottom: 12px;
                }

                .comment_form {
                    margin-top: 6px;
                    width: 100%;
                    display: flex;
                    gap: 6px;

                    input {
                        border-radius: 6px;
                        border: 1px solid #ccc;
                        padding: 6px 20px;
                        width: 100%;
                        height: 56px;
                        background: #ededed;

                        &:focus {
                            background: #fff;
                            border: 2px solid #09f;
                        }
                    }

                    .submit {
                        width: 96px;
                        height: 56px;
                        border: 1px solid #ccc;
                        border-radius: 6px;
                    }
                }
            }
        }
    }
`;
