import React from 'react'
import { FooterContainer } from './index';

const Footer = () => {
  return (
    <FooterContainer>
    <div className="inner">
        <div className="footer_status">
            <div className="top">
            <span>@Copyright llvovll89@github.com</span>
            <span>모든 코드는 llvovll89@github.com 에서 볼 수 있습니다.</span>
            </div>

            <div className="bottom">
            <span>현 웹 사이트를 chrome에 최적화 되어 있습니다.</span>
            <span>responsive를 적용한 웹 사이트 입니다.</span>
            </div>
        </div>
    </div>
    </FooterContainer>
  )
}

export default Footer