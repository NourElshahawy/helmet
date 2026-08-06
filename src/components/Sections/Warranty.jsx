import MainBtn from "../ui/MainBtn";
import HexPattern from "../Home/HexPattern";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Warranty() {
  const isMobile = useIsMobile();
  return (
    <>
      <section className="warranty section">
        <div className="main-container">
          <HexPattern
            hexWidth={isMobile ? 90 : 160}
            hexHeight={isMobile ? 130 : 230}
            rowsColumns={isMobile ? undefined : [8, 7, 8]}
            cols={isMobile ? 8 : undefined}
            rows={isMobile ? 8 : undefined}
          />
          <div className="text">
            <h3>ضمان HELMET لراحة بالك</h3>
            <p>
              {" "}
              12 شهراً من الحماية الحقيقية — لأن الحماية عندنا ليست منتج، بل
              ثقة.
            </p>
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
