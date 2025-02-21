import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { pigment } from '@pigment-css/vite-plugin';
import { createTheme } from '@mui/material';

const pigmentConfig = {
  transformLibraries: ['@mui/material'],
  theme: createTheme({
    cssVariables: true,
    /* other parameters, if any */
  }),
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pigment(pigmentConfig)],
});
