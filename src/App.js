import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { DefaultRouter } from "./router/defaultRouter";
import { DefaultNavbar } from "./layouts/defaultNavbar";

const App = () => {
  return (
    <>
        <DefaultNavbar></DefaultNavbar>
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Ultrasound Trainer!
                </Typography>
                <DefaultRouter></DefaultRouter>
            </Box>
        </Container>
    </>
  );
}

export default App;