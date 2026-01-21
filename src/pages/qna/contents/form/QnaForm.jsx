import React, {useEffect, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AiOutlineFileAdd, AiOutlineQuestionCircle} from "react-icons/ai";
import {createData} from "../../../../store/reducers/qnaSlice";
import {QnaFormWrap} from "./QnaForm.css";

const MAX_TITLE = 70;
const MAX_DESC = 2000;

const QnaForm = ({mode = "create", qnaId, initialQna = null}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.login.user);
    const nickName = user?.nickname ?? "";

    const didInitRef = useRef(false);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    // ✅ edit: 기존 URL 유지 + 새로 추가한 File 분리
    const [keepPhotos, setKeepPhotos] = useState([]); // string[]
    const [newPhotos, setNewPhotos] = useState([]); // File[]
    const [newFileNames, setNewFileNames] = useState([]); // string[]

    const [previewUrls, setPreviewUrls] = useState([]); // (string URL)[]

    const titleCount = title.length;
    const descCount = desc.length;

    // ✅ edit 진입 시 초기값 세팅
    useEffect(() => {
        if (mode !== "edit") return;
        if (!initialQna) return;
        if (didInitRef.current) return;

        setTitle(initialQna.title ?? "");
        setDesc(initialQna.desc ?? "");

        const urls = Array.isArray(initialQna.photos)
            ? initialQna.photos
            : initialQna.photo
              ? [initialQna.photo]
              : [];

        setKeepPhotos(urls.filter(Boolean));
        setNewPhotos([]);
        setNewFileNames([]);

        didInitRef.current = true;
    }, [mode, initialQna]);

    const canSubmit = useMemo(() => {
        if (!user) return false;
        if (title.trim().length === 0) return false;
        if (desc.trim().length === 0) return false;
        if (title.length > MAX_TITLE) return false;
        if (desc.length > MAX_DESC) return false;
        return true;
    }, [user, title, desc]);

    // ✅ 프리뷰: keepPhotos(URL) + newPhotos(File->objectURL)
    useEffect(() => {
        const fileUrls =
            newPhotos.length > 0
                ? newPhotos.map((f) => URL.createObjectURL(f))
                : [];

        setPreviewUrls([...keepPhotos, ...fileUrls]);

        return () => {
            fileUrls.forEach((u) => URL.revokeObjectURL(u));
        };
    }, [keepPhotos, newPhotos]);

    const onChangeFiles = (e) => {
        const files = Array.from(e.target.files ?? []);
        if (files.length === 0) return;

        setNewPhotos((prev) => [...prev, ...files]);
        setNewFileNames((prev) => [...prev, ...files.map((f) => f.name)]);

        e.target.value = "";
    };

    const removeFileAt = (idx) => {
        // 앞쪽: keepPhotos, 뒤쪽: newPhotos
        if (idx < keepPhotos.length) {
            setKeepPhotos((prev) => prev.filter((_, i) => i !== idx));
            return;
        }
        const fileIdx = idx - keepPhotos.length;
        setNewPhotos((prev) => prev.filter((_, i) => i !== fileIdx));
        setNewFileNames((prev) => prev.filter((_, i) => i !== fileIdx));
    };

    const clearFiles = () => {
        setKeepPhotos([]);
        setNewPhotos([]);
        setNewFileNames([]);
        const el = document.getElementById("qna-photo");
        if (el) el.value = "";
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            window.alert("로그인 후 작성할 수 있습니다.");
            return;
        }
        if (!canSubmit) {
            window.alert("제목/내용을 확인해주세요.");
            return;
        }

        try {
            const payload = {
                title: title.trim(),
                desc: desc.trim(),
                nickname: nickName,
                photos: newPhotos, // ✅ 새로 추가한 것만 업로드(기존 URL은 별도 처리 필요)
                recommendedUsers: [],
            };

            // ⚠️ 현재는 createData만 호출 중입니다.
            // edit 모드면 update thunk를 만들어서
            // keepPhotos(URL) + 새 업로드 URL을 합쳐 저장해야 합니다.
            await dispatch(createData(payload)).unwrap();

            window.alert("게시글이 성공적으로 등록되었습니다.");
            navigate(-1);
        } catch (error) {
            window.alert("게시글 등록에 실패하였습니다.");
            console.log(error);
        }
    };

    return (
        <QnaFormWrap>
            <div className="wrap">
                <header className="header">
                    <div className="badge">
                        <AiOutlineQuestionCircle />
                    </div>
                    <div className="headText">
                        <h1>{mode === "edit" ? "질문 수정" : "질문 작성"}</h1>
                        <p>
                            궁금한 내용을 자세히 적어주면 더 좋은 답변을 받을 수
                            있어요.
                        </p>
                    </div>
                </header>

                <section className="card">
                    <form onSubmit={onSubmit}>
                        <div className="who">
                            <div className="label">작성자</div>
                            <div className="value">
                                {user ? nickName : "로그인이 필요합니다"}
                            </div>
                        </div>

                        <div className="field">
                            <label className="fieldLabel" htmlFor="qna-title">
                                제목
                                <span
                                    className={`counter ${titleCount > MAX_TITLE ? "danger" : ""}`}
                                >
                                    ({titleCount}/{MAX_TITLE})
                                </span>
                            </label>
                            <input
                                id="qna-title"
                                className="input"
                                type="text"
                                name="title"
                                value={title}
                                placeholder="예) 배송이 지연되는데 어떻게 해야 하나요?"
                                autoComplete="off"
                                maxLength={MAX_TITLE + 50}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <div className="hint">
                                핵심 키워드를 포함하면 검색/답변에 도움이
                                됩니다.
                            </div>
                        </div>

                        <div className="field">
                            <label className="fieldLabel" htmlFor="qna-desc">
                                내용
                                <span
                                    className={`counter ${descCount > MAX_DESC ? "danger" : ""}`}
                                >
                                    ({descCount}/{MAX_DESC})
                                </span>
                            </label>
                            <textarea
                                id="qna-desc"
                                className="textarea"
                                name="desc"
                                value={desc}
                                placeholder={`상황/원인/시도해본 방법을 적어주세요.\n예) 언제부터 발생했는지, 에러 메시지, 재현 방법 등`}
                                maxLength={MAX_DESC + 200}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>

                        <div className="field">
                            <div className="fieldLabel">
                                첨부파일 (선택, 여러 장 가능)
                            </div>

                            <input
                                type="file"
                                id="qna-photo"
                                name="photos"
                                className="file"
                                multiple
                                accept="image/*"
                                onChange={onChangeFiles}
                            />

                            <label
                                className="drop"
                                htmlFor="qna-photo"
                                role="button"
                                tabIndex={0}
                            >
                                <div className="dropIcon">
                                    <AiOutlineFileAdd />
                                </div>
                                <div className="dropText">
                                    <div className="main">파일 선택</div>
                                    <div className="sub">
                                        여러 장 선택 가능 (이미지 권장)
                                    </div>
                                </div>
                            </label>

                            {previewUrls.length > 0 && (
                                <div
                                    className="previewGrid"
                                    aria-label="첨부 이미지 미리보기"
                                >
                                    {previewUrls.map((src, idx) => {
                                        const isKeep = idx < keepPhotos.length;
                                        const fileName = isKeep
                                            ? `기존 이미지 ${idx + 1}`
                                            : (newFileNames[
                                                  idx - keepPhotos.length
                                              ] ?? `첨부 이미지 ${idx + 1}`);

                                        return (
                                            <div
                                                className="previewItem"
                                                key={`${src}-${idx}`}
                                            >
                                                <img src={src} alt={fileName} />
                                                <button
                                                    type="button"
                                                    className="previewRemove"
                                                    onClick={() =>
                                                        removeFileAt(idx)
                                                    }
                                                >
                                                    제거
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {previewUrls.length > 0 ? (
                                <div className="fileList">
                                    <div className="fileListTop">
                                        <div className="fileCount">
                                            선택됨: {previewUrls.length}개
                                            {mode === "edit" && (
                                                <>
                                                    {" "}
                                                    (기존 {keepPhotos.length} /
                                                    새로 추가 {newPhotos.length}
                                                    )
                                                </>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            className="ghost"
                                            onClick={clearFiles}
                                        >
                                            전체 제거
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="hint">
                                    첨부는 선택사항입니다.
                                </div>
                            )}
                        </div>

                        <div className="actions">
                            <button
                                type="button"
                                className="btn"
                                onClick={() => navigate(-1)}
                            >
                                취소
                            </button>
                            <button
                                type="submit"
                                className="btn primary"
                                disabled={!canSubmit}
                                title={
                                    !user
                                        ? "로그인 후 이용 가능합니다."
                                        : undefined
                                }
                            >
                                게시하기
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </QnaFormWrap>
    );
};

export default QnaForm;
