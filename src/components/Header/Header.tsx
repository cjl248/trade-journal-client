import { Opacity } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const headerStyle = {
  position: 'sticky',
  top: '1.5rem',
  margin: '0 auto 4rem auto',
  padding: '10px 5px',
  border: '2px ridge #db8b7d',
  background: 'darkorange',
  color: 'white',
  opacity: '75%',
};

const Header = () => {
  return (
    <Container
      sx={headerStyle}
      maxWidth="xs">
      <Typography variant="h4">Trade Journal</Typography>
      <Typography variant="body1">My Trades</Typography>
      <nav>Future Navigation</nav>
    </Container>
  );
};

export default Header;
