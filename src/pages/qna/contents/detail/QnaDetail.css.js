import styled from "styled-components";

export const QnaDetailContainer = styled.section`
    --bg: #f6f8ff;
    --card: rgba(255, 255, 255, 0.86);
    --border: rgba(15, 23, 42, 0.08);
    --text: rgba(15, 23, 42, 0.92);
    --muted: rgba(15, 23, 42, 0.58);
    --primary: #3b82f6;

    user-select: none;

    min-height: calc(100dvh - 52px);
    padding: 72px 16px 40px;

    .wrap {
        max-width: 980px;
        margin: 0 auto;
    }

    .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 14px;
    }

    .back {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid var(--border);
        background: rgba(255, 255, 255, 0.55);
        color: rgba(15, 23, 42, 0.78);
        text-decoration: none;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            border-color 160ms ease;

        &:hover {
            transform: translateY(-1px);
            border-color: rgba(59, 130, 246, 0.25);
            box-shadow: 0 12px 28px rgba(2, 6, 23, 0.08);
        }

        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.28);
        }
    }

    .card {
        border: 1px solid var(--border);
        border-radius: 18px;
        background: var(--card);
        box-shadow: 0 12px 24px rgba(2, 6, 23, 0.08);
        overflow: hidden;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }

    .cardHeader {
        padding: 18px 18px 14px;
        border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.75) 0%,
            rgba(255, 255, 255, 0.45) 100%
        );
    }

    .titleRow {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-bottom: 12px;
        align-items: center;

        .title {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 1 1 auto;

            h1 {
                max-width: calc(100% - 44px);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }

    .qBadge {
        flex: 0 0 auto;
        width: 34px;
        height: 34px;
        border-radius: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        color: rgba(255, 255, 255, 0.96);
        background: linear-gradient(135deg, #2563eb, #60a5fa);
        user-select: none;
    }

    h1 {
        margin: 0;
        font-size: clamp(16px, 2.2vw, 22px);
        letter-spacing: -0.3px;
        color: var(--text);
        word-break: break-word;
        max-width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
    }

    .author {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        min-width: 240px;
    }

    .avatar {
        width: 38px;
        height: 38px;
        border-radius: 999px;
        overflow: hidden;
        border: 1px solid rgba(15, 23, 42, 0.08);
        background: rgba(15, 23, 42, 0.03);

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            vertical-align: middle;
        }
    }

    .authorName {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;

        .name {
            font-weight: 800;
            color: rgba(15, 23, 42, 0.86);
            font-size: 13px;
        }

        .date {
            color: var(--muted);
            font-size: clamp(11px, 1.2vw, 12px);
        }
    }

    .chips {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin-left: auto;
    }

    .chip {
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
        font-weight: 800;
        color: rgba(15, 23, 42, 0.74);
        white-space: nowrap;

        svg {
            opacity: 0.9;
        }
    }

    .chip.primary {
        border-color: rgba(59, 130, 246, 0.22);
        background: rgba(59, 130, 246, 0.08);
        color: rgba(37, 99, 235, 0.92);
    }

    .cardBody {
        padding: 18px;
        min-height: 120px;
        color: rgba(15, 23, 42, 0.86);
    }

    .desc {
        margin: 0;
        font-size: clamp(14px, 1.6vw, 16px);
        line-height: 1.7;
        letter-spacing: -0.2px;
        white-space: pre-wrap;
        word-break: break-word;
    }

    .cardFooter {
        padding: 14px 18px 18px;
        border-top: 1px solid rgba(15, 23, 42, 0.06);
        background: rgba(255, 255, 255, 0.5);
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 12px;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid rgba(15, 23, 42, 0.1);
        background: rgba(255, 255, 255, 0.7);
        color: rgba(15, 23, 42, 0.82);
        font-weight: 800;
        font-size: 13px;

        cursor: pointer;
        transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            border-color 160ms ease,
            background 160ms ease;

        &:hover {
            transform: translateY(-1px);
            border-color: rgba(59, 130, 246, 0.22);
            box-shadow: 0 12px 26px rgba(2, 6, 23, 0.08);
        }

        &:active {
            transform: translateY(0);
        }

        &:disabled {
            opacity: 0.55;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.28);
        }

        &.btnSecondary {
            border-color: #09f;
        }
    }

    .btnPrimary {
        border-color: rgba(59, 130, 246, 0.25);
        background: #09f;
        color: rgba(255, 255, 255, 0.96);
        box-shadow: 0 12px 26px rgba(37, 99, 235, 0.22);
    }

    .btnDanger {
        border-color: rgba(239, 68, 68, 0.22);
        background: rgba(239, 68, 68, 0.08);
        color: rgba(185, 28, 28, 0.92);
    }

    .commentBox {
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 14px;
        padding: 12px;
        background: rgba(255, 255, 255, 0.65);
    }

    .commentTop {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 1rem;
    }

    .me {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;

        img {
            width: 30px;
            height: 30px;
            border-radius: 999px;
            object-fit: cover;
            border: 1px solid rgba(15, 23, 42, 0.08);
        }

        span {
            font-weight: 800;
            font-size: 13px;
            color: rgba(15, 23, 42, 0.78);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    textarea {
        width: 100%;
        height: 110px;
        resize: none;
        padding: 12px;
        border-radius: 12px;
        border: 1px solid rgba(15, 23, 42, 0.1);
        outline: none;
        background: rgba(248, 250, 252, 0.85);
        font-size: 13px;
        line-height: 1.6;

        &:focus {
            border-color: rgba(59, 130, 246, 0.35);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.14);
        }
    }

    .commentList {
        margin-top: 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .commentItem {
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 14px;
        padding: 12px;
        background: rgba(255, 255, 255, 0.7);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .commentHead {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 8px;
    }

    .commentAuthor {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;

        img {
            width: 28px;
            height: 28px;
            border-radius: 999px;
            object-fit: cover;
            border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .name {
            font-weight: 700;
            font-size: 13px;
        }

        .date {
            font-size: clamp(11px, 1.2vw, 12px);
            white-space: nowrap;
            color: var(--muted);
        }
    }

    .commentText {
        margin: 0;
        white-space: pre-wrap;
        word-break: break-word;
        font-size: 13px;
        line-height: 1.65;
        color: rgba(15, 23, 42, 0.82);
    }

    .editInput {
        width: 100%;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid rgba(15, 23, 42, 0.12);
        background: rgba(248, 250, 252, 0.9);
        outline: none;

        &:focus {
            border-color: rgba(59, 130, 246, 0.35);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.14);
        }
    }

    .commentBtns {
        margin-top: 10px;
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        flex-wrap: wrap;
    }

    .empty {
        padding: 30px 18px;
        text-align: center;
        color: rgba(15, 23, 42, 0.65);

        .title {
            font-weight: 900;
            color: rgba(15, 23, 42, 0.84);
            margin-bottom: 8px;
        }
    }

    @media (max-width: 640px) {
        padding: 64px 12px 32px;

        .cardHeader,
        .cardBody,
        .cardFooter {
            padding-left: 14px;
            padding-right: 14px;
        }

        .chips {
            justify-content: flex-start;
            margin-left: 0;
        }

        .actions {
            justify-content: stretch;
        }

        .btn {
            flex: 1 1 auto;
        }
    }
`;
