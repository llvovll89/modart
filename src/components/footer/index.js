import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    margin: 0 auto;

    /* 은은한 배경 + 상단 구분선 */
    background: linear-gradient(
        180deg,
        rgba(248, 250, 252, 0) 0%,
        rgba(248, 250, 252, 0.85) 35%,
        rgba(255, 255, 255, 0.95) 100%
    );
    border-top: 1px solid rgba(15, 23, 42, 0.08);

    color: rgba(15, 23, 42, 0.75);
    line-height: 1.55;

    .inner {
        width: min(1100px, 100%);
        margin: 0 auto;
        padding: 18px 16px 22px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        font-size: clamp(11px, 1.8vw, 13px);
        letter-spacing: -0.1px;
    }

    .top {
        padding-bottom: 10px;
        border-bottom: 1px dashed rgba(15, 23, 42, 0.1);
    }

    .copy {
        font-weight: 900;
        color: rgba(15, 23, 42, 0.82);
        white-space: nowrap;
    }

    .meta {
        font-weight: 700;
        color: rgba(15, 23, 42, 0.62);
        text-align: right;
    }

    .bottom {
        user-select: none;
        color: rgba(15, 23, 42, 0.58);
        font-weight: 700;
    }

    @media (max-width: 640px) {
        .row {
            flex-direction: column;
            align-items: flex-start;
        }

        .copy {
            white-space: normal;
        }

        .meta {
            text-align: left;
        }
    }
`;
