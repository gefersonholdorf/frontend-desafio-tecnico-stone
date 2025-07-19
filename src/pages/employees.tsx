import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UserList } from "@/components/user/user-list";
import { Check, ChevronLeft, IdCardLanyard, Loader, Luggage, Search, User, X } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Combobox } from "@/components/ui/combobox";

export function Employees() {
    return (
        <div className="flex flex-col p-8 m-auto">
            <div className="flex items-center gap-1 mb-2">
                <ChevronLeft size={15} />
                Voltar
            </div>
            <Card className="flex flex-row gap-1 items-center bg-white rounded-2xl p-2 justify-between">
                <div className="flex items-center gap-1">
                    <IdCardLanyard />
                    <h1 className="text-2xl font-bold text-shadow-2xs">Gerenciar Funcionários</h1>
                </div>

                <div className="flex items-center gap-1">
                    <Button>
                        <Luggage size={15} />
                        Adicionar Cargo
                    </Button>

                    <Button>
                        <User size={15} />
                        Adicionar Funcionário
                    </Button>
                </div>
            </Card>
            <div className="grid w-full grid-cols-3 gap-4 mt-5">
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
            <div className="mt-5">
                Filtrar por:
            </div>
            <div className="w-full grid grid-cols-5 gap-2">
                <Input className="bg-white shadow-2xl text-zinc-500 font-semibold" placeholder="Digite pelo nome do funcionário" />
                <div>
                    <Combobox placeholder="Selecione o cargo" />
                </div>
                <div>
                    <Combobox placeholder="Selecione a cidade" />
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
            <div className="mt-6">
                <UserList />
            </div>
        </div >
    )
}