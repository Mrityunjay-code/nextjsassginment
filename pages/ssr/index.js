import Link from "next/link";

import Layout from "../../components/layout";
import Loading from "@/components/loading";


export default function Users({ data }) {
    return (
        <Layout >
            <div className="container ">
                <div className="table-responsive">
                    
                    {/* spinner  */}
                    {data.length == 0 ?
                        <div className="d-flex justify-content-center"> <Loading /></div> :

                        <table className="table table-striped ">
                            <thead>
                                <tr className="table-dark">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Username</th>
                                    <th>Mail</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    data.map((user) => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.image}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    {/* //ESTO ES UNA PARTE IMPORTANTE  */}
                                                    <Link href={`/ssr/${user.id}`} legacyBehavior >
                                                        <a >See more...</a>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </ Layout>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    // ordering by name 
    const sortedData = data.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase   
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });



    return {
        props: {
            data: sortedData
        }
    }
}