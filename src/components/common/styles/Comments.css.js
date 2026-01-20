import styled from "styled-components";

export const CommentContainer = styled.section`
    width: 100%;
    display: grid;
    gap: 12px;

    padding: 14px;
    border-radius: 18px;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    .comment_form {
        display: grid;
        gap: 10px;
        padding: 12px;
        border-radius: 16px;

        background: rgba(0, 0, 0, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }

    .profile_contents {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
    }

    .profileImg {
        width: 34px;
        height: 34px;
        border-radius: 999px;
        overflow: hidden;
        flex: 0 0 auto;

        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.06);

        display: grid;
        place-items: center;
        font-weight: 900;
        color: rgba(255, 255, 255, 0.9);
        letter-spacing: -0.2px;
    }

    .profileImg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .nickname {
        margin: 0;
        font-size: 13px;
        font-weight: 900;
        color: rgba(255, 255, 255, 0.9);
        letter-spacing: -0.2px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 220px;
    }

    .submit_btn {
        border: 0;
        cursor: pointer;

        padding: 10px 12px;
        border-radius: 12px;

        color: rgba(255, 255, 255, 0.95);
        font-weight: 900;
        letter-spacing: -0.2px;

        background: #09f;
        box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);

        transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            opacity 160ms ease;
        white-space: nowrap;
    }

    .submit_btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 18px 46px rgba(0, 0, 0, 0.35);
    }

    .submit_btn:active {
        transform: translateY(0);
    }

    .submit_btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }

    .form textarea {
        width: 100%;
        min-height: 92px;
        resize: none;

        border-radius: 14px;
        padding: 12px;

        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.04);
        color: rgba(255, 255, 255, 0.92);
        outline: none;

        line-height: 1.6;

        transition:
            border-color 160ms ease,
            box-shadow 160ms ease,
            background 160ms ease;
    }

    .form textarea::placeholder {
        color: rgba(255, 255, 255, 0.45);
    }

    .form textarea:focus {
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(255, 255, 255, 0.2);
    }
`;

export const CommentList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    display: grid;
    gap: 10px;

    .comment_item {
        padding: 12px;
        border-radius: 16px;

        background: rgba(0, 0, 0, 0.16);
        border: 1px solid rgba(255, 255, 255, 0.08);

        transition:
            border-color 160ms ease,
            background 160ms ease;
    }

    .comment_item:hover {
        background: rgba(0, 0, 0, 0.2);
        border-color: rgba(255, 255, 255, 0.12);
    }

    .profile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 8px;
    }

    .users {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
    }

    .profile_img {
        width: 30px;
        height: 30px;
        border-radius: 999px;
        overflow: hidden;
        flex: 0 0 auto;

        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.06);
    }

    .profile_img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .no_image {
        width: 100%;
        height: 100%;
        background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.4),
            rgba(16, 185, 129, 0.25)
        );
    }

    .author {
        font-size: 13px;
        font-weight: 900;
        color: rgba(255, 255, 255, 0.9);

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 220px;
    }

    .comment_date {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.55);
        white-space: nowrap;
    }

    .comment_desc {
        margin: 0;
        color: rgba(255, 255, 255, 0.86);
        line-height: 1.6;
        white-space: pre-wrap;
        word-break: break-word;
        font-size: clamp(13px, 1.4vw, 15px);
    }
`;
