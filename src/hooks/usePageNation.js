import {useState} from "react";

export const usePageNation = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    const getPageNumbers = () => {
        if (totalPages <= 8) {
            return Array.from({length: totalPages}, (_, i) => i + 1);
        }

        return [
            ...Array.from({length: 8}, (_, i) => i + 1),
            "ellipsis",
            totalPages,
        ];
    };

    return {
        currentData,
        currentPage,
        totalPages,
        goToPage,
        getPageNumbers,
    };
};
