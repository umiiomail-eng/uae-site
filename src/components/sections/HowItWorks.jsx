import "../../styles/how.css";

import {
  ClipboardEdit,
  Send,
  SearchCheck,
  MessageCircle
} from "lucide-react";


const steps = [

{
icon:<ClipboardEdit size={32}/>,
number:"01",
title:"تعبئة النموذج",
text:"أدخل معلوماتك وتفاصيل الشكوى من خلال نموذج إلكتروني بسيط."
},

{
icon:<Send size={32}/>,
number:"02",
title:"إرسال البلاغ",
text:"يتم إرسال البيانات بطريقة منظمة وآمنة للمراجعة."
},

{
icon:<SearchCheck size={32}/>,
number:"03",
title:"مراجعة المعلومات",
text:"يتم فحص تفاصيل البلاغ والتأكد من وضوح البيانات."
},

{
icon:<MessageCircle size={32}/>,
number:"04",
title:"التواصل عند الحاجة",
text:"قد يتم التواصل معك للحصول على معلومات إضافية حول البلاغ."
}

];


function HowItWorks(){

return (

<section 
className="how-section"
id="how"
>

<div className="container">


<div className="section-header">


<span>
طريقة العمل
</span>


<h2>
أربع خطوات بسيطة لتقديم شكواك
</h2>


<p>
صممنا العملية لتكون واضحة وسريعة من بداية تقديم البلاغ وحتى المراجعة.
</p>


</div>



<div className="steps-wrapper">


{
steps.map((step,index)=>(

<div 
className="step-card"
key={index}
>


<div className="step-number">

{step.number}

</div>


<div className="step-icon">

{step.icon}

</div>


<h3>

{step.title}

</h3>


<p>

{step.text}

</p>


</div>

))
}


</div>


</div>

</section>

)

}


export default HowItWorks;