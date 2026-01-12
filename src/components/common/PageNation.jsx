import styled from "styled-components";

export const PageNationContainer = styled.div`
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: clamp(10px, 1.2vw, 14px);
    gap: 0.5rem;

    button {
        padding: 6px 12px;
        border: 1px solid #ddd;
    }

    .page_btn {
        &.active {
            background-color: #09f;
            color: #fff;
        }
    }

    .page_btn_list {
        display: flex;
        gap: 0.5rem;
    }

    .total_btn {
        pointer-events: none;
        font-size: clamp(10px, 1.2vw, 14px);
    }
`;

const PageNation = ({currentPage, totalPages, goToPage, getPageNumbers}) => {
    return (
        <PageNationContainer>
            <div className="page_btn_list">
                {getPageNumbers().map((page, index) => {
                    if (page === "ellipsis") {
                        return (
                            <span key={index} className="ellipsis">
                                ...
                            </span>
                        );
                    }

                    return (
                        <button
                            key={page}
                            className={`page_btn ${
                                page === currentPage ? "active" : ""
                            }`}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            <button className="total_btn">총 {totalPages} 페이지</button>
        </PageNationContainer>
    );
};

export default PageNation;
