import { useQuery } from "@tanstack/react-query"

export interface PaginationParams {
	totalPerPage?: number
	page?: number
	orderBy?: string
	direction?: 'asc' | 'desc'
}

export interface EmployeeFiltered {
	name?: string
    location?: string
    roleId?: number
    status?: 'ACTIVE' | 'INACTIVE' | 'PENDING'
}

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

export const useFetchEmployees = (paginationParams: PaginationParams, employeeFiltered: EmployeeFiltered) => {
    return useQuery({
        queryKey: ['fetch-employees', paginationParams, employeeFiltered],
        queryFn: async () => {
			const params = new URLSearchParams()

			if (paginationParams.page) params.append('page', String(paginationParams.page))
			if (paginationParams.totalPerPage) params.append('totalPerPage', String(paginationParams.totalPerPage))
			if (paginationParams.orderBy) params.append('orderBy', String(paginationParams.orderBy))
			if (paginationParams.direction) params.append('direction', String(paginationParams.direction))

			if (employeeFiltered.name) params.append('name', employeeFiltered.name)
			if (employeeFiltered.location) params.append('location', employeeFiltered.location)
			if (employeeFiltered.roleId !== undefined) params.append('roleId', String(employeeFiltered.roleId))
			if (employeeFiltered.status) params.append('status', employeeFiltered.status)

			const response = await fetch(`http://localhost:3366/employees?${params.toString()}`)
			const result: FetchEmployeesResponse = await response.json()
			return result
		},

    })
}