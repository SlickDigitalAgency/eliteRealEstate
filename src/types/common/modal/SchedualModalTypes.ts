export interface ScheduleModalProps {
  trigger?: React.ReactNode;
  onSubmit?: (formData: ScheduleFormData) => void;
}

export interface ScheduleFormData {
  name: string;
  email: string;
  phone: string;
  date: Date | undefined;
  time: string;
  needs: string;
}
