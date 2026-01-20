import { useEffect, useState } from "react";

export const useCheckedDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
        const handleChange = (e) => {
            setIsDesktop(e.matches);
        };

        handleChange(mql);
        mql.addEventListener("change", handleChange);

        return () => {
            mql.removeEventListener("change", handleChange);
        };
    }, []);

    return isDesktop;
};
