import { Link } from "react-router-dom";
import "../styles/page.css";


function NotFound(){

return(

<section className="page-section">


<div className="page-container thank-box">


<h1>
404
</h1>


<p className="page-intro">

عذرًا، الصفحة التي تبحث عنها غير موجودة.

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


export default NotFound;