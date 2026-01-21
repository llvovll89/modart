import React from "react";
import {FooterContainer} from "./index";
import {useNotRender} from "../../hooks/useNotRender";

const Footer = () => {
    if (useNotRender()) return null;

    return (
        <FooterContainer>
            <div className="inner">
                <div className="row top">
                    <span className="copy">
                        © 2026 ModArt. All rights reserved.
                    </span>
                    <span className="meta">
                        만든이: 김건호 | E-mail 문의: svvvs5579@naver.com
                    </span>
                </div>

                <div className="row bottom">
                    <span>본 웹사이트는 Chrome에 최적화되어 있습니다.</span>
                    <span>반응형(Responsive) 웹사이트입니다.</span>
                </div>
            </div>
        </FooterContainer>
    );
};

export default Footer;
