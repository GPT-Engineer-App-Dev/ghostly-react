import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Container } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        {session ? (
          <Button onClick={logout} mt={4}>Logout</Button>
        ) : (
          <Button as="a" href="/login" mt={4}>Login</Button>
        )}
      </Container>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;