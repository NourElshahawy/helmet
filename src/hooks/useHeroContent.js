import { useQuery } from "@tanstack/react-query";
import { getHeroContent } from "../api/homeApi";

export const useHeroContent = () => {
    return useQuery({
        queryKey: ["hero-content"],
        queryFn: getHeroContent,
        staleTime: 5 * 60 * 1000,
    });
};