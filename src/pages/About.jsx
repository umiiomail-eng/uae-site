import "../styles/page.css";
import SEO from "../components/SEO";
import {
  ShieldCheck,
  Target,
  FileCheck
} from "lucide-react";


function About() {

  return (
    <>
      <SEO
        title="من نحن | منصة شكاوى الإمارات"
        description="تعرف على منصة شكاوى الإمارات المستقلة لاستقبال وتنظيم شكاوى المستهلكين بطريقة إلكترونية سهلة وآمنة."
        url="https://moetshakwa-uae.com/about"
      />

      <section className="page-section">
        <div className="page-container">
          <div className="page-icon">
            <ShieldCheck size={40} />
          </div>

          <h1>من نحن</h1>

          <p className="page-intro">
            منصة شكاوى الإمارات هي منصة إلكترونية مستقلة تهدف إلى تسهيل استقبال
            وتنظيم شكاوى المستهلكين بطريقة واضحة ومنظمة.
          </p>

          <div className="page-cards">
            <div>
              <Target />

              <h3>هدفنا</h3>

              <p>
                توفير وسيلة إلكترونية سهلة تساعد المستخدم على تقديم تفاصيل شكواه
                بطريقة منظمة.
              </p>
            </div>

            <div>
              <FileCheck />

              <h3>آلية العمل</h3>

              <p>
                يتم استقبال البيانات ومراجعتها وتنظيمها بهدف تسهيل المتابعة
                والتواصل عند الحاجة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default About;