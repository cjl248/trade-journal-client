import { FunctionComponent, ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { GET_TRADES } from "./Queries";
import Trade from "../../components/Trade/Trade";
import { TradeType } from "../../components/Trade/Trade";

const LandingPage: FunctionComponent = (): ReactNode => {
  const { loading, error, data } = useQuery(GET_TRADES);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <Typography variant="h4">Trade Journal</Typography>
      <Typography variant="body1">My Trades</Typography>
      {data.trades.map((trade: TradeType) => (
        <Trade key={trade.id} trade={trade} />
      ))}
    </>
  );
};

export default LandingPage;
