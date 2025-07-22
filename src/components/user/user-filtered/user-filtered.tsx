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
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod/v4";

const formUserFilteredSchema = z.object({
    name: z.string().optional(),
    location: z.string().optional(),
    roleId: z.union([z.string(), z.number()]).optional(),
    status: z.enum(['ACTIVE', 'INACTIVE', 'PENDING']).optional(),
})

type FormUserFiltered = z.infer<typeof formUserFilteredSchema>

export function UserFiltered() {
    const { register, handleSubmit, control } = useForm<FormUserFiltered>({
        resolver: zodResolver(formUserFilteredSchema),
        defaultValues: {
            name: '',
            location: '',
            roleId: undefined,
            status: undefined
        }
    })

    function filteredOnSubmit(data: FormUserFiltered) {
        console.log('Teste')
        console.log(data)
    }

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
            <form onSubmit={handleSubmit(filteredOnSubmit)}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-2">
                    <Input {...register('name')} className="bg-white shadow-2xl text-zinc-500 font-semibold" placeholder="Digite pelo nome do funcionário" />
                    <div>
                        <Controller
                            control={control}
                            name="roleId"
                            render={({ field }) => (
                                <Combobox
                                    value={field.value}
                                    onChange={field.onChange}
                                    values={roles}
                                    placeholder="Selecione o cargo"
                                />
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="location"
                            render={({ field }) => (
                                <Combobox
                                    value={field.value}
                                    onChange={field.onChange}
                                    values={roles}
                                    placeholder="Selecione a cidade"
                                />
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="status"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="w-full bg-white text-zinc-500 font-semibold">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ACTIVE">Ativo</SelectItem>
                                        <SelectItem value="INACTIVE">Inativo</SelectItem>
                                        <SelectItem value="PENDING">Pendente</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>
                    <Button type="submit"><Search /> Filtrar</Button>
                </div>
            </form>
        </>
    )
}