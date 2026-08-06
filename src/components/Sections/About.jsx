import { useQuery } from "@tanstack/react-query";
import { getAbout } from "../../api/about";






export default function About() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getAbout"],
    queryFn: getAbout,
    select: (data) => data.data,
  });

  if (isLoading) return <p>جاري التحميل...</p>;
  if (isError) return <p>حصل خطأ: {error.message}</p>;


  const aboutTitle = "من نحن";
  

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


  return (
    <section className="about section">
      <div className="about-content">
        <div className="row">
          <div className="col-md-7">
            <div className="about-content-title">   
              <h1> {aboutTitle} </h1>
              <p>
                {data?.description}
              </p>
            </div>
            
            <div className="statistics">
                <div  className="statistic-item">
                  <div className="statistic-item-icon">
                    <img src={`../src/assets/images/${statistics[0].icon}`} />
                  </div>
                  <div className="statistic-item-content">
                    <h3>{data?.buyer_count}</h3>
                    <p>{statistics[0].description}</p>
                  </div>
                </div>
                  
                <div  className="statistic-item">
                  <div className="statistic-item-icon">
                    <img src={`../src/assets/images/${statistics[1].icon}`} />
                  </div>
                  <div className="statistic-item-content">
                    <h3>{data?.point_of_sale_count}</h3>
                    <p>{statistics[1].description}</p>
                  </div>
                </div>
                  
                <div  className="statistic-item">
                  <div className="statistic-item-icon">
                    <img src={`../src/assets/images/${statistics[2].icon}`} />
                  </div>
                  <div className="statistic-item-content">
                    <h3>{data?.year_count}</h3>
                    <p>{statistics[2].description}</p>
                  </div>
                </div>
                  
            </div>
          </div>
          <div className="col-md-5">
            <div className="our-features">
              {data?.features.map((feature) => (
                <div  className="feature-item">
                  <div className="feature-item-img">
                    <img src={`../src/assets/images/${feature.icon}`} />
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
