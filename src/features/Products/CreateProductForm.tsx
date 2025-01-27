import { useForm, type SubmitHandler } from "react-hook-form";
import { Button, Input } from "../../ui";
import { createProductShema, type CreateProductDto } from "../../types/Product";
import { zodResolver } from "@hookform/resolvers/zod";

type Props ={
  onSubmit : (data: CreateProductDto) => void;
}

export const CreateProductForm = ( {onSubmit}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(createProductShema),
  });

  const handleRegistrationForm: SubmitHandler<CreateProductDto> = (
    data
  ) => {
    onSubmit(data)
  };

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(handleRegistrationForm)}
    >
      <Input
        label="Name"
        {...register("name")}
                error={errors.name}
      ></Input>
      <Input
        label="Description"
        {...register("description")}
               error={errors.description}
      ></Input>
      <Input
        label="price"
        {...register("price", {valueAsNumber:true})}
        error={errors.price}
        type="number"
      ></Input>
      <Button label="Send" type="submit" />
    </form>
  );
};
