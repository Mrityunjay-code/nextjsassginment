import { useState, useEffect, useRef } from "react"
import Link from "next/link"

import Layout from "@/components/layout"
import Post from "@/components/post"
import Loading from "@/components/loading"

export default function PostsCSR() {
    const [posts, setPosts] = useState([])
    const [original, setOriginal] = useState([])

    const input = useRef()



    async function getUsers() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        setOriginal(data)
        setPosts(data)
    }
    useEffect(() => {
        getUsers()
    }, [])


    // funciones 
    const search = (e) => {
        e.preventDefault()
        let txt = input.current.value

        let filtered = original.filter((el) => el.title.includes(txt))
        console.log("filtered", filtered);
        setPosts(filtered);
    }
    const clear = () => {
        input.current.value = ""
        setPosts(original);
    }

    return (
        <Layout>

            <div className="container mb-4">

                <div className="d-flex justify-content-end">
                    <form className="d-flex" onSubmit={search}>
                        <input className="form-control me-2" ref={input} type="text" />
                        <button className="btn btn-primary me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                        <button onClick={clear}>Show All</button>
                    </form>
                </div>

                <div className="mb-4">
                    <h3 className="text-center">POSTS LIST</h3>

                    {posts.length == 0 ? 
                    <div className="d-flex justify-content-center"> <Loading /></div> :

                        <div className="d-flex w-100 justify-content-around flex-wrap">
                            {posts.map((post) => {
                                return (
                                    <Post key={post.id} post={post} ></Post>
                                )
                            })
                            }
                        </div>
                    }
                </div>
            </div>
        </Layout>
    )
}