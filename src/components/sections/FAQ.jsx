import { useState } from "react";
import { ChevronDown } from "lucide-react";

import "../../styles/faq.css";


const questions = [

{
q:"هل منصة شكاوى الإمارات جهة حكومية؟",
a:"لا، المنصة مستقلة لاستقبال الشكاوى وتنظيم البيانات المقدمة من المستخدمين وليست جهة حكومية أو رسمية."
},

{
q:"ما نوع الشكاوى التي يمكن تقديمها؟",
a:"يمكن تقديم الشكاوى المتعلقة بالخدمات التجارية، الشركات، المتاجر الإلكترونية، التعويضات، وغيرها من البلاغات التجارية."
},

{
q:"هل بياناتي الشخصية آمنة؟",
a:"نحرص على التعامل مع البيانات بسرية وعدم استخدامها إلا لغرض استقبال ومراجعة البلاغ."
},

{
q:"كم يستغرق إرسال الشكوى؟",
a:"يمكن تعبئة النموذج وإرسال البيانات خلال دقائق قليلة."
},

{
q:"هل إرسال الشكوى يضمن الحصول على نتيجة معينة؟",
a:"لا يتم ضمان نتيجة محددة، حيث تعتمد المتابعة على طبيعة الشكوى والمعلومات المتوفرة."
}

];


function FAQ(){

const [open,setOpen]=useState(null);


return (

<section className="faq-section">

<div className="container">


<div className="section-header">

<span>
الأسئلة الشائعة
</span>

<h2>
إجابات عن أكثر الأسئلة انتشارًا
</h2>

<p>
تعرف على طريقة عمل المنصة قبل إرسال البلاغ.
</p>

</div>



<div className="faq-list">


{
questions.map((item,index)=>(


<div 
className={`faq-item ${open===index ? "active":""}`}
key={index}
>


<button
onClick={()=>setOpen(
open===index ? null:index
)}
>


<span>
{item.q}
</span>


<ChevronDown/>

</button>



<div className="faq-answer">

<p>
{item.a}
</p>

</div>


</div>


))
}


</div>


</div>

</section>

)

}


export default FAQ;