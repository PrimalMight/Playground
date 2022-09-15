import Article from "../../components/article"

export default function NewsList({ articles }) {

    return (
        <>
            <h1>List of News Articles</h1>
            {articles.map(article => (
                <div key={article.id}>
                    <Article article_params={article}></Article>
                    
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps(){
    const res = await fetch('http://localhost:4000/news')
    const data = await res.json()

    return {
        props: {
            articles: data
        }
    }
}