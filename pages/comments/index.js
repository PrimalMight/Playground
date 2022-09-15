import { useState } from "react"

export default function CommentsPage({ }) {
    const [ comments, setComments ] = useState([])
    const [ comment, setComment ] = useState('')

    const getComments = async () => {
        const res = await fetch('/api/comments')
        const data = await res.json()

        setComments(data)
    }

    const submitComment = async () => {
        const res = await fetch('/api/comments', {
                method: 'POST',
                body: JSON.stringify({ comment }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        const data = await res.json()

        console.log(data)
    }

    const deleteComment = async (id) => {
        const res = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        })

        const data = await res.json()

        getComments()
    }

    return (
      <div>
        <input type="text" value={comment} onChange={e => {setComment(e.target.value)}}/>
        <button onClick={submitComment}>Submit comment</button>
        <button onClick={getComments}>Load comments</button>
        {comments ? comments.map(comment => {
            return (
                <div key={comment.id}>
                    <span>{comment.text}</span>
                    <button className="border border-black" onClick={() => {deleteComment(comment.id)}}>Delete</button>
                </div>
            )
        }) : (<div>No comments</div>)}
      </div>
    )
}