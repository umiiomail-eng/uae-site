import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";

import { CheckCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/page.css";
import { useEffect } from "react";
import { pushEvent } from "../services/googleAds";

function ThankYou(){
useEffect(() => {

  window.scrollTo(0, 0);

  pushEvent("complaint_form_submitted", {
    page: "/thank-you",
  });

}, []);

return (

<section className="page-section">


<Helmet>

<meta 
name="robots" 
content="noindex,nofollow"
/>

</Helmet>



<SEO

title="تم إرسال البلاغ بنجاح | منصة شكاوى الإمارات"

description="تم استقبال بلاغك بنجاح وسيتم مراجعته والتواصل عند الحاجة."

url="https://moetshakwa-uae.com/thank-you"

/>



<div className="page-container thank-box">


<CheckCircle 
size={80}
className="success-icon"
/>


<h1>
تم إرسال البلاغ بنجاح
</h1>


<p className="page-intro">

شكرًا لتواصلك معنا. تم استقبال بياناتك وسيتم مراجعتها، وسيتم التواصل معك عند الحاجة.

</p>


<Link 
to="/"
className="home-btn"
>

العودة للرئيسية

</Link>


</div>


</section>

)

}


export default ThankYou;