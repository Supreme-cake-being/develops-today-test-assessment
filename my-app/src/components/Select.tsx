import { Dispatch, SetStateAction, useState } from 'react';

interface IProps {
  options?: Record<string, any> | null;
  displayNameField?: string;
  label: string;
  onChange: Dispatch<SetStateAction<any>>;
  selected?: Record<string, any>;
  loading?: boolean;
}

const Select = ({
  options,
  displayNameField = 'id',
  label,
  onChange,
  selected,
  loading = false,
}: IProps) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex flex-col basis-3/6 gap-2">
      <p className="capitalize font-sans sm:text-sm md:text-md lg:text-lg">
        {label}
      </p>

      <div
        className="relative sm:p-sm md:p-md lg:p-lg border rounded-2xl border-gray"
        onClick={() => setShowOptions(!showOptions)}>
        <p className="capitalize font-sans sm:text-sm md:text-md lg:text-lg text-gray">
          {selected
            ? selected[displayNameField].toLowerCase()
            : loading
            ? 'Loading...'
            : 'Click to choose'}
        </p>

        {showOptions && (
          <div className="cursor-pointer absolute top-full left-0 z-50 w-full sm:p-sm md:p-md lg:p-lg bg-white border rounded-2xl border-gray">
            {options?.map((option: Record<string, any>) => (
              <div
                key={option[displayNameField]}
                className="cursor-pointer capitalize hover:bg-light-gray"
                onClick={() => onChange(option)}>
                {option[displayNameField].toLowerCase()}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
