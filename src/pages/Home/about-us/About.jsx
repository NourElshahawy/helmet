import "./AboutStyle.css";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="row">
          <div className="col-md-7">
            <h1> من نحن</h1>
            <p>
              في عالم أصبحت فيه الأجهزة الذكية جزءًا أساسيًا من حياتنا اليومية،
              وُلدت HELMET بفكرة بسيطة لكنها قوية: تقديم حماية حقيقية تواكب قيمة
              الأجهزة التي نستخدمها. منذ تأسيس البراند عام 2018، وضعت HELMET
              هدفًا واضحًا وهو أن تصبح علامة موثوقة في عالم حماية الأجهزة
              الذكية. لذلك ركزنا منذ البداية على تطوير منتجات تجمع بين القوة في
              الحماية، والدقة في التصميم، والجودة في التصنيع.
            </p>
          </div>
          <div className="col-md-5">
            <img src="/images/about.jpg" alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
