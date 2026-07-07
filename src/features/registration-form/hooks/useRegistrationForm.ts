import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  type RegistrationFormData,
} from "@/features/registration-form/schemas/registrationSchema";
import { registrationService } from "@/features/registration-form/services/registrationService";

export function useRegistrationForm() {
  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      country: "",
      acceptTerms: false,
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await registrationService.submit(data);
    form.reset();
  });

  return { form, onSubmit };
}
