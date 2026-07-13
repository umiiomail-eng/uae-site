import "../../styles/footer.css";

import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin
} from "lucide-react";


function Footer(){

return (

<footer className="footer">


<div className="container">


<div className="footer-grid">


{/* Brand */}

<div className="footer-brand">

<div className="footer-logo">

<ShieldCheck size={35}/>

<span>
منصة شكاوى الإمارات
</span>

</div>


<p>

منصة مستقلة لاستقبال وتنظيم شكاوى المستهلكين بطريقة إلكترونية سهلة ومنظمة.

</p>


<p className="independent">

هذه المنصة لا تمثل أي جهة حكومية أو رسمية.

</p>


</div>




{/* Links */}
<div className="footer-links">

<h3>
روابط مهمة
</h3>


<a href="/">
الرئيسية
</a>


<a href="/about">
من نحن
</a>


<a href="/contact">
تواصل معنا
</a>


<a href="/privacy">
سياسة الخصوصية
</a>


<a href="/terms">
الشروط والأحكام
</a>


</div>




{/* Contact */}

<div className="footer-contact">


<h3>
تواصل معنا
</h3>



<div>

<Mail/>

<span>
moetshakawi-uae@gmail.com
</span>

</div>


{/* 
<div>

<Phone/>

<span>
رقم التواصل
</span>

</div> */}



<div>

<MapPin/>

<span>
الإمارات العربية المتحدة
</span>

</div>


</div>



</div>



<div className="footer-bottom">

© {new Date().getFullYear()} منصة شكاوى الإمارات - جميع الحقوق محفوظة

</div>



</div>


</footer>

)

}


export default Footer;