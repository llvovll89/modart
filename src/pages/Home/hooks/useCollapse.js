import {useCallback, useEffect, useState} from "react";

export const useCollapse = ({elementId, list}) => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [collapsed, setCollapsed] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [filteredList, setFilteredList] = useState([]);

    const handleLoadMore = () => {
        if (visibleCount + getIncrement() >= filteredList.length) {
            setCollapsed(true);
        }
        setVisibleCount((prevCount) => prevCount + getIncrement());
        window.scrollTo(0, scrollPosition);
    };

    const handleCollapse = () => {
        if (window.innerWidth <= 768) {
            setVisibleCount(2);
        } else {
            setVisibleCount(4);
        }

        setCollapsed(false);

        requestAnimationFrame(() => {
            const el = document.getElementById(elementId);
            if (el) {
                el.scrollIntoView({behavior: "smooth", block: "start"});
            }
        });
    };

    const handleScroll = useCallback(() => {
        setScrollPosition(window.pageYOffset);
    }, []);

    const getIncrement = useCallback(() => {
        const browserWidth = window.innerWidth;
        if (browserWidth <= 768) {
            return 2;
        } else {
            return 4;
        }
    }, []);

    useEffect(() => {
        setVisibleCount(getIncrement());
    }, [getIncrement]);

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(getIncrement());
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [getIncrement]);

    useEffect(() => {
        const sortList = [...list].sort((a, b) => b.createdAt - a.createdAt);
        setFilteredList(sortList);
    }, [list]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return {
        visibleCount,
        collapsed,
        handleLoadMore,
        filteredList,
        handleCollapse,
    };
};
