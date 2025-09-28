import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  background-color: #f8bbd0;
  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: #7008e7;
  &:hover {
    background-color: #bc92e8;
  }
`;

export const FooterView = () => (
  <footer>
    <Box>
      <p style={{ fontWeight: 'bold', fontSize: '25px' }}>© 2024 Katy Hatch</p>
    </Box>
  </footer>
);
