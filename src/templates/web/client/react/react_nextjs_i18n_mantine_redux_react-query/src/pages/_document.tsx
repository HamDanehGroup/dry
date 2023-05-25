import { ltrCache, rtlCache } from "$/lib/utils";
import { ServerStyles, createStylesServer } from "@mantine/next";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

// optional: you can provide your cache as a first argument in createStylesServer function
const rtlStylesServer = createStylesServer(rtlCache);
const ltrStylesServer = createStylesServer(ltrCache);

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // Add your app specific logic here

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={ctx.locale === "fa" ? rtlStylesServer : ltrStylesServer}
          key="styles"
        />,
      ],
    };
  }
  render() {
    return (
      <Html dir="rtl">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
