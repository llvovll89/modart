import styled from "styled-components";

const BoardWrap = styled.section`
    width: 100%;
    min-height: calc(100vh - 52px);
    background-color: #f5f7f8;
    padding: 52px 0 0 0;
    display: flex;

    @media screen and (max-width: 768px) {
        gap: 1rem;
    }
`;

const BoardContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 1rem 1rem 1rem;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;

    .form_top {
        margin: 18px 0 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }

    .sort_group {
        display: inline-flex;
        gap: 8px;
        padding: 6px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .sort_chip {
        appearance: none;
        border: 0;
        cursor: pointer;
        border-radius: 999px;
        padding: 10px 12px;
        font-weight: 800;
        font-size: 13px;
        letter-spacing: -0.2px;
        border: 1px solid #09f;

        transition:
            background 160ms ease,
            color 160ms ease,
            transform 160ms ease;
    }

    .sort_chip:hover {
        background: rgba(255, 255, 255, 0.06);
        color: rgba(255, 255, 255, 0.9);
    }

    .sort_chip.active {
        background: #09f;
        color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18);
    }

    .sort_chip:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.35);
    }

    .sort_arrow {
        margin-left: 6px;
        font-weight: 900;
        opacity: 0.85;
    }

    .write_btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;

        padding: 11px 14px;
        border-radius: 12px;
        background: #09f;
        color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 7px 16px rgba(0, 0, 0, 0.28);

        cursor: pointer;
        transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            filter 160ms ease;
        white-space: nowrap;
    }

    .write_btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 46px rgba(0, 0, 0, 0.35);
        filter: saturate(1.05);
    }

    .write_btn:active {
        transform: translateY(0);
    }

    .write_btn svg {
        font-size: 18px;
    }

    @media (max-width: 560px) {
        .form_top {
            flex-direction: column;
            align-items: stretch;
        }

        .write_btn {
            justify-content: center;
        }

        .sort_group {
            justify-content: center;
        }
    }
`;

export {BoardWrap, BoardContents};
