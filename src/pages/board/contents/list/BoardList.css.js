import styled from "styled-components";

const BoardListContainer = styled.ul`
    padding: 0;
    list-style: none;

    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 6px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }

    .board_card {
        cursor: pointer;
        border-radius: 6px;
        overflow: hidden;
        outline: none;

        background: #181818;
        box-shadow:
            rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
            rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.892);

        transform: translateY(0);
        transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
    }

    .board_card:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.35);
    }

    .media {
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1;
        background: rgba(0, 0, 0, 0.22);
        overflow: hidden;
    }

    .media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transform: scale(1);
        transition: transform 220ms ease;
    }

    .board_card:hover .media img {
        transform: scale(1.03);
    }

    .badges {
        position: absolute;
        left: 12px;
        top: 12px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        z-index: 2;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;

        padding: 7px 10px;
        border-radius: 999px;

        font-size: 12px;
        line-height: 1;
        font-weight: 700;
        letter-spacing: -0.2px;

        color: rgba(255, 255, 255, 0.92);
        background: rgba(0, 0, 0, 0.45);
        border: 1px solid rgba(255, 255, 255, 0.14);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .badge.like svg {
        font-size: 15px;
    }

    .badge.comment {
        color: rgba(255, 255, 255, 0.88);
        background: rgba(17, 24, 39, 0.55);
    }

    .items {
        padding: 14px 14px 16px;
        display: grid;
        gap: 10px;
    }

    .board_title {
        margin: 0;
        font-size: 15px;
        font-weight: 800;
        letter-spacing: -0.3px;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        min-height: calc(1.35em * 2);
        line-height: 1.35;
    }

    .meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }

    .meta_left,
    .meta_right {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
    }

    .item_brand {
        font-size: 12px;
        font-weight: 800;
        padding: 6px 10px;
        border-radius: 999px;
        color: rgba(255, 255, 255, 0.86);
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(99, 102, 241, 0.22);
        white-space: nowrap;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .item_nickname {
        font-size: 12px;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.78);
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .dot {
        color: rgba(255, 255, 255, 0.35);
    }

    .item_date {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.55);
        white-space: nowrap;
    }
`;

export {BoardListContainer};
