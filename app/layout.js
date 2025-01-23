import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import { checkDatabaseConnection, supabase } from "./_lib/supabase";

const josefin = Josefin_Sans({
 subsets: ["latin"],
 display: "swap",
});

export const metadata = {
 // title: "The WIld Oasis",
 title: {
  template: "%s / The Wild Oasis",
  default: "The Wild Oasis",
 },
};

// Check the database connection when the app starts

export default function RootLayout({ children }) {
 //  async function guest() {
 //   const { data, error } = await supabase
 //    .from("guests")
 //    .select("*")
 //    .eq("email", "nsamarpit25@gmail.com");
 //   console.log(data);
 //  }
 //  guest();

 return (
  <html lang="en">
   <body
    className={`${josefin.className} antialiased bg-primary-950 min-h-screen text-primary-100 flex flex-col relative`}
   >
    <Header />
    <div className="flex-1 px-8 py-12 grid">
     <main className="max-w-7xl mx-auto w-full">
      <ReservationProvider>{children}</ReservationProvider>
     </main>
    </div>
   </body>
  </html>
 );
}
