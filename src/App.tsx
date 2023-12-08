import Layout from "./components/layout";
import AppProviders from "./providers/app";
import AppRoutes from "./routes";

const App = () => {
  return (
    <AppProviders>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppProviders>
  );
};

export default App;
