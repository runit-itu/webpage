import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <a href="/">
      <Image src={"/profile.svg"} width={65} height={65} alt={""}></Image>
    </a>
  );
}
