import { Helmet } from "react-helmet-async";


function SEO({
title,
description,
url
}){

return (

<Helmet>


<title>
{title}
</title>


<meta
name="description"
content={description}
/>


<link
rel="canonical"
href={url}
/>


<meta
property="og:title"
content={title}
/>


<meta
property="og:description"
content={description}
/>


<meta
property="og:type"
content="website"
/>


</Helmet>

)

}


export default SEO;