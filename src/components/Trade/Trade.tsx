import { FunctionComponent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { useTheme } from '@pigment-css/react';

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
  padding: theme.spacing(1),
  margin: theme.spacing(2),
  textAlign: 'center',
  color: '#db8b7d',
  align: 'center',
  ':hover': {
    color: '#f63858',
    cursor: 'grab',
  },
}));

const Trade: FunctionComponent<TradeProps> = props => {
  let navigate = useNavigate();
  let theme = useTheme();
  // console.log({ theme });
  const { trade: { id = '', symbol = '', price, quantity } = {} } = props;
  return (
    <Card
      sx={{
        maxHight: 'inherit',
        backgroundColor: 'cream',
        '> div': {
          padding: '0',
          margin: '0',
        },
      }}
      raised
      onClick={() => {
        navigate(`/trades/${id}`);
      }}
      children={
        <>
          <CardContent
            children={<OrangeTypography variant="h6">{`Ticker: ${symbol}`}</OrangeTypography>}
          />
          <CardContent
            children={<OrangeTypography component="p">{`Price: $${price}`}</OrangeTypography>}
          />
          <CardContent
            children={<OrangeTypography component="p">{`Quantity: ${quantity}`}</OrangeTypography>}
          />
        </>
      }></Card>
  );
};

export default Trade;
