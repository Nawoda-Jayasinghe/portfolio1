import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import AppThemeProvider from "./Theme/Theme";

function App() {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
}

export default App;
