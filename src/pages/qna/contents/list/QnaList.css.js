import styled from "styled-components";

export const QnaListContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .card {
        display: flex;
        min-height: 57px;
        gap: 12px;
        cursor: pointer;
        transition: all 0.15s linear;
        align-items: center;

        &:hover {
            background-color: #f0f8ff;
        }

        /* ✅ 고정/자동 사이즈 영역들 */
        .views {
            font-size: clamp(10px, 1.5vw, 12px);
            flex: 0 0 75px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
        }

        .sub_contents {
            display: flex;
            gap: 12px;
            align-items: center;
            font-size: clamp(10px, 1.5vw, 12px);
            color: #555;
            flex: 0 0 80px;
            justify-content: center;

            p {
                display: flex;
                align-items: center;
                gap: 4px;
                white-space: nowrap;
            }
        }

        .created_at {
            font-size: clamp(10px, 1.5vw, 12px);
            color: #777;
            flex: 0 0 75px;
            white-space: nowrap;
        }

        .title {
            flex: 1 1 auto;
            min-width: 0;
            font-size: clamp(14px, 2vw, 16px);
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
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
            gap: 6px;

            .views {
                flex: 0 0 50px;
            }

            .sub_contents {
                flex: 0 0 70px;
                gap: 6px;
            }

            .created_at {
                flex: 0 0 60px;
            }
        }
    }
`;
