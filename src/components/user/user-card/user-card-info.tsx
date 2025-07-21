export interface UserCardsProps {
    name: string
    role: string
    status: 'ACTIVE' | 'INACTIVE' | 'PENDING'
}

export function UserCardInfo({ name, role, status }: UserCardsProps) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-zinc-900 font-semibold">{name}</span>
            <span className="text-zinc-700 text-sm">{role}</span>
            <span className="bg-emerald-500 text-white p-1 rounded-sm text-xs text-center w-max px-4">{status}</span>
        </div>
    )
}