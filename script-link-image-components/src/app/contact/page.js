import React from 'react'
import Script from 'next/script';

function page() {
  

  return (
    <>
    <Script>
{`alert("welcome to contact page")`}
  </Script>
    <div>
      This is contact page
    </div>
    </>
  )
}

export default page
export const metadata = {
  title: "This is contact Fackbook page",
  description: "This is contact Fackbook page where you contact meta ",
};