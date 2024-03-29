import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import '../styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider>
    <Component {...pageProps} />
    <Analytics />
  </ThemeProvider>
  )
}

export default App;

// export default function App({ Component, pageProps }) {
//     return (
//       <ThemeProvider>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     )
//   }