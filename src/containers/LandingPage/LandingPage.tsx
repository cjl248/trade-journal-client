import { FunctionComponent, ReactNode } from 'react';
import Grid from '@mui/material/Grid2';
import { useQuery } from '@apollo/client';
import { GET_TRADES } from './Queries';
import Trade from '../../components/Trade/Trade';
import { TradeType } from '../../components/Trade/Trade';

type Error = { message: String };

const LandingPageSx = {
  justifyContent: 'space-evenly',
  flexFlow: 'row wrap',
};

const LandingPage: FunctionComponent = (): ReactNode => {
  const { loading, error, data: { trades = [] } = {} } = useQuery(GET_TRADES);

  const handleError = (error: Error) => {
    return <h1>{error.message}</h1>;
  };

  if (loading) return <h3>Loading...</h3>;
  if (error) handleError(error);

  return (
    <Grid
      sx={LandingPageSx}
      container
      spacing={1.5}
      size={1}>
      {(trades ?? []).map((trade: TradeType) => (
        <Grid
          key={trade.id}
          sx={{
            height: '300px',
            maxWidth: '200px',
            margin: 'auto',
            flex: '3 1 300px',
          }}>
          <Trade trade={trade} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LandingPage;

{
  /*
  ((((): Array<TradeType> => Array<ReactNode>) = () => (data?.trades + data?.trades)()): ImmediatelyInvokedArrowFunction)
  .map( (trade: TradeType) => (<Trade key={trade.id} trade={trade} /> ) )
*/
}
