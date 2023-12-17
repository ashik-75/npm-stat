import { queryClient } from "@/utils/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Router>{children}</Router>
      </NextUIProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
