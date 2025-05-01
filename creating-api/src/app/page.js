'use client';

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "owais",
      role: "coder",
    };

  
      let a = await fetch("/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

     let result = await a.json()
     console.log(result);
     
    
  };

  return (
    <>
      <div>
        <h1>Next.js API Routes</h1>
      </div>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
