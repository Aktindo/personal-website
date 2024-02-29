import { Button } from "@nextui-org/react";
import Image from "next/image";
import { ProfileCard } from "./components/ProfileCard";
import { Footer } from "./components/Footer";
import { GithubCard } from "./components/GithubCard";
import { TechnologiesCard } from "./components/TechnologiesCard";

export default function Home() {
  return (
    <main className="m-10 mt-20 grid justify-center">
      <ProfileCard />
      <div className="md:flex mx-auto items-center grid justify-center">
        <GithubCard />
        <TechnologiesCard />
      </div>
      <Footer />
    </main>
  );
}
