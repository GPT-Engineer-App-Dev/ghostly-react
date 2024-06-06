import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@chakra-ui/react';
import { SupabaseAuthUI, useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <Container centerContent>
      <Box width="100%" maxWidth="md" mt={8}>
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;