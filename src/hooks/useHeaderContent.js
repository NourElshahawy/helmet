import { useQuery } from "@tanstack/react-query";
import { getHeaderContent } from "../api/homeApi";

export const useHeaderContent = () => {
    return useQuery({
        queryKey: ["header-content"],
        queryFn: getHeaderContent,
        staleTime: 10 * 60 * 1000,
    });
};