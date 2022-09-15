export default function ArticleListByCategory({ articles, category }) {

    return (
        <>
            <h2>Search results for category: {category}</h2>
            {articles.map(article => {
                return (
                    <div key={article.id}>
                        <span>{article.id}</span>
                        <span>{article.title}</span>
                        <span>{article.category}</span>
                    </div>
                )
            })}
        </>
    )
}

export async function getServerSideProps(context){
    const { params, req, res, query } = context

    console.log(req.headers.cookie)
    console.log(query) 
    res.setHeader('Set-Cookie', ['name=Repack'])

    const api_res = await fetch(`http://localhost:4000/news?category=${params.category}`)
    const data = await api_res.json()
    
    return {
        props: {
            articles: data,
            category: params.category
        }
    }
}