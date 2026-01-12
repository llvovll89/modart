import {useEffect, useMemo, useRef, useState} from "react";
import {Section} from "../../../../styles/RecycleStyles";
import {intervalTitle} from "./mock/title";
import {Main_container} from "./Main.css";
import {useCheckedDesktop} from "../../../../hooks/useCheckedDesktop";

const Main = () => {
    const [idx, setIdx] = useState(0);
    const current = useMemo(() => intervalTitle[idx], [idx]);
    const textWrapRef = useRef(null);

    useEffect(() => {
        const id = window.setInterval(() => {
            setIdx((prev) => (prev + 1) % intervalTitle.length);
        }, 2000);

        return () => window.clearInterval(id);
    }, []);

    useEffect(() => {
        const el = textWrapRef.current;
        if (!el) return;

        // 접근성: 모션 줄이기 설정이면 애니메이션 생략
        const reduceMotion = window.matchMedia?.(
            "(prefers-reduced-motion: reduce)"
        )?.matches;
        if (reduceMotion) return;

        el.animate(
            [
                {opacity: 0, transform: "translateY(10px)"},
                {opacity: 1, transform: "translateY(0px)"},
            ],
            {duration: 450, easing: "ease-out", fill: "both"}
        );
    }, [idx]);

    const renderTitle = (title) => {
        if (title.startsWith("모드아트")) {
            return (
                <>
                    <span className="indent">모드아트</span>
                    {title.slice("모드아트".length)}
                </>
            );
        }
        if (title.startsWith("Modart")) {
            return (
                <>
                    <span className="indent">Modart</span>
                    {title.slice("Modart".length)}
                </>
            );
        }
        return title;
    };

    return (
        <Section>
            <Main_container>
                {/* <img
                    src={`${
                        import.meta.env.VITE_PUBLIC_URL
                    }/images/main/main.jpg`}
                    alt="main img"
                    className="main_bg"
                /> */}

                <div className="contents">
                    <div className="items">
                        <div className="overview">
                            <div ref={textWrapRef}>
                                <h1>{renderTitle(current.title)}</h1>
                                <p className="sub_text">{current.subText}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile_subItems">
                    <span>
                        일상에 예술을 더하다, <strong>모드아트</strong>
                    </span>
                    <span>Modart, adding art to your daily life</span>
                </div>

                <a className="continue" href="#daily_look_list">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 94"
                        className="page_down_icon"
                    >
                        <path
                            stroke="#000"
                            d="m4 79 11 11 11-11M15 90V4"
                        ></path>
                    </svg>

                    <div className="desc">
                        Click or Scroll <span>to continue</span>
                    </div>
                </a>
            </Main_container>
        </Section>
    );
};

export default Main;
