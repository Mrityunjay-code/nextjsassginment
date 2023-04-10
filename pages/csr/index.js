import { useState, useEffect } from "react"
import Link from "next/link"

import Layout from "@/components/layout"
import Post from "@/components/post"

export default function postsCSR() {
    const [posts, setPosts] = useState([])

    async function getUsers() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        setPosts(data)
        console.log(data);
    }
    useEffect(() => {
        getUsers()
    }, [])


    return (
        <Layout>
            <div className="container">
                <h3 className="text-center">POSTS LIST</h3>
                <div className="d-flex w-100 justify-content-around flex-wrap">
                    {posts.map((post) => {
                        return (
                            <Post post={post} ></Post>
                        )
                    })
                    }
                </div>
            </div>
        </Layout>
    )
}