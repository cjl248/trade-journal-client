import { FunctionComponent, ReactNode } from "react";
import Trade from "../../components/Trade/Trade";
import { useParams } from "react-router";
import { GET_TRADE } from "./Queries";
import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";

const TradeContainer: FunctionComponent = (): ReactNode => {
  let params = useParams();
  console.log({ params });
  const { loading, error, data } = useQuery(GET_TRADE, { variables: { tradeId: params?.tradeId } });
  console.log(data);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <Container>
      <Trade trade={data.trade} />
    </Container>
  );
};

export default TradeContainer;
