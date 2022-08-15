// \import '../styles/global.css'
// import "tailwindcss/tailwind.css";
import '../styles/tailwind.css'
//import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
    return (
      //  <ThemeProvider>
        <Component {...pageProps} />
    // </ThemeProvider>
    )
  }