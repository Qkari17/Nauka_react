import { ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";
import { FieldError } from "react-hook-form";
import { cn } from "../../utils/cn";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div>
        <label className="mr-2" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...rest}
          className={cn({
            " border-2 border-red-500 text-red-500 ring-red-300 placeholder:text-red-300 focus:ring-red-500 ":
              error,
          })}
        ></input>
        {error && <p className="text-red-500"> {error?.message}</p>}
      </div>
    );
  }
);
