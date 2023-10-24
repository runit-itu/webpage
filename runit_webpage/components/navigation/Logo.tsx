import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/">
      <Image src={"/next.svg"} width={150} height={150} alt={""}></Image>
    </Link>
  );
}
