import styled from "styled-components";

export const NoListContainer = styled.div`
    width: 100%;
    min-height: calc(100dvh - 52px);
    padding: 68px 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NoListComponents = () => {
    return (
        <NoListContainer>
            <p>등록된 결과물이 없습니다.</p>
        </NoListContainer>
    );
};
