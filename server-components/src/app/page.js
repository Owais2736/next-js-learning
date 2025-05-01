'use client'

import { useState } from "react";
export default function Home() {
  const [count , setCount] = useState(0)
  console.log("Hey i am log in client console because this page is server side by default");
  return (
  <div>
this is count {count}
<br></br>
<button onClick={()=>{setCount(count +1)}}>Icreament</button>
  </div>

  );
}
