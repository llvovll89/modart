import styled from "styled-components";

export const PostWrap = styled.section`
    width: 100%;
    min-height: calc(100dvh - 52px);
    padding: 62px 1rem;
    display: flex;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    user-select: none;
`;

export const PostCard = styled.div`
    width: min(868px, 100%);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.77);
    overflow: hidden;
    backdrop-filter: blur(12px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
    -webkit-backdrop-filter: blur(12px);
    user-select: none;
    border: 1px solid rgba(15, 23, 42, 0.08);
`;

export const PostHeader = styled.header`
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    width: min(868px, 100%);

    .top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;

        .title_info {
            display: flex;
            gap: 12px;
        }

        .title {
            display: flex;
            flex-direction: column;
            gap: 4px;
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
    }

    h1 {
        margin: 0;
        font-size: 24px;
        letter-spacing: -0.6px;
    }

    .sub {
        font-size: 13px;
        line-height: 1.4;
    }

    .user {
        display: inline-flex;
        align-items: center;
        margin: auto 0;
        gap: 10px;
        padding: 8px 10px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.17);
        color: #fff;
        background: linear-gradient(135deg, #49f, #0af);
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
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 0.85rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }

    .panel {
        border-radius: 16px;
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
        letter-spacing: -0.2px;
    }

    .field input,
    .field textarea {
        width: 100%;
        border-radius: 12px;
        border: 1px solid rgba(15, 23, 42, 0.1);

        padding: 11px 12px;
        outline: none;

        transition:
            border-color 160ms ease,
            box-shadow 160ms ease,
            background 160ms ease;
    }

    .field input:focus,
    .field textarea:focus {
        border-color: rgba(0, 153, 255, 0.67);
    }

    .field textarea {
        min-height: 180px;
        resize: none;
        line-height: 1.55;
    }

    .helper {
        margin-top: 6px;
        font-size: 12px;
    }
`;

export const UploadBox = styled.div`
    display: grid;
    gap: 12px;

    .drop {
        border-radius: 16px;
        border: 1px dashed rgba(0, 0, 0, 0.58);
        padding: 12px;
    }

    .thumbGrid {
        width: 100%;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.08);

        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        padding: 8px;

        @media (max-width: 560px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    .thumb {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        aspect-ratio: 1 / 1;
        border: 1px solid rgba(0, 0, 0, 0.08);
    }

    .thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .thumbRemove {
        position: absolute;
        right: 6px;
        top: 6px;

        width: 26px;
        height: 26px;
        border-radius: 999px;

        border: 1px solid rgba(0, 0, 0, 0.16);
        background: rgba(0, 0, 0, 0.88);
        color: rgba(255, 255, 255, 0.92);

        cursor: pointer;
        line-height: 1;
        font-weight: 900;

        transition:
            transform 160ms ease,
            background 160ms ease;
    }

    .thumbRemove:hover {
        transform: translateY(-1px);
        background: rgba(0, 0, 0, 0.7);
    }

    .empty {
        grid-column: 1 / -1;
        padding: 14px;
        text-align: center;
        font-size: 13px;
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

        border: 1px solid rgba(0, 0, 0, 0.12);
        font-size: clamp(12px, 1.2vw, 14px);

        transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease;
        user-select: none;
        white-space: nowrap;
    }

    .fileBtn:hover {
        transform: translateY(-1px);
        background: rgba(0, 0, 0, 0.06);
        border-color: rgba(0, 0, 0, 0.18);
    }

    .fileBtn svg {
        font-size: 18px;
    }
`;

export const PostActions = styled.div`
    padding: 14px 20px;

    display: flex;
    justify-content: flex-end;
    gap: 10px;

    .btn {
        border: 0;
        cursor: pointer;
        border-radius: 12px;
        padding: 11px 14px;
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
        border: 1px solid rgba(0, 0, 0, 0.12);
    }

    .btn.primary {
        color: rgba(255, 255, 255, 0.95);
        background: #09f;
        box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
    }

    .btn.primary:hover {
        transform: translateY(-1px);
    }

    .btn[disabled] {
        opacity: 0.55;
        cursor: not-allowed;
        box-shadow: none;
        transform: none;
    }
`;
