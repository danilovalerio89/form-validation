import { DatePicker, Field, Portal } from "@chakra-ui/react";
import { Controller, type UseFormReturn } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";
import type { RegistrationFormData } from "@/features/registration-form/schemas/registrationSchema";

interface DateOfBirthPickerProps {
  form: UseFormReturn<RegistrationFormData>;
}

export function DateOfBirthPicker({ form }: DateOfBirthPickerProps) {
  const { control, formState } = form;
  const { errors } = formState;

  return (
    <Controller
      control={control}
      name="dateOfBirth"
      render={({ field }) => (
        <Field.Root invalid={!!errors.dateOfBirth}>
          <DatePicker.Root
            maxWidth="20rem"
            value={field.value ? [field.value] : []}
            onValueChange={(e) => field.onChange(e.value[0] ?? null)}
          >
            <DatePicker.Label>Date of birth</DatePicker.Label>
            <DatePicker.Control>
              <DatePicker.Input onBlur={field.onBlur} />
              <DatePicker.IndicatorGroup>
                <DatePicker.Trigger>
                  <LuCalendar />
                </DatePicker.Trigger>
              </DatePicker.IndicatorGroup>
            </DatePicker.Control>
            <Portal>
              <DatePicker.Positioner>
                <DatePicker.Content>
                  <DatePicker.View view="day">
                    <DatePicker.Header />
                    <DatePicker.DayTable />
                  </DatePicker.View>
                  <DatePicker.View view="month">
                    <DatePicker.Header />
                    <DatePicker.MonthTable />
                  </DatePicker.View>
                  <DatePicker.View view="year">
                    <DatePicker.Header />
                    <DatePicker.YearTable />
                  </DatePicker.View>
                </DatePicker.Content>
              </DatePicker.Positioner>
            </Portal>
          </DatePicker.Root>
          {errors.dateOfBirth && (
            <Field.ErrorText>{errors.dateOfBirth.message}</Field.ErrorText>
          )}
        </Field.Root>
      )}
    />
  );
}
