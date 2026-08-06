import { getProvide } from "../../api/getProvide";
import { useQuery } from "@tanstack/react-query";


export default function Provide() {




    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["getProvide"],
        queryFn: getProvide,
        select: (data) => data.data,
    });

    if (isLoading) return <p>جاري التحميل...</p>;
    if (isError) return <p>حصل خطأ: {error.message}</p>;

    // const provideCards = [
    //     {
    //         title: "حماية 360°",
    //         description: "تصميم يوفر تغطية كاملة لجهازك ويحميه من الصدمات والخدوش من جميع الزوايا.",
    //     },  
    //     {
    //         title: "سهولة التركيب",
    //         description: "نظام تركيب سريع بدون فقاعات مع دليل واضح وأدوات مرفقة.",
    //     },
    //     {
    //         title: "وضوح ولمسة أصلية",
    //         description: "يحافظ على جودة الشاشة واستجابة اللمس لتجربة استخدام طبيعية.",
    //     },
    //     {
    //         title: "ضمان HELMET ",
    //         description: "برنامج ضمان وتعويض يمنحك راحة البال في حال الكسر خلال فترة الضمان.",
    //     },
    // ];
    return (
            <section className="provide section">
            <div className="main-container">
                <div className="provide-title">
                    <h2> ماذا نقدم</h2>
                </div>
                <div className="row provide-cards ">
                   {data?.map((provideCard, index) => (
                    <div key={index} className=" provide-card">
                        <h4> {provideCard.title} </h4>
                        <p>
                        {provideCard.description}
                        </p>

                   </div>
                   ))}
                </div>
            </div>
        </section>
    );
}

