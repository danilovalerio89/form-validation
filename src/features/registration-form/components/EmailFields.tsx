import { Field, Input } from "@chakra-ui/react";
import type { UseFormReturn } from "react-hook-form";
import type { RegistrationFormData } from "@/features/registration-form/schemas/registrationSchema";

interface EmailFieldsProps {
  form: UseFormReturn<RegistrationFormData>;
}

export function EmailFields({ form }: EmailFieldsProps) {
  const { register, formState } = form;
  const { errors } = formState;

  return (
    <>
      <Field.Root invalid={!!errors.email}>
        <Field.Label>Email address</Field.Label>
        <Input type="email" {...register("email")} />
        {errors.email && (
          <Field.ErrorText>{errors.email.message}</Field.ErrorText>
        )}
      </Field.Root>

      <Field.Root invalid={!!errors.confirmEmail}>
        <Field.Label>Confirm Email address</Field.Label>
        <Input type="email" {...register("confirmEmail")} />
        {errors.confirmEmail && (
          <Field.ErrorText>{errors.confirmEmail.message}</Field.ErrorText>
        )}
      </Field.Root>
    </>
  );
}
