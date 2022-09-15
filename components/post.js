import Link from "next/link";

export default function Post({ post_params }){
    return (
        <div className="flex flex-col border border-black p-6">
            <span>Author: {post_params.userId}</span>
            <span>Title: {post_params.title}</span>
            <div className="flex flex-col">
                {post_params.body.slice(0, 40)}...
                <Link href={`/posts/${post_params.id}`}>
                    <a>
                        Read more..
                    </a>
                </Link>
            </div>
        </div>
    )
}