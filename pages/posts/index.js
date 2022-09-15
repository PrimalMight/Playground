import Post from "../../components/post"

export async function getStaticProps(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const JSONdata = await data.json()

    return {
        props: {
            posts: JSONdata
        }
    }
}

export default function Page({ posts }) {

    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <Post post_params={post}></Post>
                    
                </div>
            ))}
        </>
    )
}