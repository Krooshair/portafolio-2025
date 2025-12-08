import { z } from 'zod'

export const FormSchema = z.object({
  company: z.string({ error: 'Debe ser una cadena de texto' }).max(100, 'Tiene un maximo de 100 caracteres').nonempty("Este campo es obligatorio"),
  phone: z.string({ error: 'Debe ser una cadena de texto' }).max(100, 'Tiene un maximo de 20 caracteres').nonempty("Este campo es obligatorio"),
  message: z.string({ error: 'Debe ser una cadena de texto' }).max(1500, 'Tiene un maximo de 1500 caracteres'),
})

export type FormDto = z.infer<typeof FormSchema>
