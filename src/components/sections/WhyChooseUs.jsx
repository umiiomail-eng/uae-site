import "../../styles/why.css";

import {
  ShieldCheck,
  UserCheck,
  FileSearch,
  LockKeyhole
} from "lucide-react";


const features = [

  {
    icon:<ShieldCheck size={32}/>,
    title:"منصة مستقلة",
    text:"نوفر طريقة منظمة لاستقبال الشكاوى دون تمثيل أي جهة حكومية أو رسمية."
  },

  {
    icon:<LockKeyhole size={32}/>,
    title:"سرية المعلومات",
    text:"يتم التعامل مع بيانات المستخدمين بسرية وفق أفضل ممارسات الحماية."
  },

  {
    icon:<FileSearch size={32}/>,
    title:"مراجعة دقيقة",
    text:"تتم مراجعة تفاصيل البلاغات لضمان وضوح المعلومات المقدمة."
  },

  {
    icon:<UserCheck size={32}/>,
    title:"سهولة الاستخدام",
    text:"واجهة بسيطة تمكنك من تقديم الشكوى بخطوات واضحة وسريعة."
  }

];


function WhyChooseUs(){

return (

<section className="why-section">

<div className="container">


<div className="section-header">

<span>
لماذا نحن؟
</span>

<h2>
طريقة أسهل لإدارة شكاواك
</h2>

<p>
صممنا المنصة لتكون تجربة إلكترونية بسيطة ومنظمة تساعدك على إرسال شكواك بكل وضوح.
</p>

</div>



<div className="why-grid">


{
features.map((item,index)=>(

<div 
className="why-card"
key={index}
>


<div className="why-icon">

{item.icon}

</div>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>

))
}


</div>


</div>

</section>

)

}


export default WhyChooseUs;