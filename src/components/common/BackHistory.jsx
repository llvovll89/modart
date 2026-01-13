import {useNavigate} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import styled from "styled-components";

const BackHistoryContainer = styled.button`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: 1000;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    background-color: #fff;
`;

export const BackHistory = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <BackHistoryContainer onClick={handleBack}>
            <IoIosArrowBack size={24} />
        </BackHistoryContainer>
    );
};
