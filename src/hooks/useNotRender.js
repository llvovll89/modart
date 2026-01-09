import {useLocation} from "react-router-dom";
import {LOGIN, SIGN_UP} from "../routes/route/path";

export const useNotRender = () => {
    const location = useLocation();
    const pathName = location.pathname;

    const isNotRender = pathName === LOGIN || pathName === SIGN_UP;

    return isNotRender;
};
