import MainBtn from "../ui/MainBtn";
import HexPattern from "../Home/HexPattern";
import { useIsMobile } from "../../hooks/useIsMobile";
import api from "../../api/axios";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function WarrantySec() {
  const isMobile = useIsMobile();



    function getWarranty() {
        return api.get("/home/warranty");
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['getWarranty'],
        queryFn: getWarranty,

        select: (data) => {
            return data.data.data;
        },
    });

    console.log(data);









  return (
    <>
      <section className="WarrantySec section">
        <div className="main-container">
          <HexPattern
            hexWidth={isMobile ? 90 : 160}
            hexHeight={isMobile ? 130 : 230}
            rowsColumns={isMobile ? undefined : [8, 7, 8]}
            cols={isMobile ? 8 : undefined}
            rows={isMobile ? 8 : undefined}/>


          <div className="text">
            <h3>{data?.title}</h3>
            <p>{data?.description}</p>
            <div className="btn-group d-flex gap-3">
              <MainBtn href="" value={"بوابة الضمان"} />
              <MainBtn href="" value={"شروط الضمان"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
