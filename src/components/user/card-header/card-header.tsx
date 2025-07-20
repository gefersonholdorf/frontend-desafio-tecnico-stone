import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, IdCardLanyard, Luggage, User } from "lucide-react";

export function CardHeader() {
    return (
        <>
            <div className="flex items-center gap-1 mb-2">
                <ChevronLeft size={15} />
                Voltar
            </div>
            <Card className="flex flex-col md:flex-row gap-1 items-center bg-white rounded-2xl p-2 justify-between">
                <div className="flex items-center gap-1">
                    <IdCardLanyard />
                    <h1 className="text-2xl font-bold text-shadow-2xs">Gerenciar Funcionários</h1>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-1">
                    <Button className="w-full md:w-max">
                        <Luggage size={15} />
                        Adicionar Cargo
                    </Button>

                    <Button className="w-full md:w-max">
                        <User size={15} />
                        Adicionar Funcionário
                    </Button>
                </div>
            </Card>
        </>
    )
}