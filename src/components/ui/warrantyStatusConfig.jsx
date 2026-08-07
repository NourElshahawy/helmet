import checkIconPending from "../../assets/images/check-icon-pending.svg";
import checkIconActive from "../../assets/images/check-icon-active.svg";
import checkIconExpired from "../../assets/images/check-icon-expired.svg";
import checkIconRejected from "../../assets/images/check-icon-rejected.svg";
import checkIconCancelled from "../../assets/images/check-icon-cancelled.svg";


export const WARRANTY_STATUS_CONFIG = {
  pending: {
    image: checkIconPending,
    iconColor: "neutral",
    title: "قيد المراجعة",
    getDescription: () =>
      "تم استلام طلب الضمان بنجاح، ويقوم فريق HELMET بمراجعته والتأكد من صحة البيانات والمرفقات قبل اعتماد التفعيل.",
    fields: [],
  },
  active: {
    image: checkIconActive,
    iconColor: "success",
    title: "الضمان ساري",
    getDescription: () =>
      "تم تفعيل ضمان المنتج بنجاح، ويمكنك الاستفادة من جميع خدمات الضمان خلال فترة القسط.",
    fields: [
      { label: "تاريخ التفعيل", key: "activationDate" },
      { label: "تاريخ الانتهاء", key: "expiryDate" },
      { label: "مدة الضمان", key: "duration" },
    ],
  },
  expired: {
    image: checkIconExpired,
    iconColor: "warning",
    title: "انتهت صلاحية الضمان",
    getDescription: () =>
      "انتهت مدة الضمان المحددة لهذا المنتج، ولم يعد مشمولاً بخدمات الضمان.",
    fields: [
      { label: "تاريخ التفعيل", key: "activationDate" },
      { label: "تاريخ الانتهاء", key: "expiryDate" },
      { label: "مدة الضمان", key: "duration" },
    ],
  },
  rejected: {
    image: checkIconRejected,
    iconColor: "danger",
    title: "تم رفض طلب الضمان",
    getDescription: (data) => (
      <>
        تعذر قبول طلب الضمان بعد مراجعته.
        {data?.rejectionReason && (
          <span className="warranty-status-modal__note">
            سبب الرفض: {data.rejectionReason}
          </span>
        )}
      </>
    ),
    fields: [],
  },
  cancelled: {
    image: checkIconCancelled,
    iconColor: "danger",
    title: "تم إلغاء الضمان",
    getDescription: () =>
      "تم إلغاء هذا الضمان تلقائيًا بعد تفعيل ضمان جديد لنفس المنتج، ويمكنك متابعة حالة الضمان الحالي والاطلاع على تفاصيله من خلال صفحة الضمان.",
    fields: [],
  },
};