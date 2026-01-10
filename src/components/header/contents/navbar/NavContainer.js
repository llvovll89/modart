import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;

    a,
    span {
        font-size: clamp(0.75rem, 1vw, 0.85rem);
        font-weight: bold;
        transition: all 0.2s ease-in-out;
    }

    .users {
        display: flex;
        align-items: center;
        gap: 12px;
        text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;

        .item {
            min-width: 76px;
            padding: 0 6px;
            text-align: center;

            &.active {
                background-color: rgba(40, 41, 44, 0.04);

                a {
                    color: #000;
                    text-decoration: underline 0.5px;
                    text-underline-offset: 3px;
                }
            }

            &.user_nickname {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                width: 100%;

                img {
                    width: 36px;
                    height: 36px;
                    object-fit: cover;
                    border-radius: 50%;
                }
                a {
                    position: relative;
                }
            }

            a,
            span {
                font-weight: 600;
                letter-spacing: 0.012rem;
                color: #333;
                display: block;
                width: 100%;
                height: 100%;
            }
        }

        .logOut {
            cursor: pointer;

            span {
                position: relative;
                display: block;
                width: 100%;
                height: 100%;

                svg {
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }

    .item_account {
        margin: 0 6px;

        .account {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0px 6px;
        }
    }

    .list {
        display: flex;
        align-items: center;

        .item {
            min-width: 76px;
            padding: 0 6px;
            text-align: center;

            &.active {
                a {
                    color: #09f;
                    transform: scale(1.1);
                    text-decoration: underline 0.5px;
                    text-underline-offset: 3px;
                }
            }

            &:hover {
                background-color: #fefefe;
            }

            &.user_nickname {
                &.active {
                    background: #74b0d7;
                }
                a {
                    position: relative;
                }
            }

            a,
            span {
                display: block;
                width: 100%;
                height: 100%;
                font-weight: bold;
                letter-spacing: 0.012rem;
                color: #333;
                padding: 0 6px;
                text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;
            }
        }
    }

    @media screen and (max-width: 646px) {
        position: fixed;
        display: block;
        top: 0;
        margin-top: 52px;
        right: -50%;
        height: 100vh;
        z-index: 1500;
        background: #fefefe;
        width: 50%;
        transition: all 0.3s linear;

        &.mobile {
            right: 0;
        }

        .list {
            display: block;
            .item {
                padding: 0;
                border-bottom: 1px solid #ebebeb;
                &.active {
                    background-color: rgba(40, 41, 44, 0.04);

                    a {
                        font-weight: 600;
                        color: #000;
                        text-decoration: underline 0.5px;
                        text-underline-offset: 3px;
                    }
                }

                a,
                span {
                    display: block;
                    padding: 6px 16px;
                    letter-spacing: -0.15px;
                    font-weight: 700;
                    text-align: left;
                    text-indent: 6px;

                    &:hover {
                        color: #202124;
                    }
                }
            }
        }

        .users {
            width: 100%;
            border-bottom: 1px solid #ebebeb;

            &.sign {
                .item_account {
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin: 0;

                    .account {
                        display: block;
                        padding: 6px 16px;
                        letter-spacing: 0.78px;
                        font-weight: 700;
                        text-align: left;
                        text-indent: 6px;
                        color: #202124;
                        background: transparent;
                    }
                }
            }

            .item {
                width: 100%;
                &.user_nickname {
                    a {
                        display: block;
                        width: max-content;
                        height: max-content;
                        padding: 0;
                    }
                }
                a,
                span {
                    display: block;
                    padding: 6px 16px;
                    letter-spacing: -0.15px;
                    font-weight: 700;
                    text-indent: 6px;
                    width: 100%;
                    height: 100%;
                }
                &.logOut {
                }
            }
        }
    }
`;
