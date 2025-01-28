import { useForm, type SubmitHandler } from "react-hook-form";
import { Button, Input } from "../../ui";
import { type RegistrationFormData, validationSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegistrationFormRefsHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-2 dark:text-white"
      onSubmit={handleSubmit(handleRegistrationForm)}
    >
      <Input
        label="E-mail"
        {...register("email")}
        // type="email"
        error={errors.email}
      ></Input>
      <Input
        label="Password"
        {...register("password")}
        type="password"
        error={errors.password}
      ></Input>
      <Input
        label="Language"
        {...register("language")}
        error={errors.language}
      ></Input>
      <Button label="Send" type="submit" />
    </form>
  );
};
