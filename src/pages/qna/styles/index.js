import styled from "styled-components";

export const QnaWrap = styled.section`
    width: 100%;
    min-height: calc(100dvh - 52px);
    background-color: #f9fdfa;
    padding: 68px 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    justify-content: center;

    @media screen and (max-width: 768px) {
        gap: 1rem;
        padding: 52px 1rem;
    }
`;

export const QnaContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 1rem 1rem 1rem;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;

    .form_top {
        margin: 18px 0 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }

    .sort_group {
        display: inline-flex;
        gap: 8px;
        padding: 6px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .sort_chip {
        appearance: none;
        border: 0;
        cursor: pointer;
        border-radius: 999px;
        padding: 10px 12px;
        font-weight: 800;
        font-size: 13px;
        letter-spacing: -0.2px;
        border: 1px solid #09f;

        transition:
            background 160ms ease,
            color 160ms ease,
            transform 160ms ease;
    }

    .sort_chip:hover {
        background: rgba(255, 255, 255, 0.06);
    }

    .sort_chip.active {
        background: #09f;
        color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);
    }

    .sort_chip:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.35);
    }

    .sort_arrow {
        margin-left: 6px;
        font-weight: 900;
        opacity: 0.85;
    }

    .write_btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;

        padding: 11px 14px;
        border-radius: 12px;
        background: #09f;
        color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 7px 16px rgba(0, 0, 0, 0.28);

        cursor: pointer;
        transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            filter 160ms ease;
        white-space: nowrap;
    }

    .write_btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
        filter: saturate(1.05);
    }

    .write_btn:active {
        transform: translateY(0);
    }

    .write_btn svg {
        font-size: 18px;
    }

    @media (max-width: 560px) {
        .form_top {
            flex-direction: column;
            align-items: stretch;
        }

        .write_btn {
            justify-content: center;
        }
    }
`;

export const QnaWriteForm = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    max-width: 768px;
    background: #fff;
    padding: 12px 0px 0px 0px;

    .post_title {
        margin: 0 auto;
        width: 100%;
        text-align: center;

        h1 {
            font-size: clamp(18px, 2vw, 20px);
        }
    }

    .qna_write {
        margin: 0 auto;
        margin-top: 30px;
        padding: 0 16px;
        width: 100%;
        border-width: 1px;

        form {
            width: 100%;
            display: flex;
            flex-direction: column;

            .nickname {
                padding: 0 16px;
                font-size: clamp(14px, 1.5vw, 16px);
            }

            .qna_cardForm {
                position: relative;
                border-radius: 12px;
                border-width: 1px;
                padding: 16px 16px 20px 16px;

                .title {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    align-items: center;
                    border-bottom: 1px solid #dedede;

                    .q {
                        display: inline-flex;
                        align-items: center;
                        margin-right: 12px;
                        font-size: clamp(20px, 2vw, 22px);

                        svg {
                            width: 26px;
                            height: 100%;
                            color: #08f;
                        }
                    }

                    input {
                        order: 0;
                        width: calc(100% - 42px);
                        padding: 12px 6px;
                    }

                    .number_check {
                        font-size: clamp(12px, 1vw, 13px);
                        --text-opacity: 1;
                        color: #b6becc;
                        color: rgba(182, 190, 204, var(--text-opacity));
                        min-width: 57px;
                    }
                }

                .desc {
                    margin: 20px auto;
                    min-height: 260px;
                    padding: 12px;
                    border-bottom: 1px solid #dedede;

                    textarea {
                        min-height: 260px;
                        width: 100%;
                        resize: none;
                        outline: none;
                        border: 0;
                        line-height: 1.5;
                    }
                }

                .file_input {
                    width: 100%;
                    height: 46px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: #218832;
                    .file_label {
                        width: 100%;
                        height: 100%;
                        p {
                            display: inline-flex;
                            width: 100%;
                            height: 100%;
                            align-items: center;
                            justify-content: center;
                            color: #fefefe;
                            cursor: pointer;
                            gap: 4px;
                            font-size: clamp(14px, 1.5vw, 16px);

                            span {
                                display: inline-flex;
                                align-items: center;
                                justify-content: center;
                                width: 24px;
                                height: 24px;
                                svg {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }

                .submit {
                    margin-top: 12px;
                    width: 100%;
                    height: 46px;
                    background: #181818;
                    color: #fefefe;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        margin-top: 0px;
        min-height: 100vh;

        .qna_write {
            width: 100%;
            form {
                .qna_cardForm {
                    padding: 0px;

                    .title {
                        width: 100%;

                        .number_check {
                            min-width: 57px;
                        }

                        .q {
                            svg {
                                width: 23px;
                            }
                        }
                    }
                }
            }
        }
    }
`;
