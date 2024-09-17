import axios from "axios"
import { cookies } from "next/headers"

export async function getSession() {
    try {
        const session = cookies().get('token')
        return session
    } catch (error) {
        console.log(`Error getting session: ${error.message}`)
    }
}

export async function getUserData() {
    try {
        const token = cookies().get('token')
        const {data} = await axios({
            url: 'http://localhost:5000/get-user',
            method: 'GET',
            data: {
                token,
                testing: 'testing'
            }
        })
        return data
    } catch (error) {
        console.log(`Error getUserData: ${error}`)
    }
}