import { queryClient } from "@/utils/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

interface AppProvidersProps {
	children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>{children}</Router>
		</QueryClientProvider>
	);
};

export default AppProviders;
