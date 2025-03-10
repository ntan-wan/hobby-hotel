import "@/index.css";
import App from "@/App.tsx";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { searchAccommodations } from "@/services/accommodation.service";

const queryClient = new QueryClient();

// queryClient.setMutationDefaults(["searchAccommodations"], {
//   mutationFn: searchAccommodations,
// });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
