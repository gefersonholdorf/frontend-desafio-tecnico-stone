import { CardCount } from "@/components/user/card-count/card-count";
import { CardHeader } from "@/components/user/card-header/card-header";
import { UserFiltered } from "@/components/user/user-filtered/user-filtered";
import { UserList } from "@/components/user/user-list";
import { useSearchParams } from "react-router";

export function Employees() {
    const [searchParams, setSearchParams] = useSearchParams()

    const pagination = {
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
        totalPerPage: searchParams.get('totalPerPage') ? Number(searchParams.get('totalPerPage')) : 2,
        orderBy: searchParams.get('orderBy') || 'id',
        direction: searchParams.get('direction') as 'asc' | 'desc' || 'desc'
    }

    const employeeFiltered = {
        name: searchParams.get('name') || undefined,
        location: searchParams.get('location') || undefined,
        roleId: searchParams.get('roleId') ? Number(searchParams.get('roleId')) : undefined,
        status: (searchParams.get('status') as 'ACTIVE' | 'INACTIVE' | 'PENDING') || undefined
    }

    return (
        <div className="flex flex-col p-8 m-auto">
            <CardHeader />
            <CardCount />
            <UserFiltered />
            <div className="mt-6">
                <UserList paginationParams={pagination} employeeFiltered={employeeFiltered} />
                {searchParams.get('page')}
            </div>
        </div >
    )
}