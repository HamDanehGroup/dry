import { store } from "$/lib/redux";
import { RouterTransition } from "$/lib/ui";
import { ltrCache, rtlCache, theme } from "$/lib/utils";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [rtl, _setRtl] = useState(locale === "fa" ? true : false);

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{ ...theme, colorScheme, dir: rtl ? "rtl" : "ltr" }}
              emotionCache={rtl ? rtlCache : ltrCache}
            >
              <ModalsProvider>
                <div dir={rtl ? "rtl" : "ltr"}>
                  <Notifications position="top-center" />
                  <RouterTransition />
                  <Component {...pageProps} />
                </div>
              </ModalsProvider>
            </MantineProvider>
          </ColorSchemeProvider>
        </Provider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}
