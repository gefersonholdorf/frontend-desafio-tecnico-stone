import { useQuery } from "@tanstack/react-query"

export interface FetchEmployeesResponse {
    total: number
	page: number
	totalPerPage: number
	totalPages: number
	employees: {
			id: number
			name: string
			email: string
			location: string
			dateContract: Date
			status: 'ACTIVE' | 'INACTIVE' | 'PENDING'
			roleId: number
			role: string
		}[]
}

export const useFetchEmployees = () => {
    return useQuery({
        queryKey: ['fetch-employees'],
        queryFn: async() => {
            const response = await fetch('http://localhost:3366/employees')

            const result: FetchEmployeesResponse = await response.json()

            console.log(result)
            return result
        }
    })
}