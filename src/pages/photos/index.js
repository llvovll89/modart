import styled from "styled-components";

const PhotoContainer = styled.div`
    margin: auto;
    width: 100%;
    height: 16rem;
    background: #88e3ac;
    overflow: hidden;

    .contents {
        margin: auto;
        color: #181818;
        display: flex;
        max-width: 768px;
        height: 100%;
        padding: 0 16px;

        .text {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 6px;

            p {
                color: #FEFEFE;
                font-size: clamp(20px, 2.5vw, 26px);
            }

            span {
                color: #FEFEFE;
                font-weight: 600;
                font-size: clamp(18px, 2vw, 20px);
            }

            .link-btn {
                margin-top: 20px;
                background: #181818;
                border-radius: 4px;
                color: #FEFEFE;
                padding: 12px 20px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.16);
            }
        }

        .image {
            width: 100%;

            svg {
                width: 100%;
                height: 100%;
                color: #FEFEFE;
            }
        }
    }

    @media screen and (max-width: 768px) {
    }
`

export {
    PhotoContainer
}