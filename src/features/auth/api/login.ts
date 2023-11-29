import { useMutation } from "@tanstack/react-query";
import { User } from "@/features/auth/types";
import { useUser } from "@/store/user";
import { useNavigate } from "react-router-dom";

export type CreateLoginDTO = {
  name: string;
  email: string;
};

const loginReg = (info: CreateLoginDTO): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({
        name: info.name,
        email: info.email,
        token: Date.now(),
      });
    }, 2000);
  });
};

export const useLogin = () => {
  const { addUser } = useUser();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginReg,
    onSuccess: (data) => {
      addUser(data);
      navigate("/");
    },
  });
};
