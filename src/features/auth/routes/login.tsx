import React from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorLabel from "@/components/ui/error-label";
import { useLogin } from "@/features/auth/api/login";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(5).max(20),
  email: z
    .string()
    .min(8, { message: "Minimum 8 char" })
    .max(20, { message: "Maximum 20 char" }),
});

export type FormDataType = z.infer<typeof schema>;

const Login: React.FC = () => {
  const { mutate, isPending } = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormDataType) => {
    // console.log({ data });
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-3">
        <div>
          <Input {...register("name")} placeholder="name ..." />
          <ErrorLabel message={errors?.name?.message} />
        </div>
        <div>
          <Input {...register("email")} placeholder="email ..." type="email" />
          <ErrorLabel message={errors?.email?.message} />
        </div>

        <Button type="submit" variant="outline" color="secondary">
          Login {isPending && <div>Loading ....</div>}
        </Button>
      </form>
    </div>
  );
};

export default Login;
