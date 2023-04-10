import React from 'react'
import Link from 'next/link'

export default function Post(props) {
    return (

        <div className='postContainer' style={{
            padding: "15px", marginBottom: "15px",
            borderRadius: "10px", background: "silver",
            width: "45%", minHeight: "150px", 
            display:"flex", alignItems:"center"
             }}>

            <div className='postContainerInner'>
                <h5><u>Title</u>: {props.post.title}  </h5>
                <h6><u>Owner:</u> {props.post.userId}
                    <Link href={`/csr/${props.post.id}`} legacyBehavior>
                        <a className="text-decoration-none"> - Read more...</a>
                    </Link>
                </h6>
                <hr />
            </div>

        </div>

    )
}
