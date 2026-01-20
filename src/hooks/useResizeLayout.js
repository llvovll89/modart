import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useResizeLayout = ({ itemList, getItems }) => {
    const [perPage, setPerPage] = useState(itemList.length);
    const [gap, setGap] = useState("16px");
    const [focus, setFocus] = useState("left");

    const dispatch = useDispatch();

    const handleResize = useCallback(() => {
        const innerWidth = window.innerWidth;

        if (innerWidth >= 1280) {
            setPerPage(5);
            setFocus("left");
        } else if (innerWidth >= 964) {
            setPerPage(4);
            setGap("14px");
            setFocus("left");
        } else if (innerWidth >= 768) {
            setPerPage(3);
            setGap("12px");
            setFocus("left");
        } else {
            setPerPage(2);
            setGap("8px");
            setFocus("center");
        }
    }, []);

    useEffect(() => {
        dispatch(getItems());
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch, handleResize]);

    return {
        perPage,
        gap,
        focus,
    };
};
