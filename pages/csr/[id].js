import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/layout";

export default function PostCSR(){
    const [post, setPost] = useState("");
    const router = useRouter()

  
    async function getPost(){
        const url = `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
        const res = await fetch(url)
        const individualPost = await res.json()
        setPost(individualPost)
    }

    useEffect(()=>{
        getPost()
    },[])

    const back= ()=>{
        window.history.back()
    }

    return(
        <Layout>
        <div className="container col-6 marign-auto">
            <h1></h1>
            <h3>Post number{post.id} </h3>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <br />
            <button className="btn btn-primary" onClick={back}>Back...</button>
        </div>
        </Layout>
    )
}