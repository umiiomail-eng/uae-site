import "../../styles/cta.css";
import { ArrowLeft, ShieldCheck } from "lucide-react";


function CTA(){

const scrollToForm = ()=>{

const form=document.getElementById("complaint-form");

if(form){

form.scrollIntoView({
behavior:"smooth"
});

}

};


return (

<section className="cta-section">

<div className="container">


<div className="cta-box">


<div className="cta-content">


<div className="cta-icon">

<ShieldCheck size={40}/>

</div>


<h2>
هل لديك شكوى تحتاج إلى متابعة؟
</h2>


<p>
ابدأ الآن بتقديم بياناتك من خلال النموذج الإلكتروني بطريقة سهلة ومنظمة.
</p>


<button onClick={scrollToForm}>

تقديم شكوى الآن

<ArrowLeft size={20}/>

</button>


</div>


</div>


</div>


</section>

)

}


export default CTA;