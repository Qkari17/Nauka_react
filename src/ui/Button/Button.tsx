import { type ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
  label: string;
  // onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">;

export const Button = ({ label, className, ...rest }: Props) => {
  return (
    <button
      className={cn(
        "px-4 py-1 text-sm text-white bg-blue-600 rounded-full border dark:bg-green-400 to-blue-200 hover:bg-blue-500 disabled:bg-gray-500",
        className
        //  {"bg-red-500" : label='Refresh'}
      )}
      {...rest}
    >
      {label}
    </button>
  );
};
