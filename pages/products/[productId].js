import { useRouter } from "next/router"

export default function Product({ product }) {
    const router = useRouter()

    if(router.isFallback){
        return(
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h2>
                {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
            <hr />
        </div>
    )
}

export async function getStaticProps(context){
    const { params } = context
    const res = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await res.json()

    return {
        props: {
            product: data
        },
        revalidate: 10,
    }
}

export async function getStaticPaths(){
    const res = await fetch('http://localhost:4000/products')
    const products_data = await res.json()
    const paths = products_data.map(product => {
        return { params: {
            productId: `${product.id}`
        }}
    })
    
    return {
        paths: paths,
        fallback: true
    }
}