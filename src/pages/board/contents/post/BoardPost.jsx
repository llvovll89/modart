import React, {useEffect, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AiOutlineFileAdd} from "react-icons/ai";
import {createData, updateBoard} from "../../../../store/reducers/boardSlice";
import {
    PostActions,
    PostCard,
    PostForm,
    PostHeader,
    PostWrap,
    UploadBox,
} from "./BoardPost.css";

const BoardPost = ({mode = "create", boardId = null, initialBoard = null}) => {
    const user = useSelector((state) => state.login.user);
    const nickName = user?.nickname ?? "";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputRef = useRef(null);
    const didInitRef = useRef(false);

    const [addData, setAddData] = useState({
        title: "",
        brand: [],
        height: "",
        weight: "",
        desc: "",
        photos: [], // create 시 업로드할 File[]
        recommendedUsers: [],
    });

    // ✅ edit: 기존 photos(URL) 유지 목록 + 새로 추가한 File[] 분리
    const [keepPhotos, setKeepPhotos] = useState([]); // string[]
    const [newPhotos, setNewPhotos] = useState([]); // File[]

    const [brandInput, setBrandInput] = useState("");
    const [previewUrls, setPreviewUrls] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (mode !== "edit") return;
        if (!initialBoard) return;
        if (didInitRef.current) return;

        didInitRef.current = true;

        setAddData((prev) => ({
            ...prev,
            title: initialBoard.title || "",
            brand: Array.isArray(initialBoard.brand)
                ? initialBoard.brand.filter(Boolean)
                : String(initialBoard.brand || "")
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
            height: initialBoard.height || "",
            weight: initialBoard.weight || "",
            desc: initialBoard.desc || "",
        }));

        setKeepPhotos(
            Array.isArray(initialBoard.photos)
                ? initialBoard.photos.filter(Boolean)
                : initialBoard.photo
                  ? [initialBoard.photo]
                  : [],
        );
    }, [mode, initialBoard]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // ✅ 프리뷰: edit이면 keepPhotos(URL) + newPhotos(File) 합쳐서 보여주기
    useEffect(() => {
        const fileUrls =
            newPhotos.length > 0
                ? newPhotos.map((f) => URL.createObjectURL(f))
                : [];

        const urls = [...keepPhotos, ...fileUrls];
        setPreviewUrls(urls);

        return () => {
            fileUrls.forEach((u) => URL.revokeObjectURL(u));
        };
    }, [keepPhotos, newPhotos]);

    const removePhotoAt = (index) => {
        // previewUrls 기준: 앞쪽이 keepPhotos, 뒤쪽이 newPhotos
        if (index < keepPhotos.length) {
            setKeepPhotos((prev) => prev.filter((_, i) => i !== index));
            return;
        }
        const fileIndex = index - keepPhotos.length;
        setNewPhotos((prev) => prev.filter((_, i) => i !== fileIndex));
    };

    const onChangeHandler = (e) => {
        const {name, value, files} = e.target;

        if (name === "photos") {
            const list = Array.from(files || []);
            if (list.length === 0) return;

            if (mode === "edit") {
                setNewPhotos((prev) => {
                    const merged = [...prev, ...list];
                    const unique = Array.from(
                        new Map(
                            merged.map((f) => [
                                `${f.name}-${f.size}-${f.lastModified}`,
                                f,
                            ]),
                        ).values(),
                    );
                    return unique;
                });
            } else {
                setAddData((prev) => {
                    const merged = [...prev.photos, ...list];
                    const unique = Array.from(
                        new Map(
                            merged.map((f) => [
                                `${f.name}-${f.size}-${f.lastModified}`,
                                f,
                            ]),
                        ).values(),
                    );
                    return {...prev, photos: unique};
                });
            }

            e.target.value = "";
            return;
        }

        if (name === "brandInput") {
            setBrandInput(value);
            return;
        }

        setAddData((prev) => ({...prev, [name]: value}));
    };

    const addBrandsFromText = (text) => {
        const next = String(text || "")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);

        if (next.length === 0) return;

        setAddData((prev) => {
            const merged = [...prev.brand, ...next];
            const unique = Array.from(
                new Map(merged.map((b) => [b.toLowerCase(), b])).values(),
            );
            return {...prev, brand: unique};
        });
    };

    const onBrandKeyDown = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addBrandsFromText(brandInput);
            setBrandInput("");
        }
    };

    const onBrandBlur = () => {
        if (brandInput.trim()) {
            addBrandsFromText(brandInput);
            setBrandInput("");
        }
    };

    const canSubmit =
        addData.title.trim().length > 0 &&
        addData.brand.length > 0 &&
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

            if (mode === "edit") {
                await dispatch(
                    updateBoard({
                        boardId,
                        updates: {
                            title: addData.title,
                            brand: addData.brand,
                            height: addData.height,
                            weight: addData.weight,
                            desc: addData.desc,
                        },
                        keepPhotos,
                        newPhotos,
                    }),
                ).unwrap();

                alert("게시글이 수정되었습니다.");
                navigate(-1);
                return;
            }

            const payload = {
                ...addData,
                nickname: nickName,
                photo: addData.photos?.[0] ?? null,
            };

            await dispatch(createData(payload)).unwrap();
            alert("게시글이 성공적으로 등록되었습니다.");
            navigate(-1);
        } catch (error) {
            console.log(error);
            alert(typeof error === "string" ? error : "처리에 실패했습니다.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const removeBrand = (brandToRemove) => {
        setAddData((prev) => ({
            ...prev,
            brand: prev.brand.filter((b) => b !== brandToRemove),
        }));
    };

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
                            <span className="avatar" aria-hidden="true">
                                {user?.profileImg ? (
                                    <img
                                        src={user.profileImg}
                                        alt="유저 아바타"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "999px",
                                        }}
                                    />
                                ) : (
                                    avatarLetter
                                )}
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
                                    <label htmlFor="brandInput">
                                        브랜드 * (Enter/콤마로 추가)
                                    </label>
                                    <input
                                        type="text"
                                        name="brandInput"
                                        id="brandInput"
                                        placeholder="예) 나이키, 아디다스"
                                        autoComplete="off"
                                        value={brandInput}
                                        onChange={onChangeHandler}
                                        onKeyDown={onBrandKeyDown}
                                        onBlur={onBrandBlur}
                                    />

                                    {addData.brand.length > 0 && (
                                        <div
                                            style={{
                                                marginTop: 8,
                                                display: "flex",
                                                gap: 8,
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            {addData.brand.map((b) => (
                                                <button
                                                    key={b}
                                                    type="button"
                                                    onClick={() =>
                                                        removeBrand(b)
                                                    }
                                                    style={{
                                                        padding: "6px 10px",
                                                        borderRadius: 999,
                                                        border: "1px solid rgba(255,255,255,0.12)",
                                                        background:
                                                            "rgba(255,255,255,0.06)",
                                                        color: "rgba(255,255,255,0.9)",
                                                        cursor: "pointer",
                                                        fontSize: 12,
                                                        fontWeight: 800,
                                                    }}
                                                    aria-label={`브랜드 삭제: ${b}`}
                                                    title="클릭해서 삭제"
                                                >
                                                    {b} ×
                                                </button>
                                            ))}
                                        </div>
                                    )}
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
                                    * 필수: 제목/브랜드/내용 (사진은 선택, 여러
                                    장 가능)
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel">
                        <UploadBox>
                            <div className="drop">
                                <div
                                    className="thumbGrid"
                                    aria-label="업로드 이미지 미리보기"
                                >
                                    {previewUrls.length > 0 ? (
                                        previewUrls.map((url, idx) => (
                                            <div className="thumb" key={url}>
                                                <img
                                                    src={url}
                                                    alt={`미리보기 ${idx + 1}`}
                                                />
                                                <button
                                                    type="button"
                                                    className="thumbRemove"
                                                    onClick={() =>
                                                        removePhotoAt(idx)
                                                    }
                                                    aria-label={`이미지 삭제 ${idx + 1}`}
                                                    title="삭제"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="empty">
                                            사진을 업로드하면 미리보기가
                                            표시됩니다.
                                            <br />
                                            (여러 장 선택 가능)
                                        </div>
                                    )}
                                </div>

                                <div className="uploadRow">
                                    <div
                                        className="fileName"
                                        title={addData.photos
                                            .map((p) => p.name)
                                            .join(", ")}
                                    >
                                        {addData.photos.length > 0
                                            ? `${addData.photos.length}장 선택됨`
                                            : "선택된 파일 없음"}
                                    </div>

                                    <div>
                                        <input
                                            type="file"
                                            id="photos"
                                            name="photos"
                                            accept="image/*"
                                            multiple // ✅ 멀티 선택
                                            style={{display: "none"}}
                                            onChange={onChangeHandler}
                                        />
                                        <label
                                            htmlFor="photos"
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
