import { z } from "zod";

export const registrationSchema = z
  .object({
    name: z.string().min(5, "Nome é obrigatório"),
    lastName: z.string().min(5, "Sobrenome é obrigatório"),
    email: z.email("E-mail inválido"),
    confirmEmail: z.email("E-mail inválido"),
    country: z.string().min(1, "Selecione um país"),
    dateOfBirth: z.date({ error: "Data de nascimento é obrigatório" }),
    // acceptTerms: z.literal(true, {
    //   error: "Você precisa aceitar os termos",
    // }),
    acceptTerms: z.boolean().refine((v) => v === true),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Os e-mails não coincidem",
    path: ["confirmEmail"],
  });

export type RegistrationFormData = z.infer<typeof registrationSchema>;
