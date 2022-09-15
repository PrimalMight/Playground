import { useState } from "react"
import { useRouter } from "next/router"

export async function getServerSideProps(context){
    const { query } = context
    const { category } = query 
    const queryString = category ? `category=${category}` : ''

    const res = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await res.json()

    return {
        props: {
            eventList: data
        }
    }
}

export default function EventList({ eventList }) {
    const [ currentEventList, setCurrentEventList ] = useState(eventList)
    const router = useRouter()

    const handleClick = async (category) => {
        const res = await fetch(`http://localhost:4000/events?category=${category}`)
        const data = await res.json()

        setCurrentEventList(data)

        // shallow route = doesnt retrigger getXProps and doesnt reroute
        // allows us to bookmark a page with current active queries or refresh with 
        // current active queries for example
        router.push(`/events?category=${category}`, undefined, { shallow: true})
    }

    return (
        <> 
            <div className="flex justify-around">
                <button onClick={() => {handleClick("sports")}}>Sports Events</button>
                <button onClick={() => {handleClick("technology")}}>Technology Events</button>
                <button onClick={() => {handleClick("food")}}>Food Events</button>    
            </div>


            <h1>List of events</h1>
            {currentEventList.map(event => {
                return (
                    <div key={event.id}>
                        <span>Event id - {event.id}</span>
                        <span>Event title - {event.title}</span>
                        <span>Event description - {event.description}</span>
                        <span>Event category - {event.category}</span>
                        <span>Event date - {event.date}</span>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}