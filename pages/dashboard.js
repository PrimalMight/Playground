import { useState, useEffect } from 'react'

export default function Dashboard() {
    const [ isLoading, setisLoading ] = useState(true)
    const [ dashboardData, setDashboarData] = useState(null)

    useEffect(() => {
        async function fetchDashboardData() {
            const res = await fetch('http://localhost:4000/dashboard')
            const data = await res.json()

            setDashboarData(data)
            setisLoading(false)
        }

        fetchDashboardData()
    }, [])

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }
    if(!dashboardData){
        return (
            <div>No profile data...</div>
        )
    }

    return (
        <div>
            <h2>Dashboard</h2>
            
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>

        </div>
    )
}