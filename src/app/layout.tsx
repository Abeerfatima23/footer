import Footer from "@/components/Footer";
import { init } from "next/dist/compiled/webpack/webpack";
export default function Layout(){
  return(
    <html lang="en">
        <body>
          <Footer/>
        </body>
      </html>
  )
}