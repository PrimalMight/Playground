import Link from "next/link"

export default function Article({ article_params }) {
  return (
    <>
        <div className="flex flex-col border border-black p-6">
            <span>Category: {article_params.category}</span>
            <span>Title: {article_params.title}</span>
            <div className="flex flex-col">
                <Link href={`/news/${article_params.id}`}>
                    <a>
                        Read more..
                    </a>
                </Link>
            </div>
        </div>
    </>
  )
}