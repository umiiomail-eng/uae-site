import "../../styles/hero.css";
import {
  ShieldCheck,
  ArrowDown,
  FileCheck2,
  Lock,
  Clock3,
  PhoneCall
} from "lucide-react";

function Hero() {

  const scrollToForm = () => {

    const section = document.getElementById("complaint-form");

    if(section){

      section.scrollIntoView({
        behavior:"smooth"
      });

    }

  }

  return (

<section className="hero">

<div className="hero-bg"></div>

<div className="container hero-container">

<div className="hero-content">

<div className="hero-badge">

<ShieldCheck size={18}/>

<span>

منصة مستقلة لاستقبال شكاوى المستهلكين

</span>

</div>

<h1>

قدّم شكواك بثقة عبر منصة مستقلة

</h1>

<p>

نوفر وسيلة إلكترونية منظمة لاستقبال شكاوى المستهلكين داخل دولة الإمارات مع الحفاظ على خصوصية البيانات ومراجعة البلاغات قبل متابعة الإجراءات المناسبة.

</p>

<div className="hero-buttons">

<button
className="primary-btn"
onClick={scrollToForm}
>

قدّم شكواك

</button>

<a
href="#how"
className="secondary-btn"
>

كيف يعمل النظام

</a>

</div>

<div className="hero-features">

<div>

<Lock size={18}/>

<span>

حماية البيانات

</span>

</div>

<div>

<Clock3 size={18}/>

<span>

إرسال خلال دقائق

</span>

</div>

<div>

<FileCheck2 size={18}/>

<span>

مراجعة منظمة

</span>

</div>

<div>

<PhoneCall size={18}/>

<span>

تواصل عند الحاجة

</span>

</div>

</div>

</div>

<div className="hero-card">

<div className="card-glow"></div>

<h3>

ابدأ بإرسال البلاغ

</h3>

<p>

أدخل بياناتك مرة واحدة وسيتم استقبال البلاغ بطريقة منظمة وآمنة.

</p>

<div className="card-items">

<div>

<strong>

✓

</strong>

<span>

خصوصية عالية

</span>

</div>

<div>

<strong>

✓

</strong>

<span>

مراجعة يدوية

</span>

</div>

<div>

<strong>

✓

</strong>

<span>

واجهة سهلة وسريعة

</span>

</div>

</div>

<button
onClick={scrollToForm}
>

ابدأ الآن

<ArrowDown size={18}/>

</button>

</div>

</div>

</section>

  );

}

export default Hero;