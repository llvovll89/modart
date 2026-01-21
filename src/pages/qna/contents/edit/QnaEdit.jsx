import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {getQna} from "../../../../store/reducers/qnaSlice";
import QnaForm from "../form/QnaForm";

const QnaEdit = () => {
    const {id} = useParams();
    const location = useLocation();
    const dispatch = useDispatch();

    const qnaList = useSelector((state) => state.qna.questions) || [];
    const qnaFromState = location.state?.qna;

    const currentQna = useMemo(() => {
        return String(qnaFromState?.id) === String(id)
            ? qnaFromState
            : qnaList.find((q) => String(q.id) === String(id));
    }, [qnaFromState, qnaList, id]);

    useEffect(() => {
        if (!currentQna) dispatch(getQna());
    }, [currentQna, dispatch]);

    if (!currentQna) return null;

    return <QnaForm mode="edit" qnaId={id} initialQna={currentQna} />;
};

export default QnaEdit;
