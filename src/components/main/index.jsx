import styled from "styled-components";

export const Main_container = styled.main`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    .main_image {
        max-width: 564px;
        width: 100%;
        height: 500px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: middle;
        }
    }
`