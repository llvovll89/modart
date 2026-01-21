import styled from "styled-components";

export const QnaListContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 6px 2px;
    min-height: calc(100dvh - 52px);

    .no_length_list {
        padding: 20px;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        ${(props) => props.no_length && `
            min-height: calc(100dvh - 200px);
        `}
    }

    /* Skeleton */
    @keyframes qnaShimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }

    .card.skeleton {
        cursor: default;
        user-select: none;
        transform: none !important;
        box-shadow: none !important;
        background: rgba(255, 255, 255, 0.72);
    }

    .card.skeleton:hover {
        transform: none;
        border-color: rgba(15, 23, 42, 0.08);
        box-shadow: none;
        background: rgba(255, 255, 255, 0.72);
    }

    .sk {
        height: 30px;
        border-radius: 999px;
        border: 1px solid rgba(15, 23, 42, 0.06);
        background: linear-gradient(
            90deg,
            rgba(148, 163, 184, 0.18) 0%,
            rgba(148, 163, 184, 0.3) 20%,
            rgba(148, 163, 184, 0.18) 40%
        );
        background-size: 200% 100%;
        animation: qnaShimmer 1.1s ease-in-out infinite;
    }

    .sk-title {
        height: 16px;
        border-radius: 10px;
        align-self: center;
        width: min(520px, 100%);
    }

    .sk-chip {
        justify-self: start;
        width: 72px;
    }

    .sk-sub {
        justify-self: end;
        width: 110px;
    }

    .sk-date {
        justify-self: end;
        width: 78px;
        height: 14px;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        .card.skeleton .sk-chip {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 64px;
            height: 28px;
        }

        .card.skeleton .sk-title {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            width: 100%;
        }

        .card.skeleton .sk-sub {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            justify-self: start;
            width: 96px;
            height: 28px;
        }

        .card.skeleton .sk-date {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            justify-self: end;
            width: 74px;
        }
    }

    .sk_page {
        margin-top: 0.5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: clamp(10px, 1.2vw, 14px);
        gap: 0.5rem;
    }

    .card {
        display: grid;
        grid-template-columns: 90px 1fr 130px 95px;
        align-items: center;
        column-gap: 14px;

        min-height: 64px;
        padding: 12px 14px;

        cursor: pointer;
        user-select: none;

        background: linear-gradient(180deg, #ffffff 0%, #fcfdff 100%);
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 14px;

        transition:
            transform 0.15s ease,
            box-shadow 0.15s ease,
            border-color 0.15s ease,
            background-color 0.15s ease;

        &:hover {
            transform: translateY(-2px);
            border-color: rgba(59, 130, 246, 0.25);
            box-shadow: 0 6px 14px rgba(2, 6, 23, 0.08);
            background: #ffffff;
        }

        &:active {
            transform: translateY(0px);
        }

        &:focus-visible {
            outline: 3px solid rgba(59, 130, 246, 0.35);
            outline-offset: 2px;
        }

        /* ✅ 칩(뱃지) 공통 느낌 */
        .views,
        .sub_contents p {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;

            height: 30px;
            padding: 0 10px;

            border-radius: 999px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: rgba(248, 250, 252, 0.9);

            font-size: 12px;
            font-weight: 600;
            color: rgba(15, 23, 42, 0.75);

            white-space: nowrap;
        }

        .views {
            justify-self: start;
        }

        .views svg {
            color: rgba(37, 99, 235, 0.85);
        }

        .title {
            min-width: 0;
            font-size: 15px;
            font-weight: 700;
            color: rgba(15, 23, 42, 0.92);

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            letter-spacing: -0.2px;
        }

        .sub_contents {
            justify-self: end;
            display: flex;
            gap: 8px;
            align-items: center;

            font-size: 12px;
            color: rgba(15, 23, 42, 0.7);
        }

        .sub_contents .like svg {
            color: rgba(244, 63, 94, 0.9);
        }

        .sub_contents p svg {
            opacity: 0.9;
        }

        .created_at {
            justify-self: end;
            font-size: 12px;
            font-weight: 600;
            color: rgba(15, 23, 42, 0.55);
            white-space: nowrap;
        }

        .img_box {
            img {
                width: 85px;
                height: 85px;
                object-fit: cover;
                vertical-align: top;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 768px) {
        .card {
            grid-template-columns: 70px 1fr;
            grid-template-rows: auto auto;
            row-gap: 10px;
            column-gap: 10px;

            padding: 12px;

            .views {
                grid-column: 1 / 2;
                grid-row: 1 / 2;
                height: 28px;
                font-size: 11px;
                padding: 0 8px;
            }

            .title {
                grid-column: 2 / 3;
                grid-row: 1 / 2;
                font-size: 14px;
            }

            .sub_contents {
                grid-column: 1 / 2;
                grid-row: 2 / 3;
                justify-self: start;
            }

            .created_at {
                grid-column: 2 / 3;
                grid-row: 2 / 3;
                justify-self: end;
            }
        }
    }
`;
