import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";

import "../../styles/navbar.css";


function Navbar(){

const [open,setOpen]=useState(false);


return (

<header className="navbar">


<div className="container navbar-container">



<a href="/" className="brand">

<ShieldCheck/>

<span>
منصة شكاوى الإمارات
</span>

</a>




<nav className={open ? "nav-links active":"nav-links"}>


<a href="/">
الرئيسية
</a>


<a href="/about">
من نحن
</a>

<a href="/#complaint-form">
  تقديم شكوى
</a>

<a href="/contact">
تواصل معنا
</a>


</nav>




<button
className="menu-btn"
onClick={()=>setOpen(!open)}
>

{
open ?
<X/>
:
<Menu/>
}

</button>


</div>


</header>

)

}


export default Navbar;