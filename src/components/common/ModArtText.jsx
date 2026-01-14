import styled from "styled-components";

const SvgContainer = styled.svg`
    position: absolute;
    width: clamp(25rem, 35vw, 40rem);
    height: clamp(25rem, 35vw, 40rem);
    z-index: 0;
    pointer-events: none;
    aspect-ratio: 1 / 1;

    &.right {
        right: -15%;
        transform: rotateZ(300deg);
    }

    &.left {
        left: -15%;
        transform: rotateZ(120deg);
    }

    .cls-1 {
        stroke: #4b403d;
        opacity: 0.19;
    }

    .cls-2 {
        stroke: #ffffff;
        opacity: 0.19;
    }

    .cls-3 {
        stroke: #ffffff;
    }

    .cls-1,
    .cls-2,
    .cls-3 {
        fill: none;
        font-family: Pretendard, sans-serif;
        font-size: 133.76px;
        font-weight: 800;
    }

    .cls-4 {
        letter-spacing: -0.02em;
    }

    .cls-5 {
        letter-spacing: -0.02em;
    }

    .cls-6 {
        letter-spacing: -0.06em;
    }

    @media (max-width: 768px) {
        width: 60vw;
        height: 60vw;

        &.left {
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%) rotateZ(0deg);
        }

        &.right {
            display: none;
        }
    }
`;

export const ModArtText = ({className}) => {
    return (
        <SvgContainer
            className={className}
            id="_레이어_1"
            data-name="레이어 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 578.59 285"
        >
            <text className="cls-2" transform="translate(.5 126.51)">
                <tspan className="cls-4" x="0" y="0">
                    MO
                </tspan>
                <tspan className="cls-6" x="218.57" y="0">
                    D
                </tspan>
                <tspan className="cls-5" x="305.25" y="0">
                    ART
                </tspan>
            </text>

            <text className="cls-1" transform="translate(.5 155.3)">
                <tspan className="cls-4" x="0" y="0">
                    MO
                </tspan>
                <tspan className="cls-6" x="218.57" y="0">
                    D
                </tspan>
                <tspan className="cls-5" x="305.25" y="0">
                    ART
                </tspan>
            </text>

            <text className="cls-2" transform="translate(.5 212.9)">
                <tspan className="cls-4" x="0" y="0">
                    MO
                </tspan>
                <tspan className="cls-6" x="218.57" y="0">
                    D
                </tspan>
                <tspan className="cls-5" x="305.25" y="0">
                    ART
                </tspan>
            </text>

            <text className="cls-2" transform="translate(.5 241.69)">
                <tspan className="cls-4" x="0" y="0">
                    MO
                </tspan>
                <tspan className="cls-6" x="218.57" y="0">
                    D
                </tspan>
                <tspan className="cls-5" x="305.25" y="0">
                    ART
                </tspan>
            </text>

            <text className="cls-3" transform="translate(.5 184.1)">
                <tspan className="cls-4" x="0" y="0">
                    MO
                </tspan>
                <tspan className="cls-6" x="218.57" y="0">
                    D
                </tspan>
                <tspan className="cls-5" x="305.25" y="0">
                    ART
                </tspan>
            </text>
        </SvgContainer>
    );
};
