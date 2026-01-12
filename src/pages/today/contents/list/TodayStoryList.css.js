import styled from "styled-components";

export const TodayListContainer = styled.ul`
display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .card {
        display: flex;
        min-height: 57px;
        gap: 12px;
        cursor: pointer;
        transition: all 0.15s linear;

        &:hover {
            background-color: #f0f8ff;
        }

        .today_type {
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                font-size: clamp(10px, 1.5vw, 13px);
            }
        }

        .img_box {
            img, .no_image {
                width: 85px;
                height: 85px;
                object-fit: cover;
                vertical-align: top;
                cursor: pointer;
                background-color: #f0f0f0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .items {
            padding: 3px 0px;
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;

            .today_title {
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
                .item_category {
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
`;
