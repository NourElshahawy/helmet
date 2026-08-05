import { useQuery } from "@tanstack/react-query";
import { getHomeContent } from "../api/homeApi";


// بيعمل ايه: بيعمل instance واحد من axios فيه الـ baseURL والـ headers جاهزين.
// ليه: عشان متكررش axios.get("https://...") في كل مكان، ولو الـ API الأساسي اتغيّر بتغيّره في سطر واحد بس.ده بالظبط اللي README بتاعك بيوصفه لفولدر api //

export const useHomeContent = () => {
    return useQuery({
        queryKey: ["home-content"],
        queryFn: getHomeContent,
        staleTime: 5 * 60 * 1000, // 5 دقايق
    });
};