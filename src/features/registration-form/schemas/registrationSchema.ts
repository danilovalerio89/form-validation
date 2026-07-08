import { z } from "zod";

export const registrationSchema = z
  .object({
    name: z.string().nonempty("Nome obrigatório").min(3, "Minimo de 3 letras"),
    lastName: z
      .string()
      .nonempty("Sobrenome obrigatório")
      .min(5, "Minimo de 3 letras"),
    email: z.email("E-mail inválido"),
    confirmEmail: z.email("E-mail inválido"),
    country: z.string().min(1, "Selecione um país"),
    dateOfBirth: z.date({ error: "Data de nascimento é obrigatório" }),
    acceptTerms: z.boolean().refine((v) => v === true),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Os e-mails não coincidem",
    path: ["confirmEmail"],
  });

export type RegistrationFormData = z.infer<typeof registrationSchema>;
