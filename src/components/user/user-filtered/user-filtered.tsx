import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useFetchRoles } from "@/http/use-fetch-roles";
import { Search } from "lucide-react";

export function UserFiltered() {

    const { data: fetchRoles, isPending } = useFetchRoles()

    if (isPending) {
        return <div>Carregando dados...</div>
    }

    const roles = fetchRoles!.roles.map((role) => {
        return {
            value: role.id,
            label: role.name
        }
    })

    return (
        <>
            <div className="mt-5">
                Filtrar por:
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-2">
                <Input className="bg-white shadow-2xl text-zinc-500 font-semibold" placeholder="Digite pelo nome do funcionário" />
                <div>
                    <Combobox values={roles} placeholder="Selecione o cargo" />
                </div>
                <div>
                    <Combobox values={roles} placeholder="Selecione a cidade" />
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-full bg-white text-zinc-500 font-semibold">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Ativo</SelectItem>
                            <SelectItem value="dark">Inativo</SelectItem>
                            <SelectItem value="system">Pendente</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button><Search /> Filtrar</Button>
            </div>
        </>
    )
}