import { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router';
import LandingPage from './containers/LandingPage/LandingPage';
import TradeContainer from './containers/TradeContainer/TradeContainer';
import Header from './components/Header/Header';
import Box from '@pigment-css/react/Box';
import { Theme, ThemeCssVar } from '@mui/material/styles';
// The 'styled' module import below is necessary for the modeule on ln. 13
// @ts-expect-error
import { styled } from '@mui/material-pigment-css';

declare module '@mui/material-pigment-css' {
  interface ThemeArgs {
    theme: Theme;
    css: ThemeCssVar;
    sx: {};
  }
}

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/trades');
    return function cleanup() {};
  }, []);

  return (
    <>
      <Header />
      <Box
        className="main"
        sx={{}}>
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
      </Box>
    </>
  );
}

export default App;
