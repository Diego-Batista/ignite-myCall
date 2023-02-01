import { Calendar } from "../../../../../components/Calendar";
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from "./styles";

export function CalendarStep() {

  const isDateSelected = false;

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            terça-feira, <span>20 de setembro</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem disabled>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem disabled>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}
