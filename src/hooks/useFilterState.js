import {useState} from "react";

export const useFilterState = () => {
    const [sortType, setSortType] = useState("recent");
    const [sortOrder, setSortOrder] = useState("desc");

    const handleSortClick = (type) => {
        if (sortType === type) {
            setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
        } else {
            setSortType(type);
            setSortOrder("desc");
        }
    };

    return {
        sortType,
        sortOrder,
        handleSortClick,
    };
};
