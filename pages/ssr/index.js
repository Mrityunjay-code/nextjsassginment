import Link from "next/link";

import Layout from "../../components/layout";

export default function Users({ data }) {
    return (
        <Layout >
            <div className="container ">
                <div className="table-responsive">
                <table className="table table-striped ">
                    <thead>
                        <tr className="table-dark">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Mail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
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
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </ Layout>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}