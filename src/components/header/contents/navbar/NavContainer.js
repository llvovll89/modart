import styled from "styled-components";

export const NavContainer = styled.nav`
    --ink: ${(props) => (props.$isHome ? "#0b0b0c" : "#ffffff")};
    --surface: ${(props) => (props.$isHome ? "#ffffff" : "#0b0b0c")};

    --muted: ${(props) =>
        props.$isHome ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.12)"};

    --hairline: ${(props) =>
        props.$isHome ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.14)"};

    --focus: ${(props) => (props.$isHome ? "rgba(17,17,17,0.85)" : "rgba(255,255,255,0.92)")};

    display: flex;
    align-items: center;
    gap: 10px;

    a {
        color: var(--ink);
        text-decoration: none;
        font-size: clamp(0.78rem, 1vw, 0.92rem);
        font-weight: 650;
        letter-spacing: 0.02em;
        transition: background 160ms ease, color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
    }

    .list {
        display: flex;
        align-items: center;
        gap: 6px;

        .item {
            a {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 36px;
                padding: 0 12px;
                border-radius: 999px;
                background: transparent;
                color: var(--ink);
                position: relative;
            }

            &:hover a {
                background: var(--muted);
                transform: translateY(-1px);
            }

            &.active a {
                /* luxury: clean invert + controlled shadow */
                background: var(--ink);
                color: var(--surface);
                box-shadow: 0 10px 26px rgba(0,0,0,0.18);
                transform: translateY(-1px);
            }

            a:focus-visible {
                outline: 2px solid var(--focus);
                outline-offset: 2px;
            }
        }
    }

    .user_area {
        position: relative;
        display: flex;
        align-items: center;
    }

    .user_link {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        height: 36px;
        padding: 0 10px;
        border-radius: 999px;
        background: transparent;
        color: var(--ink);
        border: 1px solid transparent;
        cursor: pointer;

        transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;

        &:hover {
            background: var(--muted);
            transform: translateY(-1px);
        }

        &:focus-visible {
            outline: 2px solid var(--focus);
            outline-offset: 2px;
        }

        .profileIImg {
            width: 28px;
            height: 28px;
            border-radius: 999px;
            overflow: hidden;
            background: rgba(255,255,255,0.9);
            border: 1px solid var(--hairline);
            flex-shrink: 0;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
        }

        .nickname {
            max-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    @media screen and (max-width: 646px) {
        position: fixed;
        top: 0;
        margin-top: 60px; /* match header height */
        right: -74%;
        height: calc(100dvh - 60px);
        z-index: 1500;

        width: 74%;

        background: ${(props) => (props.$isHome ? "rgba(255,255,255,0.92)" : "rgba(11,11,12,0.82)")};
        color: var(--ink);

        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);

        border-left: 1px solid var(--hairline);
        box-shadow: -18px 0 46px rgba(0,0,0,0.16);
        transition: right 180ms ease;

        &.mobile {
            right: 0;
        }

        .list {
            display: block;
            padding: 10px;

            .item {
                border-bottom: 1px solid var(--hairline);

                a {
                    width: 100%;
                    justify-content: flex-start;
                    height: 50px;
                    padding: 0 12px;
                    border-radius: 14px;
                    background: transparent;
                }

                &.active a {
                    background: var(--muted);
                    color: var(--ink);
                    box-shadow: none;
                }
            }
        }
    }

    @media (prefers-reduced-motion: reduce) {
        a,
        .user_link {
            transition: none;
        }
    }
`;