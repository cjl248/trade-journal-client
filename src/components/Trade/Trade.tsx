import { FunctionComponent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';

export type TradeType = {
  id: string;
  symbol: string;
  trade_type: 0;
  quantity: number;
  price: number;
  trade_date: string;
  notes: string;
};

type TradeProps = { trade: TradeType };

export const OrangeTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#db8b7d',
  ':hover': {
    color: '#f63858',
    fontWeight: 'bold',
    cursor: 'grab',
  },
}));

const Trade: FunctionComponent<TradeProps> = props => {
  let navigate = useNavigate();
  const { trade: { id = '', symbol = '', price, quantity } = {} } = props;
  return (
    <Card
      raised
      onClick={() => navigate(`/trades/${id}`)}>
      <CardContent>
        <OrangeTypography
          variant="h6"
          align="center">
          {`Ticker: ${symbol}`}
        </OrangeTypography>
      </CardContent>
      <CardContent>
        <OrangeTypography variant="body1">{`Price: $${price}`}</OrangeTypography>
      </CardContent>
      <CardContent>
        <OrangeTypography variant="body1">{`Quantity: ${quantity}`}</OrangeTypography>
      </CardContent>
    </Card>
  );
};

export default Trade;
