import { FC } from "react";
import { Switch } from "@headlessui/react";

interface SwitchProps {
  enabled: boolean;
  setEnabled: (checked: boolean) => void;
  label?: string;
}

const ValueSwitch: FC<SwitchProps> = ({ enabled, setEnabled, label }) => {
  return (
    <div className="flex items-center">
      {label && (
        <span className="text-sm font-medium text-gray-900 dark:text-gray-300 mr-2">
          {label}
        </span>
      )}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};

export default ValueSwitch;
