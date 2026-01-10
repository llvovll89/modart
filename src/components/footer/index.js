import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    min-height: 120px;
    margin: 0 auto;
    color: #333;
    line-height: 1.5;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .top,
    .bottom {
        display: flex;
        flex-direction: column;
        font-size: clamp(11px, 2vw, 13px);
    }

    .bottom {
        user-select: none;
    }
`;
