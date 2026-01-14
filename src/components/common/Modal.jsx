import styled from "styled-components";
import {
    CiWarning,
    CiCircleInfo,
    CiCircleCheck,
    CiNoWaitingSign,
} from "react-icons/ci";
import {fadeIn} from "../../styles/animation";

const ModalContainer = styled.article`
    position: fixed;
    width: 100vw;
    height: 100dvh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    user-select: none;

    .modal {
        background-color: #fff;
        padding: 1rem;
        border-radius: 8px;
        width: 325px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        animation: ${fadeIn} 0.3s ease-in-out;

        .top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 600;

            h2 {
                &.warning {
                    color: #f39c12;
                }
                &.info {
                    color: #3498db;
                }
                &.success {
                    color: #2ecc71;
                }
                &.error {
                    color: #e74c3c;
                }

                font-size: clamp(0.9rem, 2vw, 1.25rem);

                display: flex;
                align-items: center;
                gap: 0.15rem;

                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }

        .contents {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0.5rem 0.25rem;
            max-height: 150x;
            overflow-y: auto;

            p {
                font-size: clamp(0.7rem, 2vw, 0.85rem);
            }
        }

        .btn_container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;

            button {
                padding: 0.5rem 1rem;
                min-width: 90px;
                transition: all 0.2s ease-in-out;
                border-radius: 4px;
                font-size: clamp(0.75rem, 2vw, 0.9rem);

                &.cancel_btn {
                    border: 1px solid #ccc;

                    &:hover {
                        background-color: #f5f7f8;
                    }
                }

                &.confirm_btn {
                    background-color: #09f;
                    color: #fff;

                    &:hover {
                        background-color: #0077cc;
                    }
                }
            }
        }
    }

    @media (max-width: 400px) {
        .modal {
            width: 90%;
            padding: 0.75rem;
        }
    }
`;

export const Modal = ({
    type,
    title,
    description,
    isConfirm,
    onConfirm,
    isCancel,
    handleClose,
}) => {
    const convertTypeToClass = () => {
        switch (type) {
            case "경고":
                return {
                    type: "warning",
                    icon: <CiWarning size={24} />,
                };
            case "정보":
                return {
                    type: "info",
                    icon: <CiCircleInfo size={24} />,
                };
            case "성공":
                return {
                    type: "success",
                    icon: <CiCircleCheck size={24} />,
                };
            case "오류":
                return {
                    type: "error",
                    icon: <CiNoWaitingSign size={24} />,
                };
            default:
                return "";
        }
    };

    return (
        <ModalContainer>
            <div className="modal">
                <div className="top">
                    <h2 className={convertTypeToClass().type}>
                        <span>{convertTypeToClass().icon}</span>
                        {type}
                    </h2>
                    <button onClick={handleClose} className="close_modal">
                        <img
                            src={
                                import.meta.env.VITE_PUBLIC_URL +
                                "/images/icons/dark/d_close.svg"
                            }
                        />
                    </button>
                </div>

                <div className="contents">
                    <p>{title}</p>
                    <p>{description}</p>
                </div>

                <div className="btn_container">
                    {isCancel && (
                        <button onClick={handleClose} className="cancel_btn">
                            취소
                        </button>
                    )}
                    {isConfirm && (
                        <button onClick={onConfirm} className="confirm_btn">
                            확인
                        </button>
                    )}
                </div>
            </div>
        </ModalContainer>
    );
};
