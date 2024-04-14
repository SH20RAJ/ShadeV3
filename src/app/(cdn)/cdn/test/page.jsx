"use client"
import { useState } from "react"
export default function Home() {
const [file, setFile]= useState()
const onSubmit = async (e) => { 
  e.preventDefault();
  console.log(file);
  let data = new FormData();
  data.set("file", file)
  let res = await fetch("/api/upload", {
    method: "POST",
    body: data,
  })
  let response = await res.json()
  console.log(response);
}
return(
  <>
  
  <form onSubmit={onSubmit}>
    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
    <br />
    <button type="submit">Upload</button>
  </form>
  </>
)
}