import { Box } from '@mui/material';

export const FooterView = () => (
  <footer>
    <Box
      id="contact-section"
      alignItems="center"
      display="flex"
      position="relative"
      flexDirection="column"
      justifyContent="center"
      width="100%"
      borderRadius={4}
      paddingX={4}
      textAlign="center"
      color="#7008e7"
      bgcolor="#e1bee7"
    >
      <p style={{ fontWeight: 'bold', fontSize: '25px' }}>© 2024 Katy Hatch</p>
    </Box>
  </footer>
);
