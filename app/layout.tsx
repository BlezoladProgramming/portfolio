import type {Metadata} from "next";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MotionController from "@/components/MotionController";
import {baseUrl} from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {default: "BLEZOLAD — Full Stack Web Developer", template: "%s | BLEZOLAD"},
  description: "BLEZOLAD — an independent full stack web developer with 2+ years of experience. Websites, full-stack web apps, frontend, backend APIs and debugging.",
  openGraph: {type:"website",siteName:"BLEZOLAD",images:[{url:"/og-cover.png",width:1200,height:630,alt:"BLEZOLAD — Full Stack Web Developer"}]},
  twitter: {card:"summary_large_image",images:["/og-cover.png"]},
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body id="top"><a className="skip-link" href="#main-content">Skip to content</a><SiteChrome/><MotionController/><div className="page-frame"><main id="main-content" tabIndex={-1}>{children}</main><Footer/></div></body></html>;
}
