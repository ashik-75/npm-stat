import { useMutation } from "@tanstack/react-query";
import { User } from "@/features/auth/types";
import { MutationConfig } from "@/utils/react-query";

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

type LoginFnType = typeof loginReg;

type UseLoginOptions = {
	config?: MutationConfig<LoginFnType>;
	onSuccess: (user: User) => void;
};

export const useLogin = ({ config, onSuccess }: UseLoginOptions) => {
	return useMutation({
		...config,
		mutationFn: loginReg,
		onSuccess: (data) => {
			onSuccess(data);
		},
	});
};
