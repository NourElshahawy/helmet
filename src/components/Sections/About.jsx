import "../../styles/about-us/AboutStyle.css";

function About() {

  const aboutTitle = "من نحن";
  const aboutContent = `في عالم أصبحت فيه الأجهزة الذكية جزءًا أساسيًا من حياتنا اليومية،
  وُلدت HELMET بفكرة بسيطة لكنها قوية: تقديم حماية حقيقية تواكب قيمة
  الأجهزة التي نستخدمها. منذ تأسيس البراند عام 2018، وضعت HELMET
  هدفًا واضحًا وهو أن تصبح علامة موثوقة في عالم حماية الأجهزة
  الذكية. لذلك ركزنا منذ البداية على تطوير منتجات تجمع بين القوة في
  الحماية، والدقة في التصميم، والجودة في التصنيع.`; 
  
  const statistics = [
    {
      value: "1,500,000",
      description: "منتج تم بيعه",
      icon: "bag.svg",
    },
    {
      value: "500",
      description: "نقطة بيع معتمدة",
      icon: "like.svg",
    },
    {
      value: "8",
      description: "سنوات من التميز ",
      icon: "arrow-increase.svg",
    },
  ];




  const features = [
    {
      title: "حلول حماية متكاملة",
      description:
        "نطور حلول حماية متكاملة، تشمل استيكرات الشاشة والكفرات وبكجات الحماية الشاملة لضمان أعلى مستوى من الأمان لجهازك.",
        image: "feature-item-img1.svg",
    },
    {
      title: "الجودة التي نصنع بها الثقة  ",
      description:
        "نستخدم مواد عالية الجودة وتقنيات تصنيع متطورة لنقدم حماية موثوقة تجمع بين الأداء والمتانة.",
        image: "feature-item-img2.svg",
    },
    {
      title: "رؤيتنا للمستقبل",
      description:
        "نواصل الابتكار وتطوير حلول حماية تواكب تطور الأجهزة الذكية وتلبي احتياجات عملائنا.",
        image: "feature-item-img3.svg",
    },
  ];
  return (
    <section className="about section">
      <div className="about-content">
        <div className="row">
          <div className="col-md-7">
            <div className="about-content-title">   
              <h1> {aboutTitle} </h1>
              <p>
                {aboutContent}
              </p>
            </div>
            
            <div className="statistics">
              {statistics.map((statistic, index) => (
                <div key={index} className="statistic-item">
                  <div className="statistic-item-icon">
                    <img src={`../src/assets/images/${statistic.icon}`} />
                  </div>
                  <div className="statistic-item-content">
                    <h3>{statistic.value}</h3>
                    <p>{statistic.description}</p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          <div className="col-md-5">
            <div className="our-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-item-img">
                    <img src={`../src/assets/images/${feature.image}`} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
