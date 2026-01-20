import styled from "styled-components";

export const PostWrap = styled.section`
    width: 100%;
    min-height: calc(100dvh - 52px);
    padding: 62px 1rem;
    display: flex;
    justify-content: center;
    background: #f5f7f8;
`;

export const PostCard = styled.div`
    width: min(768px, 100%);
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.77);
    background: #181818;
    overflow: hidden;
    backdrop-filter: blur(12px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
    -webkit-backdrop-filter: blur(12px);
    user-select: none;
`;

export const PostHeader = styled.header`
    padding: 20px 20px 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    .top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
    }

    h1 {
        margin: 0;
        font-size: 24px;
        letter-spacing: -0.6px;
        color: rgba(255, 255, 255, 0.94);
    }

    .sub {
        margin-top: 6px;
        font-size: 13px;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.65);
    }

    .user {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.22);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.85);
        font-size: 12px;
        font-weight: 700;
        white-space: nowrap;
    }

    .avatar {
        width: 26px;
        height: 26px;
        border-radius: 999px;
        overflow: hidden;
    }
`;

export const PostForm = styled.form`
    padding: 18px 20px 20px;

    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 16px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }

    .panel {
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(0, 0, 0, 0.18);
        padding: 14px;
    }

    .grid {
        display: grid;
        gap: 12px;
    }

    .row2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;

        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }
    }

    .field label {
        display: block;
        margin-bottom: 6px;
        font-size: 12px;
        font-weight: 800;
        color: rgba(255, 255, 255, 0.78);
        letter-spacing: -0.2px;
    }

    .field input,
    .field textarea {
        width: 100%;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.04);
        color: rgba(255, 255, 255, 0.92);
        border: 1px solid #cecece1b;

        padding: 11px 12px;
        outline: none;

        transition:
            border-color 160ms ease,
            box-shadow 160ms ease,
            background 160ms ease;
    }

    .field input::placeholder,
    .field textarea::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }

    .field input:focus,
    .field textarea:focus {
        border-color: rgba(0, 153, 255, 0.67);
        background: rgba(255, 255, 255, 0.16);
    }

    .field textarea {
        min-height: 180px;
        resize: none;
        line-height: 1.55;
    }

    .helper {
        margin-top: 6px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.55);
    }
`;

export const UploadBox = styled.div`
    display: grid;
    gap: 12px;

    .drop {
        border-radius: 16px;
        border: 1px dashed rgba(255, 255, 255, 0.18);
        background: rgba(255, 255, 255, 0.04);
        padding: 12px;
    }

    .preview {
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 14px;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .empty {
        height: 100%;
        display: grid;
        place-items: center;
        color: rgba(255, 255, 255, 0.55);
        font-size: 13px;
        padding: 14px;
        text-align: center;
        line-height: 1.45;
    }

    .uploadRow {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-top: 10px;
    }

    .fileName {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.62);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 60%;
    }

    .fileBtn {
        display: inline-flex;
        align-items: center;
        gap: 8px;

        padding: 10px 12px;
        border-radius: 12px;
        cursor: pointer;

        color: rgba(255, 255, 255, 0.92);
        background: rgba(0, 0, 0, 0.26);
        border: 1px solid rgba(255, 255, 255, 0.12);
        font-size: clamp(12px, 2.5vw, 14px);

        transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease;
        user-select: none;
        white-space: nowrap;
    }

    .fileBtn:hover {
        transform: translateY(-1px);
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(255, 255, 255, 0.18);
    }

    .fileBtn svg {
        font-size: 18px;
    }
`;

export const PostActions = styled.div`
    padding: 14px 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: flex-end;
    gap: 10px;

    .btn {
        border: 0;
        cursor: pointer;
        border-radius: 12px;
        padding: 11px 14px;
        font-weight: 900;
        letter-spacing: -0.2px;
        transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            opacity 160ms ease,
            background 160ms ease;
    }

    .btn:active {
        transform: translateY(0);
    }

    .btn.secondary {
        color: rgba(255, 255, 255, 0.86);
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
    }

    .btn.secondary:hover {
        background: rgba(255, 255, 255, 0.08);
    }

    .btn.primary {
        color: rgba(255, 255, 255, 0.95);
        background: linear-gradient(135deg, #6366f1 0%, #10b981 100%);
        box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
    }

    .btn.primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 18px 46px rgba(0, 0, 0, 0.35);
    }

    .btn[disabled] {
        opacity: 0.55;
        cursor: not-allowed;
        box-shadow: none;
        transform: none;
    }
`;
