import { Button, ButtonGroup } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useLocation, useParams, NavLink } from 'react-router';

const headerStyle = {
  position: 'sticky',
  top: '1.5rem',
  margin: '0 auto 4rem auto',
  padding: '10px 5px',
  border: '2px ridge #db8b7d',
  borderRadius: '5px',
  background: 'darkorange',
  color: 'white',
  opacity: '80%',
};

const Header = () => {
  let location = useLocation();
  let params = useParams();

  console.log('params', params);
  console.log('location', location);
  // console.log({
  //   location,
  //   params,
  //   pathname: location.pathname,
  //   paramsString: `\/${params['*']}`,
  //   eq: location.pathname !== `\/${params['*']}`,
  // });

  const handleEdit = () => {
    console.log(`Edit ${params?.['*']}`);
  };

  return (
    <Container
      sx={headerStyle}
      maxWidth="sm">
      <Typography variant="h4">Trade Journal</Typography>
      <Typography variant="body1">My Trades</Typography>
      <nav style={{ margin: '1rem 0' }}>
        {params ? (
          <ButtonGroup>
            <NavLink
              to="/trades"
              children={
                <Button
                  size="medium"
                  variant="contained"
                  color="success">
                  Go Home
                </Button>
              }></NavLink>
            <Button
              size="medium"
              variant="contained"
              color="info"
              onClick={handleEdit}>
              Edit
            </Button>
          </ButtonGroup>
        ) : (
          ''
        )}
      </nav>
    </Container>
  );
};

export default Header;

// display: 'flex', justifyContent: 'space-evenly',
