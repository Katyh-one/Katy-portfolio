import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 4px;
  background-color: #f8bbd0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: #7008e7;
  &:hover {
    background-color: #f48fb1;
  }
`;

export const FooterView = () => (
  <footer>
    <Box>
      <p font-weight="bold">© 2024 Katy Hatch</p>
    </Box>
  </footer>
);
