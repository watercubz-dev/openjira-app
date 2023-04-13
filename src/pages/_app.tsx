import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { UIProvider } from "../../context/ui";
import { EntrisState } from "../../context/entries";

import { lightTheme, darkTheme } from "../../themes";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntrisState entries={[]}>
    <UIProvider sidemenuOpen={false} isAddingEntry={false} isDragging={false} >
    <ThemeProvider theme={ lightTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </UIProvider>
    </EntrisState>
  );
}

