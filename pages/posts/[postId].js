import { useRouter } from "next/router"
import { stringify } from "postcss"

export async function getStaticProps(context){
    const { params } = context

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    
    
    // const paths = data.map(post => {
    //     return { params: {
    //         postId: `${post.id}`
    //     }}
    // })

    return {
      paths: [
        {
            params: { postId: '1' },
        },
        {
            params: { postId: '2' },
        },
        {
            params: { postId: '3' },
        }
      ],
      fallback: true
    }
  }

export default function PostPage({ post }) {
    const router = useRouter()

    if(router.isFallback){
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>{JSON.stringify(post)}</div>
    )
}