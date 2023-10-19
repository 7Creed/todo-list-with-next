import "@/styles/globals.css";
import { Layout } from "../../components/Layout";
import { TodoProvider } from "../../context/context";

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoProvider>
  );
}
