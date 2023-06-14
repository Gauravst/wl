import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import Provider from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Landify",
  description: "WebLandify: Simplify landing page creation. Build captivating pages without coding. Customize with ease. Perfect for product launches, marketing campaigns, and events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}
