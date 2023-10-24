import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className={`container`}>
      <title>RunIt</title>
      <Navbar></Navbar>
    </div>
  );
}
