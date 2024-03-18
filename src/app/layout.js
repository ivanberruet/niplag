import Header from "@/components/Header/Header";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "text-lg">
				<Header />
				<div className={`min-h-screen`}>
					{children}
				</div>
				<Footer />
			</body>
    </html>
  );
}
