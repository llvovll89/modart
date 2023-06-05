import styled from 'styled-components';

export const FooterContainer = styled.footer`
@font-face {
  font-family: 'Chosunilbo_myungjo';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

  width: 100%;
  min-height: 80px;
  height: auto;
  margin: 0 auto;
  color: #333;
  line-height: 1.5;
  padding: 40px 15px 15px;
  text-align: center;
  font-family: 'Chosunilbo_myungjo';

  .inner {
    position: relative;
    clear: both;
    display: block;
    *zoom: 1;
    letter-spacing: 0.03em;

    .top, .bottom {
        display: flex;
        flex-direction: column;
        padding: 6px 0px 0px;
        font-size: clamp(11px, 2vw, 13px);
    }
  }

  @media screen and (max-width: 768px) {
    line-height: 1.3;
  }
`;
