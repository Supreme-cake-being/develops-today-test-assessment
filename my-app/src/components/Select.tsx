import { Dispatch, SetStateAction, useState } from 'react';

interface IProps {
  options: Record<string, any>;
  displayNameField?: string;
  label: string;
  onChange: Dispatch<SetStateAction<number | undefined>>;
  selected?: string | number;
}

export const Select = ({
  options,
  displayNameField = 'id',
  label,
  onChange,
  selected,
}: IProps) => {
  const [showOptions, setShowOptions] = useState(false);

  console.log(selected);

  return (
    <div className="flex flex-col gap-2">
      <p className="capitalize font-sans sm:text-sm md:text-md lg:text-lg">
        {label}
      </p>

      <div
        className="relative sm:p-select-sm md:p-select-md lg:p-select-lg border rounded-2xl border-light-gray"
        onClick={() => setShowOptions(!showOptions)}>
        <p className="capitalize font-sans sm:text-sm md:text-md lg:text-lg text-light-gray">
          {selected || 'Click to choose'}
        </p>

        {showOptions && (
          <div className="cursor-pointer absolute top-full left-0 z-50 w-full sm:p-select-sm md:p-select-md lg:p-select-lg bg-white border rounded-2xl border-light-gray">
            {options.map((option: Record<string, any>) => (
              <div key={option.id} onClick={() => onChange(option.id)}>
                {option[displayNameField]}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
