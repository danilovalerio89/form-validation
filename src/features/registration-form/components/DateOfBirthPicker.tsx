import { DatePicker, Field, Portal } from "@chakra-ui/react";
import { Controller, type UseFormReturn } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";
import { parseDate, type DateValue } from "@internationalized/date";
import type { RegistrationFormData } from "@/features/registration-form/schemas/registrationSchema";

interface DateOfBirthPickerProps {
  form: UseFormReturn<RegistrationFormData>;
}

function toDateValue(date: Date | null | undefined): DateValue[] {
  if (!date) return [];
  const isoDate = date.toISOString().split("T")[0];
  return [parseDate(isoDate)];
}

function toNativeDate(values: DateValue[]): Date | null {
  if (!values[0]) return null;
  const { year, month, day } = values[0];
  return new Date(year, month - 1, day);
}

function maxDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function DateOfBirthPicker({ form }: DateOfBirthPickerProps) {
  const { control, formState } = form;
  const { errors } = formState;

  const date = maxDate();

  return (
    <Controller
      control={control}
      name="dateOfBirth"
      render={({ field }) => (
        <Field.Root invalid={!!errors.dateOfBirth}>
          <DatePicker.Root
            max={parseDate(date)}
            maxWidth="20rem"
            value={toDateValue(field.value)}
            onValueChange={(e) => field.onChange(toNativeDate(e.value))}
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
