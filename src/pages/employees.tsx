import { CardCount } from "@/components/user/card-count/card-count";
import { CardHeader } from "@/components/user/card-header/card-header";
import { UserFiltered } from "@/components/user/user-filtered/user-filtered";
import { UserList } from "@/components/user/user-list";

export function Employees() {
    return (
        <div className="flex flex-col p-8 m-auto">
            <CardHeader />
            <CardCount />
            <UserFiltered />
            <div className="mt-6">
                <UserList />
            </div>
        </div >
    )
}