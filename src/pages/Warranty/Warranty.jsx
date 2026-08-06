import React from 'react'
import WarrantySec from '../../components/Sections/WarrantySec'
import HeadTitle from '../../components/ui/HeadTitle'
import MainBtn from '../../Components/ui/MainBtn'

export default function Warranty() {

    const cards = [
        {
            title: "تفعيل ضمان HELMET",
            desc: "فعّل ضمان منتجك في دقائق قليلة للاستفادة من خدمات الضمان المعتمدة من HELMET. استمتع بدعم سريع، وتغطية موثوقة، وتجربة استخدام أكثر راحة واطمئنانًا طوال فترة الضمان.",
            btn: "تفعيل الضمان"
        },
        {
            title: "طلب تعويض الضمان",
            desc: "في حال حدوث كسر أو وجود مشكلة في المنتج، يمكنك تقديم طلب التعويض وسيقوم فريق HELMET بمتابعة الطلب ومعالجته بسرعة واحترافية.",
            btn: "طلب تعويض الضمان"
        },
        {
            title: "التحقق من حالة الضمان",
            desc: "نوفر لك متابعة فورية لحالة الضمان، مع تحديثات مستمرة توضح مرحلة الطلب والإجراءات التي تم اتخاذها، لتبقى على اطلاع دائم بكل جديد حتى اكتمال عملية التفعيل أو المراجعة، بكل سهولة وشفافية.",
            btn: "التحقق من حالة الضمان"
        },
    ];

    const lists = [
        {
            span: "المدة والتفعيل:",
            desc: "الضمان ساري لمدة 12 شهراً من تاريخ التركيب، ويشترط تفعيله وقت التركيب أو خلال مدة أقصاها 3 أيام ، ويلغى في حال عدم تفعيل",
        },
        {
            span: "التغطية:",
            desc: "يشمل كسر الشاشة الامامية وكسر الزجاج الخلفي مع إمكانية استبدال الكفر الخلفي مرة واحدة.",
        },
        {
            span: "الاستثناءات:",
            desc: "لا يغطي الضمان سوء الاستخدام. بما في ذلك الكسر الناتج عن السقوط العنيف أو الصدمات الشديدة المتعمدة. لا يشمل تلف الكاميرا الخلفية. الكسر الداخلي للشاشة، أو الشاشات المستبدلة مسبقاً(الأمامية - الخلفية).",
        },
        {
            span: "التعويض:",
            desc: "في حال تعذّر الصيانة، يُعوض العميل بمبلغ يصل إلى 1200 ريال كحد أقصى للشاشة الأمامية خلال 1-15 يوم عمل وتُحدد القيمة حسب نوع الجهاز 400 ريال كحد أقصى للزجاج الخلفي خلال 1-15 يوم عمل وتُحدد القيمة حسب نوع الجهاز",
        },
        {
            span: "إلغاء الضمان:",
            desc: "يُلغى الضمان عند إزالة بكج الحماية أو عدم تفعيله عند التركيب.",
        },
    ];

    return <>
        <section className="warranty">
            <div className="main-container">

                <div className="title">
                    <HeadTitle value="الضمان" />
                    <p>لأن الحماية في HELMET ليست مجرد منتج… بل ثقة.</p>
                </div>

                <div className="row pt-4">
                    {cards.map((card, index) => {
                        return (
                        <div key={index} className="col-md-4">
                            <div className="my-card">
                                <h4>{card.title}</h4>
                                <p>{card.desc}</p>
                                <MainBtn value={card.btn} />
                            </div>
                        </div>
                        )
                    })}
                </div>

                <div className="warranty-Terms section">
                    <HeadTitle value="شروط الضمان" />
                    <h3>بكج حماية HELMET TOKEN </h3>

                    <ul className="list">
                        {lists.map((list, index) => {
                            return (
                                <li key={index}>
                                    <span>{list.span}</span>
                                    <p>{list.desc}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    </>
}
