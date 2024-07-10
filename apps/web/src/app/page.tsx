import Image from "next/image";
import { add } from "@foundation/sample-lib";

export default function Home() {
  return <main>HI {add(1, 2)}</main>;
}
