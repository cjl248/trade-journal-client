import { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router';
import LandingPage from './containers/LandingPage/LandingPage';
import TradeContainer from './containers/TradeContainer/TradeContainer';
import Header from './components/Header/Header';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/material-pigment-css';

declare module '@mui/material-pigment-css' {
  interface ThemeArgs {
    theme: Theme;
  }
}

const TestThemeTypes = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/trades');
    return function cleanup() {};
  }, []);

  return (
    <TestThemeTypes>
      <Header />
      <Routes>
        <Route
          path="/trades"
          element={<LandingPage />}
        />
        <Route
          path="/trades/:tradeId"
          element={<TradeContainer />}
        />
      </Routes>
    </TestThemeTypes>
  );
}

export default App;
