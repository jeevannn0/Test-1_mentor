import { Main } from "./components/pages/main";
import { Inter } from "next/font/google";
import Link from 'next/link';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Main/>
    </div>
  );
}
