import { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type TradeType = {
  id: string;
  symbol: string;
  trade_type: 0;
  quantity: number;
  price: number;
  trade_date: string;
  notes: string;
};

type Props = { trade: TradeType };

const style = {
  width: "200px",
};

const Trade: FunctionComponent<Props> = props => {
  return (
    <Card sx={style}>
      <CardContent>
        <Typography gutterBottom color="primary" variant="h4">{`Ticker: ${props.trade.symbol}`}</Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom color="primary" variant="body1">{`Price: ${props.trade.price}`}</Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom color="primary" variant="body1">{`Quantity: ${props.trade.quantity}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default Trade;
