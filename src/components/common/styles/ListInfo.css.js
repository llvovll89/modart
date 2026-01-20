import styled from "styled-components";

export const ListInfoContainer = styled.article`
    width: 100%;
    display: grid;
    gap: 12px;

    border-radius: 18px;
    overflow: hidden;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    user-select: none;

    color: rgba(255, 255, 255, 0.92);
    font-size: clamp(0.82rem, 1.2vw, 0.95rem);

    .top {
        display: grid;
        gap: 10px;
        padding: 14px 14px 0;
    }

    .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        user-select: none;

        padding: 10px 12px;
        border-radius: 14px;

        background: rgba(0, 0, 0, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .user_left {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
    }

    .user_img,
    .not_user_img {
        width: 34px;
        height: 34px;
        border-radius: 999px;
        overflow: hidden;
        flex: 0 0 auto;
        display: grid;
        place-items: center;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.06);
    }

    .user_img img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* fill -> cover 로 자연스럽게 */
        display: block;
    }

    .user_name {
        font-weight: 900;
        letter-spacing: -0.2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 220px;
    }

    .meta_right {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: rgba(255, 255, 255, 0.62);
        font-size: 12px;
        white-space: nowrap;
    }

    .imgBox {
        position: relative;
        width: 100%;
        border-radius: 16px;
        overflow: hidden;

        aspect-ratio: 1 / 1;
        background: rgba(0, 0, 0, 0.22);
        border: 1px solid rgba(255, 255, 255, 0.08);
        outline: none;
        cursor: grab;
    }

    .imgBox:focus-visible {
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.28);
    }

    .imgBox.dragging {
        cursor: grabbing;
    }

    .carousel {
        position: relative;
        width: 100%;
        height: 100%;
        touch-action: pan-y;
    }

    .carousel_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transform: scale(1);
        transition: transform 220ms ease;
        -webkit-user-drag: none;
        user-select: none;
    }

    .imgBox:hover .carousel_img {
        transform: scale(1.02);
    }

    .carousel_empty {
        height: 100%;
        display: grid;
        place-items: center;
        color: rgba(255, 255, 255, 0.6);
        font-size: 13px;
        padding: 16px;
        text-align: center;
    }

    .nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;

        width: 38px;
        height: 38px;
        border-radius: 999px;

        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(0, 0, 0, 0.45);
        color: rgba(255, 255, 255, 0.92);

        cursor: pointer;
        font-weight: 900;
        line-height: 1;
        display: grid;
        place-items: center;

        transition:
            transform 160ms ease,
            background 160ms ease;
    }

    .nav:hover {
        transform: translateY(-50%) scale(1.03);
        background: rgba(0, 0, 0, 0.6);
    }

    .nav.prev {
        left: 10px;
    }

    .nav.next {
        right: 10px;
    }

    .dots {
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
        z-index: 3;

        display: inline-flex;
        align-items: center;
        gap: 6px;

        padding: 6px 8px;
        border-radius: 999px;

        background: rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .dots .dot {
        width: 7px;
        height: 7px;
        border-radius: 999px;
        border: 0;
        cursor: pointer;

        background: rgba(255, 255, 255, 0.35);
        transition:
            transform 160ms ease,
            background 160ms ease;
    }

    .dots .dot.active {
        background: rgba(255, 255, 255, 0.9);
        transform: scale(1.15);
    }

    .body_spec {
        position: absolute;
        left: 12px;
        top: 12px;
        z-index: 2;

        font-size: 12px;
        font-weight: 800;
        letter-spacing: -0.2px;

        padding: 7px 10px;
        border-radius: 999px;

        color: rgba(255, 255, 255, 0.92);
        background: rgba(0, 0, 0, 0.45);
        border: 1px solid rgba(255, 255, 255, 0.14);

        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .edit_btn_container {
        display: flex;
        align-items: center;
        gap: 8px;
        position: absolute;
        top: 14px;
        right: 14px;
        padding: 7px 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: -0.2px;
        z-index: 10;
        color: rgba(255, 255, 255, 0.92);
        background: rgba(0, 0, 0, 0.45);
        border: 1px solid rgba(255, 255, 255, 0.14);

        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        button {
            border: 0;
            background: none;
            color: rgba(255, 255, 255, 0.92);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: -0.2px;
            transition: text-decoration 160ms ease;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .brand_area {
        padding: 0 14px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .brand {
        display: inline-flex;
        align-items: center;
        gap: 8px;

        padding: 7px 10px;
        border-radius: 999px;

        font-size: 12px;
        font-weight: 900;
        color: rgba(255, 255, 255, 0.86);

        background: rgba(99, 102, 241, 0.14);
        border: 1px solid rgba(99, 102, 241, 0.22);

        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .bottom {
        padding: 0 14px 14px;
        display: grid;
        gap: 10px;
        user-select: none;
    }

    .btnbox {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .icon_btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;

        border-radius: 12px;
        cursor: pointer;

        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);

        transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease;

        &.liked {
            background: rgba(255, 255, 255, 0.36);
            pointer-events: none;
        }
    }

    .icon_btn:hover {
        transform: translateY(-1px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.18);
    }

    .like_comments {
        display: flex;
        align-items: center;
        gap: 10px;

        font-size: 13px;
        color: rgba(255, 255, 255, 0.72);
    }

    .like_comments strong {
        color: rgba(255, 255, 255, 0.92);
        font-weight: 900;
    }

    .desc {
        margin: 0;
        padding-top: 2px;
        color: rgba(255, 255, 255, 0.86);
        line-height: 1.6;
        white-space: pre-wrap;
    }

    .date {
        margin: 0;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.55);
    }
`;
