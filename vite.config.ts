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
  css: {
    // Specify your default CSS authoring direction
    defaultDirection: 'ltr',
    // Generate CSS for the opposite of the `defaultDirection`
    // This is set to `false` by default
    generateForBothDir: true,
  },
};

// https://vite.dev/config/
export default defineConfig({
  // @ts-ignore //
  plugins: [react(), pigment(pigmentConfig)],
});
