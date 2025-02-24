import { FunctionComponent, ReactNode } from 'react';
import Trade from '../../components/Trade/Trade';
import { useParams } from 'react-router';
import { GET_TRADE } from './Queries';
import { useQuery } from '@apollo/client';

const TradeContainer: FunctionComponent = (): ReactNode => {
  let params = useParams();
  const { loading, error, data } = useQuery(GET_TRADE, { variables: { tradeId: params?.tradeId } });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h1>{error.message}</h1>;

  return <Trade trade={data.trade} />;
};

export default TradeContainer;
