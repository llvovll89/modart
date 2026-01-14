import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {PhotoListContainer} from "./PhotoList.css";
import PageNation from "../../../../components/common/PageNation";
import {usePageNation} from "../../../../hooks/usePageNation";
import {useMemo} from "react";

export const PhotoList = ({sortType, sortOrder}) => {
    const photoList = useSelector((state) => state.photo.photos) || null;
    const navigate = useNavigate();

    const detailClick = (photo) => {
        navigate(`/photo/details/${photo.id}`);
    };

    const filteredPhotos = useMemo(() => {
        if (!photoList) return [];
        const copied = [...photoList];

        if (sortType === "recent") {
            return copied.sort((a, b) => {
                const diff =
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime();

                return sortOrder === "desc" ? diff : -diff;
            });
        }

        return copied;
    }, [photoList, sortType, sortOrder]);

    const {currentData, currentPage, totalPages, goToPage, getPageNumbers} =
        usePageNation(filteredPhotos, 8);

    return (
        <>
            <PhotoListContainer>
                {currentData.length > 0 &&
                    currentData.map((photo) => (
                        <li
                            onClick={() => detailClick(photo)}
                            className="card"
                            key={photo.id}
                        >
                            <div className="img_box">
                                {photo.photo ? (
                                    <img src={photo.photo} alt={photo.title} />
                                ) : (
                                    <img
                                        src={NO_IMAGE_URL}
                                        alt="server_error"
                                    />
                                )}
                            </div>
                            <div className="items">
                                <h3 className="photo_title">
                                    {photo.title.length > 30
                                        ? photo.title.substring(0, 30) +
                                          "..." +
                                          (photo.comments &&
                                          photo.comments.length > 0
                                              ? ` (${photo.comments.length})`
                                              : "")
                                        : photo.title +
                                          (photo.comments &&
                                          photo.comments.length > 0
                                              ? ` (${photo.comments.length})`
                                              : "")}
                                </h3>

                                <div className="item_contents">
                                    <span className="item_category">
                                        {photo.category}
                                    </span>
                                    <div className="sub_items">
                                        <span className="item_nickname">
                                            {photo.nickname}
                                        </span>
                                        <span className="item_date">
                                            {photo.createdAt}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
            </PhotoListContainer>

            <PageNation
                currentPage={currentPage}
                totalPages={totalPages}
                goToPage={goToPage}
                getPageNumbers={getPageNumbers}
            />
        </>
    );
};
