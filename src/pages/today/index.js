import styled from "styled-components";

export const TodayContainer = styled.div`
    margin: auto;
    width: 100%;
    height: 16rem;
    background: #09f;
    overflow: hidden;

    .contents {
        margin: auto;
        color: #181818;
        display: flex;
        max-width: 768px;
        height: 100%;
        padding: 0 16px;

        .text {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 6px;

            p {
                color: #fefefe;
                font-size: clamp(16px, 2vw, 26px);
            }

            span {
                color: #fefefe;
                font-weight: 600;
                font-size: clamp(16px, 1.6vw, 20px);
            }

            .link-btn {
                margin-top: 20px;
                background: #181818;
                border-radius: 4px;
                color: #fefefe;
                padding: 12px 20px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
            }
        }

        .image {
            padding: 16px;
            width: 80%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    @media screen and (max-width: 768px) {
        height: 13rem;
    }
`;

export const TodayContents = styled.div`
    @font-face {
        font-family: "Chosunilbo_myungjo";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }

    max-width: 1280px;
    margin: 0 auto;
    background: #ffffff;

    .today_list {
        margin: 12px auto 0px auto;
        max-width: 1280px;
        padding: 3px 0px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", arial,
            sans-serif;

        .today_card {
            display: flex;
            margin: 0px 0px 6px 0px;
            padding: 3px;
            min-height: 57px;
            gap: 12px;
            padding-bottom: 12px;

            border-bottom: 1px solid #eee;

            &:last-child {
                margin-bottom: 12px;
            }

            .today_type {
                min-width: 42px;
                display: flex;
                align-items: center;
                justify-content: center;

                .today_type_span {
                    color: #333;
                    font-size: clamp(10px, 1vw, 11px);

                    &.type1 {
                        color: salmon;
                    }

                    &.type2 {
                        color: #54b3b7;
                    }

                    &.type3 {
                        color: #09f;
                    }

                    &.type4 {
                        color: #eded6d;
                    }
                    &.type5 {
                        color: #d95f5f;
                    }
                    &.type6 {
                        color: #3d3939;
                    }
                }
            }

            .today_img {
                img {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    vertical-align: top;
                    cursor: pointer;
                }
            }

            .items {
                width: 100%;
                padding: 3px 2px;
                display: flex;
                flex-flow: column wrap;
                justify-content: space-between;

                .today_title {
                    color: #333;
                    font-size: clamp(13px, 2vw, 16px);
                    cursor: pointer;
                    transition: all 0.15s linear 0s;

                    &:hover,
                    &:focus {
                        color: #07f;
                        text-decoration: underline 0.5px;
                    }
                }

                .today_desc {
                    display: block;
                    font-size: clamp(13px, 1.5vw, 15px);
                    letter-spacing: 0.012rem;
                }

                .sub_items {
                    display: flex;
                    gap: 6px;
                    align-items: center;
                    font-size: clamp(11px, 1.2vw, 12px);
                    color: rgb(104, 104, 104);

                    span {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 7px;
                        line-height: 1.5;

                        svg {
                            color: rgb(104, 104, 104);
                            font-size: clamp(16px, 1.5vw, 20px);
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .today_list {
            padding: 0 6px;
            gap: 2px;
            .today_card {
                gap: 6px;
                margin: 0px 0px 2px;

                .today_type {
                    margin-right: 6px;
                    max-width: 70px;
                }

                .today_img {
                    img {
                        width: 70px;
                        height: 70px;
                    }
                }
            }
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
