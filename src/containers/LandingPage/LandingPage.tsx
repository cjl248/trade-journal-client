import { FunctionComponent, ReactNode } from 'react';
import Grid from '@mui/material/Grid2';
import { useQuery } from '@apollo/client';
import { GET_TRADES } from './Queries';
import Trade from '../../components/Trade/Trade';
import { TradeType } from '../../components/Trade/Trade';
import { ImmediatelyInvokedArrowFunction, ImmediatelyInvokedFunctionExpression } from 'typescript';

type Error = { message: String };

type TradeTypeList = Array<TradeType>;

const tradeItemStyle = {
  display: 'inline-flex',
  flexFlow: 'column wrap', // val1: <flex-direction>, val2: <wrap> //
  flex: '1, 1, auto', // val1: <flex-grow>, val2: <flex-shrink>, val3: <flex-basis> //
  justifyContent: 'center',
  alignContent: 'center',
  gap: '1rem 0.5rem',
};

const LandingPage: FunctionComponent = (): ReactNode => {
  const { loading, error, data: { trades = {} } = [] } = useQuery(GET_TRADES);

  const handleError = (error: Error) => {
    return <h1>{error.message}</h1>;
  };

  if (loading) return <h3>Loading...</h3>;
  if (error) handleError(error);

  return (
    <Grid
      container
      spacing={2}
      columns={4}>
      {trades.map((trade: TradeType) => (
        <Trade
          key={trade.id}
          trade={trade}
        />
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
