import React from 'react'
import Script from 'next/script';

function page() {
  return (
<>
<Script>

{`alert("welcome to about page")`}

</Script>
    <div>
      This is about page
    </div>
    
    
    
</>
  )
}

export default page
export const metadata = {
  title: "This is about Fackbook page",
  description: "This is about Fackbook page that is connect people all over the world",
};