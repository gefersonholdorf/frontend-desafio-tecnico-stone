import { Card } from "@/components/ui/card";
import { Check, Loader, X } from "lucide-react";

export function CardCount() {
    return (
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
            <Card className="flex flex-row items-center justify-between px-6">
                <div className="flex items-center gap-1">
                    <Check />
                    <span className="font-medium text-zinc-900">Ativos</span>
                </div>
                <div>
                    <span className="font-bold text-zinc-950 text-3xl text-shadow-2xs">6</span>
                </div>
            </Card>
            <Card className="flex flex-row items-center justify-between px-6">
                <div className="flex items-center gap-1">
                    <X />
                    <span className="font-medium text-zinc-900">Inativos</span>
                </div>
                <div>
                    <span className="font-bold text-zinc-950 text-3xl text-shadow-2xs">6</span>
                </div>
            </Card>
            <Card className="flex flex-row items-center justify-between px-6">
                <div className="flex items-center gap-1">
                    <Loader />
                    <span className="font-medium text-zinc-900">Pendente</span>
                </div>
                <div>
                    <span className="font-bold text-zinc-950 text-3xl text-shadow-2xs">6</span>
                </div>
            </Card>
        </div>
    )
}