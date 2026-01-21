import styled from "styled-components";

export const QnaFormWrap = styled.section`
    --bg: #f6f8ff;
    --card: rgba(255, 255, 255, 0.86);
    --border: rgba(15, 23, 42, 0.08);
    --text: rgba(15, 23, 42, 0.92);
    --muted: rgba(15, 23, 42, 0.58);
    --primary: #3b82f6;

    min-height: calc(100dvh - 52px);
    padding: 72px 16px 40px;

    .wrap {
        max-width: 860px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 4px;
    }

    .badge {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.96);
        background: linear-gradient(135deg, #2563eb, #60a5fa);
        box-shadow: 0 14px 26px rgba(37, 99, 235, 0.22);

        svg {
            width: 22px;
            height: 22px;
        }
    }

    .headText {
        min-width: 0;

        h1 {
            margin: 0;
            font-size: clamp(18px, 2.2vw, 22px);
            color: var(--text);
            letter-spacing: -0.3px;
        }

        p {
            margin: 6px 0 0;
            color: var(--muted);
            font-weight: 700;
            font-size: 13px;
            letter-spacing: -0.1px;
        }
    }

    .card {
        border: 1px solid var(--border);
        border-radius: 18px;
        background: var(--card);
        box-shadow: 0 18px 50px rgba(2, 6, 23, 0.08);
        overflow: hidden;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        padding: 18px;
    }

    .who {
        display: grid;
        grid-template-columns: 80px 1fr;
        gap: 10px;
        align-items: center;
        padding: 10px 12px;
        border: 1px solid rgba(15, 23, 42, 0.06);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.55);
        margin-bottom: 14px;

        .label {
            font-weight: 900;
            font-size: 12px;
            color: rgba(15, 23, 42, 0.62);
        }

        .value {
            font-weight: 900;
            color: rgba(15, 23, 42, 0.82);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 14px;
    }

    .fieldLabel {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;

        font-weight: 900;
        color: rgba(15, 23, 42, 0.84);
        font-size: 13px;
    }

    .counter {
        font-weight: 900;
        font-size: 12px;
        color: rgba(15, 23, 42, 0.5);

        &.danger {
            color: rgba(220, 38, 38, 0.9);
        }
    }

    .input,
    .textarea {
        width: 100%;
        border-radius: 14px;
        border: 1px solid rgba(15, 23, 42, 0.1);
        background: rgba(248, 250, 252, 0.9);
        padding: 12px 12px;
        font-size: 14px;
        color: rgba(15, 23, 42, 0.86);
        outline: none;

        transition:
            border-color 160ms ease,
            box-shadow 160ms ease,
            transform 160ms ease;

        &:focus {
            border-color: rgba(59, 130, 246, 0.35);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.14);
        }
    }

    .textarea {
        min-height: 170px;
        resize: vertical;
        line-height: 1.65;
        white-space: pre-wrap;
    }

    .hint {
        font-size: 12px;
        font-weight: 700;
        color: rgba(15, 23, 42, 0.55);
        padding-left: 2px;
    }

    .file {
        display: none;
    }

    .fileList {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .fileListTop {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        .fileCount {
            font-weight: 900;
            font-size: 12px;
            color: rgba(15, 23, 42, 0.6);
        }
    }

    .drop {
        display: grid;
        grid-template-columns: 44px 1fr;
        gap: 10px;
        align-items: center;
        padding: 12px;
        border-radius: 14px;
        border: 1px dashed rgba(15, 23, 42, 0.18);
        background: rgba(255, 255, 255, 0.55);
        cursor: pointer;
        user-select: none;

        transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            border-color 160ms ease,
            background 160ms ease;

        &:hover {
            transform: translateY(-1px);
            border-color: rgba(59, 130, 246, 0.28);
            box-shadow: 0 14px 28px rgba(2, 6, 23, 0.08);
            background: rgba(255, 255, 255, 0.7);
        }

        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.22);
        }
    }

    .dropIcon {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.18);
        color: rgba(37, 99, 235, 0.9);

        svg {
            width: 22px;
            height: 22px;
        }
    }

    .dropText {
        min-width: 0;

        .main {
            font-weight: 900;
            color: rgba(15, 23, 42, 0.84);
        }

        .sub {
            margin-top: 2px;
            font-size: 12px;
            font-weight: 700;
            color: rgba(15, 23, 42, 0.55);
        }
    }

    .fileRow {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        padding: 10px 12px;
        border: 1px solid rgba(15, 23, 42, 0.06);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.55);
    }

    .fileName {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 800;
        color: rgba(15, 23, 42, 0.74);
        font-size: 13px;
    }

    .ghost {
        border: 1px solid rgba(15, 23, 42, 0.1);
        background: rgba(255, 255, 255, 0.65);
        border-radius: 12px;
        padding: 8px 10px;
        font-weight: 900;
        color: rgba(15, 23, 42, 0.72);
        cursor: pointer;

        &:hover {
            border-color: rgba(59, 130, 246, 0.22);
        }
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 6px;
    }

    .btn {
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid rgba(15, 23, 42, 0.1);
        background: rgba(255, 255, 255, 0.7);
        color: rgba(15, 23, 42, 0.82);
        font-weight: 900;
        font-size: 13px;
        cursor: pointer;

        transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            border-color 160ms ease;

        &:hover {
            transform: translateY(-1px);
            border-color: rgba(59, 130, 246, 0.22);
            box-shadow: 0 14px 28px rgba(2, 6, 23, 0.08);
        }

        &:disabled {
            opacity: 0.55;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
    }

    .btn.primary {
        border-color: rgba(59, 130, 246, 0.25);
        background: linear-gradient(135deg, #2563eb, #60a5fa);
        color: rgba(255, 255, 255, 0.96);
        box-shadow: 0 14px 28px rgba(37, 99, 235, 0.22);
    }

    .previewGrid {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;
    }

    .previewItem {
        position: relative;
        border-radius: 14px;
        overflow: hidden;
        width: 85px;
        border: 1px solid rgba(15, 23, 42, 0.08);
        background: rgba(255, 255, 255, 0.6);
        aspect-ratio: 1 / 1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            vertical-align: top;
            display: block;
        }
    }

    .previewRemove {
        position: absolute;
        top: 4px;
        right: 4px;
        border-radius: 12px;
        padding: 2px 4px;
        border: 1px solid rgba(15, 23, 42, 0.12);
        background: rgba(255, 255, 255, 0.78);
        color: rgba(15, 23, 42, 0.78);
        font-weight: 900;
        font-size: clamp(10px, 1.2vw, 12px);
        cursor: pointer;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        &:hover {
            border-color: rgba(239, 68, 68, 0.22);
            background: rgba(239, 68, 68, 0.08);
            color: rgba(185, 28, 28, 0.92);
        }
    }

    @media (max-width: 640px) {
        padding: 64px 12px 32px;

        .card {
            padding: 14px;
        }

        .who {
            grid-template-columns: 64px 1fr;
        }

        .actions .btn {
            flex: 1 1 auto;
        }

        .previewGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
`;
