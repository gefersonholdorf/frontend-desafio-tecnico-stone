import { Briefcase, MapPinned } from "lucide-react";

export interface UserCardFooterProps {
    location: string
}

export function UserCardFooter({ location }: UserCardFooterProps) {
    return (
        <div className="flex gap-2 p-2 justify-between items-center">
            <div className="flex gap-1 items-center">
                <MapPinned size={15} />
                <span className="text-sm text-zinc-600">{location}</span>
            </div>

            <div className="flex gap-1 items-center">
                <Briefcase size={15} />
                <span className="text-sm text-zinc-600">2 anos</span>
            </div>
        </div>
    )
}