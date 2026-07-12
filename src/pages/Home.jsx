import SEO from "../components/SEO";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import ComplaintForm from "../components/sections/ComplaintForm";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import HowItWorks from "../components/sections/HowItWorks";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";


function Home(){

return (

<>

<SEO

title="منصة شكاوى الإمارات | تقديم شكاوى المستهلكين"

description="منصة مستقلة لاستقبال شكاوى المستهلكين في الإمارات. قدم شكواك ضد الشركات والخدمات التجارية بطريقة سهلة وآمنة."

url="https://moetshakwa-uae.com/"

/>



<Navbar />


<main>


<Hero />


<section id="complaint-form">

<ComplaintForm />

</section>


<WhyChooseUs />


<HowItWorks />


<FAQ />


<CTA />


</main>


<Footer />


</>

)

}


export default Home;