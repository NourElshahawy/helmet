import "./provide.css";

function Provide() {


    const provideCards = [
        {
            title: "حماية 360°",
            description: "تصميم يوفر تغطية كاملة لجهازك ويحميه من الصدمات والخدوش من جميع الزوايا.",
        },  
        {
            title: "سهولة التركيب",
            description: "نظام تركيب سريع بدون فقاعات مع دليل واضح وأدوات مرفقة.",
        },
        {
            title: "وضوح ولمسة أصلية",
            description: "يحافظ على جودة الشاشة واستجابة اللمس لتجربة استخدام طبيعية.",
        },
        {
            title: "ضمان HELMET ",
            description: "برنامج ضمان وتعويض يمنحك راحة البال في حال الكسر خلال فترة الضمان.",
        },
    ];
    return (
        <div className="provide">
            <div className="main-container">
                <div className="provide-title">
                    <h2> ماذا نقدم</h2>
                </div>
                <div className="row provide-cards ">
                   {provideCards.map((provideCard) => (
                    <div className=" provide-card">
                        <h4> {provideCard.title} </h4>
                        <p>
                        {provideCard.description}
                        </p>

                   </div>
                   ))}
                </div>
            </div>
        </div>
    );
}

export default Provide;