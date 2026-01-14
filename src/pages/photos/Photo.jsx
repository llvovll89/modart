import React, {useEffect, useState} from "react";
import {PhotoInfoContainer, PhotoContents, PhotoWrap} from "./styles/index";
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../../store/reducers/photoSlice";
import {useFilterState} from "../../hooks/useFilterState";
import {AiFillCamera} from "react-icons/ai";
import {useScrollToTop} from "../../hooks/useScrollToTop";
import {PhotoList} from "./contents/list/PhotoList";
import {useModalState} from "../../hooks/useModalState";
import {Modal} from "../../components/common/Modal";

const Photo = () => {
    const user = useSelector((state) => state.login.user);
    const dispatch = useDispatch();
    const {sortType, sortOrder, handleSortClick} = useFilterState();
    const {isOpen, handleOpen, handleClose} = useModalState();

    const handleWriteClick = () => {
        if (user) {
            return navigate("/photo/write");
        } else {
            handleOpen();
            return null;
        }
    };

    useScrollToTop();

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    return (
        <PhotoWrap>
            <PhotoInfoContainer>
                <div className="info">
                    <div className="title">
                        <h1>포토톡</h1>
                        <span>(Photo Talk)</span>
                    </div>

                    <div className="desc">
                        <p>🔥 사진으로 소통하는 공간입니다</p>
                        <p>📸 나만의 감각적인 사진을 공유해보세요.</p>
                        <p>
                            🌟 다양한 주제의 사진을 감상하고, 댓글로
                            소통해보세요.
                        </p>
                    </div>
                </div>
            </PhotoInfoContainer>
            <PhotoContents>
                <div className="form_top">
                    <ul>
                        <li onClick={() => handleSortClick("recent")}>
                            날짜 순
                            {sortType === "recent" &&
                                (sortOrder === "desc" ? " ↓" : " ↑")}
                        </li>
                    </ul>

                    <button className="write_btn" onClick={handleWriteClick}>
                        <AiFillCamera />
                        <span>포토 작성하기</span>
                    </button>
                </div>

                <PhotoList sortType={sortType} sortOrder={sortOrder} />
            </PhotoContents>

            {isOpen && (
                <Modal
                    type="경고"
                    title="로그인 필요"
                    description="포토 작성은 로그인 후에 가능합니다."
                    isCancel={true}
                    isConfirm={true}
                    handleClose={handleClose}
                />
            )}
        </PhotoWrap>
    );
};

export default Photo;
