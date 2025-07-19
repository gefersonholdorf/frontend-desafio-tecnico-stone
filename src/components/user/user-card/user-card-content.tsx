import type { ReactNode } from "react";
import { Card } from "../../ui/card";

export interface UserCardContentProps {
    children: ReactNode
}

export function UserCardContent({ children }: UserCardContentProps) {
    return (
        <Card className="flex gap-2 p-3 hover:border-purple-500 hover:scale-105 transition-all duration-200 hover:bg-purple-50">
            {children}
        </Card>
    );
}