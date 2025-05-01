import React from 'react'
import fs from 'fs/promises'
import Navbar from '@/components/Navbar.js'

function page() {
console.log("Hey i am log in server console because this page is server side by default");
// this is a server side components and its helpful to authenticate user with out showing data to user also 
//its not working on client side page
let a = fs.readFile(".gitignore")
a.then(e=>{ console.log(e.toString())
  
    
})
    
  return (
   <>
        <Navbar/>
        <br></br>
      I am a server page
      </>
  )
}

export default page
