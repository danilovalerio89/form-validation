import { Field, For, NativeSelect } from "@chakra-ui/react";
import type { UseFormReturn } from "react-hook-form";
import type { RegistrationFormData } from "@/features/registration-form/schemas/registrationSchema";
import { COUNTRIES } from "@/features/registration-form/constants/countries";

interface CountrySelectProps {
  form: UseFormReturn<RegistrationFormData>;
}

export function CountrySelect({ form }: CountrySelectProps) {
  const { register, formState } = form;
  const { errors } = formState;

  return (
    <Field.Root invalid={!!errors.country}>
      <Field.Label>Country</Field.Label>
      <NativeSelect.Root>
        <NativeSelect.Field {...register("country")} defaultValue="">
          <option value="" disabled>
            Select a country
          </option>
          <For each={COUNTRIES}>
            {(item) => (
              <option key={item} value={item}>
                {item}
              </option>
            )}
          </For>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      {errors.country && (
        <Field.ErrorText>{errors.country.message}</Field.ErrorText>
      )}
    </Field.Root>
  );
}
