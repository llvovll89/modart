import React, {useCallback, useEffect, useState} from "react";
import {Section} from "../../styles/RecycleStyles";
import {Main_container} from ".";
import MainImage from "../../assets/images/main_poster.png";
import CameraImg from "../../assets/images/camera.png";
import QuestionImg from "../../assets/images/question.png";

const Main = () => {
    return (
        <Section>
            <Main_container>
                <div className="contents">
                    <div className="items">
                        <div className="overview">
                            <h1>
                                <span className="indent">모드아트</span>는
                                하루의 스트레스를 해소하는 공간을 제공합니다.
                            </h1>
                            <p className="sub_text">
                                다양한 사람들과의 소통을 통해 하루를 마무리
                                해보세요.
                            </p>
                            <a href="#today_list" className="continue_btn">
                                계속보기
                            </a>
                        </div>
                    </div>
                    <div className="main_img">
                        <img src={MainImage} alt="Main-poster.." />
                    </div>
                </div>
            </Main_container>
        </Section>
    );
};

export default Main;
