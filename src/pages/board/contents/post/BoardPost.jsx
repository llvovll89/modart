import React, {useEffect, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AiOutlineFileAdd} from "react-icons/ai";
import {createData} from "../../../../store/reducers/boardSlice";
import {
    PostActions,
    PostCard,
    PostForm,
    PostHeader,
    PostWrap,
    UploadBox,
} from "./BoardPost.css";

const BoardPost = () => {
    const user = useSelector((state) => state.login.user);
    const nickName = user?.nickname ?? "";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputRef = useRef(null);

    const [addData, setAddData] = useState({
        title: "",
        brand: "",
        height: "",
        weight: "",
        desc: "",
        photo: null,
    });

    const [previewUrl, setPreviewUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const avatarLetter = useMemo(() => {
        const s = String(nickName || "U").trim();
        return s ? s[0].toUpperCase() : "U";
    }, [nickName]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (!addData.photo) {
            setPreviewUrl("");
            return;
        }

        const url = URL.createObjectURL(addData.photo);
        setPreviewUrl(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [addData.photo]);

    const onChangeHandler = (e) => {
        const {name, value, files} = e.target;

        if (name === "photo") {
            const file = files?.[0] ?? null;
            setAddData((prev) => ({...prev, photo: file}));
            return;
        }

        setAddData((prev) => ({...prev, [name]: value}));
    };

    const canSubmit =
        addData.title.trim().length > 0 &&
        addData.brand.trim().length > 0 &&
        addData.desc.trim().length > 0 &&
        !isSubmitting;

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!user) {
            alert("로그인 후 작성할 수 있습니다.");
            return;
        }

        if (!canSubmit) {
            alert("제목/브랜드/내용은 필수 입력입니다.");
            return;
        }

        try {
            setIsSubmitting(true);
            const payload = {...addData, nickname: nickName};
            await dispatch(createData(payload)).unwrap();
            alert("게시글이 성공적으로 등록되었습니다.");
            navigate(-1);
        } catch (error) {
            console.log(error);
            alert("게시글 등록에 실패하였습니다.");
        } finally {
            setIsSubmitting(false);
        }
    };

    console.log(user);

    return (
        <PostWrap>
            <PostCard>
                <PostHeader>
                    <div className="top">
                        <div>
                            <h1>데일리룩 (OOTD)</h1>
                            <div className="sub">
                                오늘의 스타일을 기록해보세요. (사진 + 간단한
                                정보)
                            </div>
                        </div>

                        <div className="user" title={nickName || "Guest"}>
                            <span className="avatar">
                                <img src={user.profileImg} alt="유저 아바타" />
                            </span>
                            <span>{nickName || "로그인 필요"}</span>
                        </div>
                    </div>
                </PostHeader>

                <PostForm
                    onSubmit={onSubmitHandler}
                    encType="multipart/form-data"
                >
                    <div className="panel">
                        <div className="grid">
                            <div className="field">
                                <label htmlFor="title">제목 *</label>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="예) 오늘은 올블랙으로"
                                    autoComplete="off"
                                    value={addData.title}
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <div className="row2">
                                <div className="field">
                                    <label htmlFor="brand">브랜드 *</label>
                                    <input
                                        type="text"
                                        name="brand"
                                        id="brand"
                                        placeholder="예) 나이키"
                                        autoComplete="off"
                                        value={addData.brand}
                                        onChange={onChangeHandler}
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="height">신장</label>
                                    <input
                                        type="text"
                                        name="height"
                                        id="height"
                                        placeholder="예) 175"
                                        autoComplete="off"
                                        value={addData.height}
                                        onChange={onChangeHandler}
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="weight">몸무게</label>
                                    <input
                                        type="text"
                                        name="weight"
                                        id="weight"
                                        placeholder="예) 68"
                                        autoComplete="off"
                                        value={addData.weight}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="desc">내용 *</label>
                                <textarea
                                    name="desc"
                                    id="desc"
                                    placeholder="코디 포인트, 사이즈 팁, 오늘의 무드 등…"
                                    value={addData.desc}
                                    onChange={onChangeHandler}
                                />
                                <div className="helper">
                                    * 필수: 제목/브랜드/내용 (사진은 선택)
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel">
                        <UploadBox>
                            <div className="drop">
                                <div className="preview">
                                    {previewUrl ? (
                                        <img
                                            src={previewUrl}
                                            alt="업로드 미리보기"
                                        />
                                    ) : (
                                        <div className="empty">
                                            사진을 업로드하면
                                            <br />
                                            미리보기가 표시됩니다.
                                        </div>
                                    )}
                                </div>

                                <div className="uploadRow">
                                    <div
                                        className="fileName"
                                        title={addData.photo?.name || ""}
                                    >
                                        {addData.photo?.name ||
                                            "선택된 파일 없음"}
                                    </div>

                                    <div>
                                        <input
                                            type="file"
                                            id="photo"
                                            name="photo"
                                            accept="image/*"
                                            style={{display: "none"}}
                                            onChange={onChangeHandler}
                                        />
                                        <label
                                            htmlFor="photo"
                                            className="fileBtn"
                                        >
                                            <AiOutlineFileAdd />
                                            사진 올리기
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </UploadBox>
                    </div>

                    {/* 폼 아래 액션 영역(버튼) */}
                    <div style={{gridColumn: "1 / -1"}}>
                        <PostActions>
                            <button
                                type="button"
                                className="btn secondary"
                                onClick={() => navigate(-1)}
                                disabled={isSubmitting}
                            >
                                취소
                            </button>

                            <button
                                type="submit"
                                className="btn primary"
                                disabled={!canSubmit}
                            >
                                {isSubmitting ? "게시 중..." : "게시하기"}
                            </button>
                        </PostActions>
                    </div>
                </PostForm>
            </PostCard>
        </PostWrap>
    );
};

export default BoardPost;
