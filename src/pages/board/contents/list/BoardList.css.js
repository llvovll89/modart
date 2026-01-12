import styled from "styled-components";

const BoardListContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .board_card {
        display: flex;
        min-height: 57px;
        gap: 12px;
        cursor: pointer;
        transition: all 0.15s linear;

        &:hover {
            background-color: #f0f8ff;
        }

        .like {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            min-width: 46px;
            padding: 6px;
            color: #aaa;

            .like_views {
                font-size: clamp(11px, 1.5vw, 13px);
            }
        }

        .board_img {
            img {
                width: 85px;
                height: 85px;
                object-fit: cover;
                vertical-align: top;
                cursor: pointer;
            }
        }

        .items {
            padding: 3px 0px;
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;

            .board_title {
                color: #333;
                font-size: clamp(13px, 2vw, 16px);
                cursor: pointer;
                transition: all 0.15s linear;
                margin-bottom: 4px;
                text-overflow: ellipsis;

                &:hover,
                &:focus {
                    color: #09f;
                    text-decoration: underline 0.5px;
                }
            }

            .item_contents {
                .item_brand,
                .item_views {
                    display: inline-block;
                    color: #686868;
                    font-size: clamp(11px, 1vw, 14px);
                    line-height: 1.5;
                    margin-bottom: 2px;
                    text-overflow: ellipsis;
                }

                .sub_items {
                    margin: 3px 0px;
                    display: flex;
                    gap: 6px;
                    font-size: clamp(11px, 1.2vw, 14px);

                    &:first-child {
                        justify-content: space-between;
                    }
                }
            }
        }

        @media screen and (max-width: 564px) {
            .like {
                padding: 0px;
                min-width: 36px;
            }

            .items {
                width: 100%;
            }
        }
    }
`;

export {BoardListContainer};
