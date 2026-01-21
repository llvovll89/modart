import styled from "styled-components";
import {
    CiWarning,
    CiCircleInfo,
    CiCircleCheck,
    CiNoWaitingSign,
} from "react-icons/ci";
import { fadeIn } from "../../styles/animation";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../routes/route/path";
import { useEffect, useId, useMemo } from "react";

const ModalContainer = styled.article`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    user-select: none;
    padding: 16px;

    .modal {
        width: ${({ $size }) =>
        $size === "sm" ? "300px" : $size === "lg" ? "480px" : "360px"};
        max-width: 100%;
        background: #fff;
        border-radius: 14px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
        overflow: hidden;
        animation: ${fadeIn} 0.2s ease-in-out;
        transform-origin: center;

        .top {
            padding: 14px 14px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);

            h2 {
                margin: 0;
                font-size: 1rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 8px;

                span {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    background: ${({ $accent }) => $accent}1A;
                    color: ${({ $accent }) => $accent};
                }
            }

            .close_modal {
                border: 0;
                background: transparent;
                cursor: pointer;
                padding: 6px;
                border-radius: 10px;
                transition: background 0.15s ease;

                &:hover {
                    background: rgba(0, 0, 0, 0.06);
                }

                img {
                    width: 18px;
                    height: 18px;
                    display: block;
                }
            }
        }

        .contents {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            /* ✅ 오타 수정: 150x -> 150px */
            max-height: 220px;
            overflow-y: auto;

            p {
                margin: 0;
                color: rgba(0, 0, 0, 0.78);
                line-height: 1.4;
                font-size: 0.95rem;

                &:first-child {
                    font-weight: 700;
                    color: rgba(0, 0, 0, 0.9);
                }
            }
        }

        .btn_container {
            padding: 12px 14px 14px;
            display: flex;
            justify-content: flex-end;
            gap: 10px;

            button {
                padding: 10px 14px;
                min-width: 92px;
                border-radius: 12px;
                font-size: 0.9rem;
                cursor: pointer;
                transition: transform 0.04s ease, background 0.15s ease,
                    border-color 0.15s ease;

                &:active {
                    transform: translateY(1px);
                }
            }

            .cancel_btn {
                border: 1px solid rgba(0, 0, 0, 0.14);
                background: #fff;

                &:hover {
                    background: rgba(0, 0, 0, 0.03);
                }
            }

            .confirm_btn {
                border: 1px solid ${({ $accent }) => $accent};
                background: ${({ $accent }) => $accent};
                color: #fff;

                &:hover {
                    filter: brightness(0.95);
                }
            }
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
    isLogin = true,
    size = "md", // "sm" | "md" | "lg"
    closeOnOverlay = true,
}) => {
    const navigate = useNavigate();
    const titleId = useId();
    const descId = useId();

    const meta = useMemo(() => {
        switch (type) {
            case "경고":
                return { icon: <CiWarning size={22} />, accent: "#f39c12" };
            case "정보":
                return { icon: <CiCircleInfo size={22} />, accent: "#3498db" };
            case "성공":
                return { icon: <CiCircleCheck size={22} />, accent: "#2ecc71" };
            case "오류":
                return { icon: <CiNoWaitingSign size={22} />, accent: "#e74c3c" };
            default:
                return { icon: <CiCircleInfo size={22} />, accent: "#64748b" };
        }
    }, [type]);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") handleClose?.();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [handleClose]);

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        if (isLogin) navigate(LOGIN);
    };

    return (
        <ModalContainer
            $accent={meta.accent}
            $size={size}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            onMouseDown={() => {
                if (closeOnOverlay) handleClose?.();
            }}
        >
            <div
                className="modal"
                onMouseDown={(e) => {
                    // 오버레이 클릭 닫기 방지
                    e.stopPropagation();
                }}
            >
                <div className="top">
                    <h2 id={titleId}>
                        <span>{meta.icon}</span>
                        {type}
                    </h2>

                    <button
                        type="button"
                        onClick={handleClose}
                        className="close_modal"
                        aria-label="모달 닫기"
                    >
                        <img
                            alt="닫기"
                            src={
                                import.meta.env.VITE_PUBLIC_URL +
                                "/images/icons/dark/d_close.svg"
                            }
                        />
                    </button>
                </div>

                <div className="contents">
                    <p>{title}</p>
                    <p id={descId}>{description}</p>
                </div>

                <div className="btn_container">
                    {isCancel && (
                        <button type="button" onClick={handleClose} className="cancel_btn">
                            취소
                        </button>
                    )}
                    {isConfirm && (
                        <button type="button" onClick={handleConfirm} className="confirm_btn">
                            확인
                        </button>
                    )}
                </div>
            </div>
        </ModalContainer>
    );
};