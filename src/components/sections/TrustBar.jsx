import "../../styles/trustbar.css";
import {
  ShieldCheck,
  Clock3,
  FileCheck2,
  PhoneCall,
} from "lucide-react";

const items = [
  {
    icon: <ShieldCheck size={34} />,
    title: "حماية البيانات",
    text: "يتم التعامل مع البيانات بسرية مع اتخاذ إجراءات مناسبة لحمايتها."
  },
  {
    icon: <Clock3 size={34} />,
    title: "إرسال سريع",
    text: "يمكنك تعبئة النموذج وإرسال البلاغ خلال دقائق."
  },
  {
    icon: <FileCheck2 size={34} />,
    title: "مراجعة منظمة",
    text: "تتم مراجعة المعلومات قبل تحديد آلية المتابعة المناسبة."
  },
  {
    icon: <PhoneCall size={34} />,
    title: "تواصل عند الحاجة",
    text: "قد يتم التواصل معك عند الحاجة لاستكمال بعض المعلومات."
  }
];

function TrustBar() {
  return (
    <section className="trust-section">

      <div className="container">

        <div className="trust-grid">

          {items.map((item, index) => (

            <div className="trust-card" key={index}>

              <div className="trust-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustBar;