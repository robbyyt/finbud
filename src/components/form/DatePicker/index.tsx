import { ChangeEventHandler, FC } from "react";
import { formatDateForPicker } from "utils/date";

interface DatePickerProps {
  id: string;
  name: string;
  value: Date;
  label: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
}

const DatePicker: FC<DatePickerProps> = ({
  id,
  name,
  value,
  label,
  handleChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>

      <input
        type="date"
        id={id}
        name={name}
        value={formatDateForPicker(value)}
        onChange={handleChange}
        className="block outline-none p-2 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default DatePicker;
