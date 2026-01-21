import styled from "styled-components";
import {fadeIn} from "../../styles/animation";

const HeaderContainer = styled.header`
    --w: #ffffff;
    --b: #0b0b0c;

    --bg-home: rgba(255, 255, 255, 0.72);
    --bg-dark: rgba(11, 11, 12, 0.88);

    --text-home: var(--b);
    --text-dark: var(--w);

    --hairline-home: rgba(15, 15, 18, 0.1);
    --hairline-dark: rgba(255, 255, 255, 0.14);

    --shadow-soft: 0 12px 34px rgba(0, 0, 0, 0.12);
    --shadow-crisp: 0 1px 0 rgba(255, 255, 255, 0.06) inset;

    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;

    color: ${(props) =>
        props.$isHome ? "var(--text-home)" : "var(--text-dark)"};
    background: ${(props) =>
        props.$isHome ? "var(--bg-home)" : "var(--bg-dark)"};
    border-bottom: 1px solid
        ${(props) =>
            props.$isHome ? "var(--hairline-home)" : "var(--hairline-dark)"};

    backdrop-filter: saturate(160%) blur(14px);
    -webkit-backdrop-filter: saturate(160%) blur(14px);

    box-shadow: ${(props) =>
        props.$scrolled ? "var(--shadow-soft), var(--shadow-crisp)" : "none"};
    transition:
        background 180ms ease,
        border-color 180ms ease,
        box-shadow 220ms ease;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: ${(props) => (props.$isHome ? 0.22 : 0.18)};
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.42),
            rgba(255, 255, 255, 0) 42%
        );
        mix-blend-mode: overlay;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: 0.06;
        background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.08) 0px,
            rgba(255, 255, 255, 0.08) 1px,
            rgba(0, 0, 0, 0) 2px,
            rgba(0, 0, 0, 0) 6px
        );
        mix-blend-mode: soft-light;
    }

    .contents {
        position: relative;
        margin: 0 auto;
        display: flex;
        padding: 0 2rem;
        height: 60px; /* slightly taller = premium spacing */
        justify-content: space-between;
        align-items: center;
        gap: 12px;

        .logo {
            h1 {
                font-size: clamp(20px, 2.1vw, 28px);
                letter-spacing: 0.12em; /* editorial */
                font-weight: 820; /* luxury */
                cursor: pointer;
                animation: ${fadeIn} 0.4s ease;
                user-select: none;
                text-transform: uppercase;
                line-height: 1;
            }
        }

        .toggle {
            position: relative;
            display: none;
            cursor: pointer;
            width: 36px;
            height: 36px;
            border-radius: 12px;

            transition:
                background 160ms ease,
                transform 160ms ease;
            &:hover {
                background: ${(props) =>
                    props.$isHome
                        ? "rgba(0,0,0,0.06)"
                        : "rgba(255,255,255,0.10)"};
                transform: translateY(-1px);
            }

            .close_icon {
                width: 18px;
                height: 18px;
            }

            .hamburger_icon {
                width: 22px;
                height: 22px;
            }

            svg {
                width: 100%;
                height: 100%;
            }
        }

        @media screen and (max-width: 546px) {
            padding: 0 1rem;
            height: 50px;

            .toggle {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
        .contents .logo h1 {
            animation: none;
        }
        .contents .toggle {
            transition: none;
        }
    }

    .progress_wrap {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background: ${(props) =>
            props.$isHome ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.14)"};
        overflow: hidden;
    }

    .progress_bar {
        height: 100%;
        width: 100%;
        transform-origin: left center;
        will-change: transform;

        background: ${(props) =>
            props.$isHome
                ? "linear-gradient(90deg, #0b0b0c 0%, rgba(11,11,12,0.55) 100%)"
                : "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)"};
        box-shadow: ${(props) =>
            props.$isHome
                ? "0 0 12px rgba(0,0,0,0.18)"
                : "0 0 12px rgba(255,255,255,0.18)"};

        transition: transform 80ms linear;
    }

    @media (prefers-reduced-motion: reduce) {
        .progress_bar {
            transition: none;
        }
    }
`;

export {HeaderContainer};
