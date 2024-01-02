import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import router from "./Routes/Routes";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-center" />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </>
  </div>
);
