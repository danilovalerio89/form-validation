import { Checkbox, Field } from "@chakra-ui/react";
import { Controller, type UseFormReturn } from "react-hook-form";
import type { RegistrationFormData } from "@/features/registration-form/schemas/registrationSchema";

interface TermsCheckboxProps {
  form: UseFormReturn<RegistrationFormData>;
}

export function TermsCheckbox({ form }: TermsCheckboxProps) {
  const { control, formState } = form;
  const { errors } = formState;

  return (
    <Controller
      control={control}
      name="acceptTerms"
      render={({ field }) => (
        <Field.Root invalid={!!errors.acceptTerms}>
          <Checkbox.Root
            checked={field.value}
            onCheckedChange={(e) => field.onChange(!!e.checked)}
          >
            <Checkbox.HiddenInput onBlur={field.onBlur} />
            <Checkbox.Control />
            <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
          </Checkbox.Root>
          {errors.acceptTerms && (
            <Field.ErrorText>{errors.acceptTerms.message}</Field.ErrorText>
          )}
        </Field.Root>
      )}
    />
  );
}
