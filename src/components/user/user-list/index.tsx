import { useFetchEmployees, type EmployeeFiltered, type PaginationParams } from "@/http/use-fetch-employees";
import { UserCard } from "../user-card";
import { UserCardAvatar } from "../user-card/user-card-avatar";
import { UserCardInfo } from "../user-card/user-card-info";

export interface UserListProps {
    paginationParams: PaginationParams
    employeeFiltered: EmployeeFiltered
}

export function UserList({ paginationParams, employeeFiltered }: UserListProps) {
    const { data, isPending, isError } = useFetchEmployees(paginationParams, employeeFiltered)

    if (isPending) {
        return <div>Carregando dados...</div>
    }

    if (isError) {
        return <div>Erro ao carregar os dados.</div>
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full border rounded-2xl shadow-2xs bg-zinc-100 p-2">
                {data && data.employees.map((employee) => (
                    <UserCard.UserCardContent key={employee.id}>
                        <div className="flex gap-2 items-center">
                            <UserCardAvatar />
                            <UserCardInfo name={employee.name} role={employee.role} status={employee.status} />
                        </div>
                        <div>
                            <UserCard.UserCardFooter location={employee.location} />
                        </div>
                    </UserCard.UserCardContent>
                ))}
            </div>
        </>
    )
}