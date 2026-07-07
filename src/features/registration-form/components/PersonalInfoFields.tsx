import { Field, Input } from "@chakra-ui/react";
import type { UseFormReturn } from "react-hook-form";
import type { RegistrationFormData } from "@/features/registration-form/schemas/registrationSchema";

interface PersonalInfoFieldsProps {
  form: UseFormReturn<RegistrationFormData>;
}

export function PersonalInfoFields({ form }: PersonalInfoFieldsProps) {
  const { register, formState } = form;
  const { errors } = formState;

  return (
    <>
      <Field.Root invalid={!!errors.name}>
        <Field.Label>Name</Field.Label>
        <Input {...register("name")} />
        {errors.name && (
          <Field.ErrorText>{errors.name.message}</Field.ErrorText>
        )}
      </Field.Root>

      <Field.Root invalid={!!errors.lastName}>
        <Field.Label>Last Name</Field.Label>
        <Input {...register("lastName")} />
        {errors.lastName && (
          <Field.ErrorText>{errors.lastName.message}</Field.ErrorText>
        )}
      </Field.Root>
    </>
  );
}
