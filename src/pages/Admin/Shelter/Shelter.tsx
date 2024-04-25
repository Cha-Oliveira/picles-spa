import { useForm } from "react-hook-form";
import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from './Shelter.module.css'
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormMask } from "use-mask-input";

const shelterSchema = z.object ({
    name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres.').max(30, 'Nome deve ter no mínimo 2 caracteres.'),
    email: z.string().email('Campo de ser um email.'), phone: z.string().refine((value) => {
        const digits = value.replace(/\D/g,'').length
        return digits >= 10 && digits <= 11
    }, 'Numero deve ter entre 10 e 11 caracteres'), WhatsApp: z.string().refine((value) => {
        const digits = value.replace(/\D/g,'').length
        return digits >= 10 && digits <= 11
    }),
})
type ShelterSchema = z.infer<typeof shelterSchema>

export function Shelter (){
    const{handleSubmit, register, formState} = useForm<ShelterSchema>({
        resolver: zodResolver(shelterSchema)
    })

    const registerWithMask = useHookFormMask(register)

    function submit({name, email, phone, WhatsApp}: ShelterSchema){
        
    }

    return (
    <Panel>
        <form className={styles.container} onSubmit = {handleSubmit(submit)}>
        <div>
            <Input label = "Nome" {...register('name')}/>
            {formState.errors?.name && <p className={styles.formError}>{formState.errors.name.message}</p>}
        </div>
        <div>
            <Input label = "Email" {...register('email')}/>
            {formState.errors?.email && <p className={styles.formError}>{formState.errors.email.message}</p>}
        </div>
        <div>
            <Input label = "Telefone" {...registerWithMask('phone', ['99 9999-9999', '99 99999-9999'])}/>
            {formState.errors?.phone && <p className={styles.formError}>{formState.errors.phone.message}</p>}
        </div>
        <div>
            <Input label = "WhatsApp" {...registerWithMask('WhatsApp', ['99 9999-9999', '99 99999-9999'])}/>
            {formState.errors?.WhatsApp && <p className={styles.formError}>{formState.errors.WhatsApp.message}</p>}
        </div>
        <Button type="submit">Salvar Dados</Button>
        </form>
    </Panel>
)
}