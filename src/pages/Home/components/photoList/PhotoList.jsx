import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getPhotos} from "../../../../store/reducers/photoSlice";
import {AiOutlinePlus, AiOutlineArrowUp} from "react-icons/ai";
import {PhotoListContainer, PhotoListWrap} from "./styles/PhotoList.css";
import {Card} from "../../../../styles/RecycleStyles";
import {useCollapse} from "../../hooks/useCollapse";

const PhotoList = () => {
    const allPhotoList = useSelector((state) => state.photo.photos);
    const dispatch = useDispatch();

    const {
        handleCollapse,
        handleLoadMore,
        collapsed,
        visibleCount,
        filteredList,
    } = useCollapse({elementId: "photo_list", list: allPhotoList});

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    return (
        <PhotoListWrap id="photo_list">
            <PhotoListContainer>
                <div className="title">
                    <h1>포토톡</h1>
                    <span>(Photo Talk)</span>
                </div>

                <div className="desc">
                    <p>🔥 사진으로 소통하는 공간입니다</p>
                    <p>📸 나만의 감각적인 사진을 공유해보세요.</p>
                    <p>
                        🌟 다양한 주제의 사진을 감상하고, 댓글로 소통해보세요.
                    </p>
                </div>

                <div className="contents">
                    {filteredList.length > 0 && (
                        <>
                            {filteredList
                                .slice(0, visibleCount)
                                .map((photo) => (
                                    <Card key={photo.id} className="photo_card">
                                        <Link
                                            to={`photo/details/${photo.id}`}
                                        />

                                        <div className="top">
                                            <img
                                                src={photo.photo}
                                                alt="photo"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="bottom">
                                            <div className="board_info_top">
                                                <p className="photo_nickname">
                                                    {photo.nickname}
                                                </p>
                                                <p className="photo_category">{`${photo.category}`}</p>
                                            </div>

                                            <div className="board_info_bottom">
                                                <p className="photo_title">
                                                    {photo.title}
                                                </p>
                                                <p className="photo_desc">
                                                    {photo.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                        </>
                    )}
                </div>

                {filteredList.length > 4 && (
                    <div className="visible">
                        {collapsed ? (
                            <button onClick={handleCollapse}>
                                <span className="closed">
                                    <AiOutlineArrowUp />
                                </span>
                            </button>
                        ) : (
                            <button onClick={handleLoadMore}>
                                <span>
                                    <AiOutlinePlus />
                                </span>
                            </button>
                        )}
                    </div>
                )}
            </PhotoListContainer>
        </PhotoListWrap>
    );
};

export default PhotoList;
