import { useQuery } from "@tanstack/react-query"

export interface Role{
    id: number
	name: string
	description: string
	createdAt: Date
	updatedAt: Date
}

export interface FetchRolesResponse {
    roles: Role[]
}

export const useFetchRoles = () => {
    return useQuery({
        queryKey: ['roles'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3366/roles')

            const result: FetchRolesResponse = await response.json()

            console.log(result)

            return result
        }
    })    
}