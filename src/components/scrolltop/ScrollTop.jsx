import {useEffect, useState} from "react";
import {HiArrowNarrowUp} from "react-icons/hi";
import styled from "styled-components";

const ScrollTopStyles = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: rgba(0, 0, 0, 0.14) 1px 3px 4px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    background: #fff;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s linear;
    font-size: clamp(0.75rem, 2vw, 1rem);

    opacity: ${({$visible}) => ($visible ? 1 : 0)};
    pointer-events: ${({$visible}) => ($visible ? "auto" : "none")};

    &:hover {
        color: #fff;
        background-color: rgb(76, 176, 242);
    }

    @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
        bottom: 0.75rem;
        right: 0.75rem;
    }
`;

export const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 52);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ScrollTopStyles
            $visible={visible}
            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
            aria-label="Scroll to top"
        >
            <HiArrowNarrowUp />
        </ScrollTopStyles>
    );
};
