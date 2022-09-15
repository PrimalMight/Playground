import { comments } from '../../data/comments'

export default function Comment({ comment }) {
    return (
      <div>
        {comment.id} {comment.text}
      </div>
    )
}



export async function getStaticProps(context){
    // DONT DO THIS, DONT CALL YOUR OWN APIS FROM SERVER -  YOU SHOULD HAVE
    // ALL DATA NECCESARY AVAILABLE FROM SERVER, NO NEED TO CALL OWN API`S
    // const res = await fetch(`/api/comments/${context.commentId}`)
    // const data = res.json()
    const { params } = context
    const comment = comments.find(comment => comment.id === parseInt(params.commentId))


    return {
        props: {
            comment
        }
    }
}

export async function getStaticPaths(){
    const result = comments.map(comment => {
        return { params: {
            commentId: `${comment.id}`
        }}
    })

    return {
        paths: result,
        fallback: false
    }
}