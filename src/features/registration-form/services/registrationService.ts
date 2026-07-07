import type { RegistrationFormData } from "@/features/registration-form/schemas/registrationSchema";

export const registrationService = {
  submit: async (data: RegistrationFormData): Promise<{ success: boolean }> => {
    console.log("Enviando cadastro", data);
    return { success: true };
  },
};
