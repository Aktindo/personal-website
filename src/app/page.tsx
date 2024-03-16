import { Button } from "@nextui-org/react";
import Image from "next/image";
import { ProfileCard } from "./components/ProfileCard";
import { Footer } from "./components/Footer";
import { GithubCard } from "./components/GithubCard";
import { TechnologiesCard } from "./components/TechnologiesCard";
import ReactAudioPlayer from "react-audio-player";

export default function Home() {
  return (
    <main className="m-10 grid justify-center">
      <ProfileCard />
      <div className="grid max-w-fit md:grid-cols-2 mx-auto justify-center grid-cols-1">
        <GithubCard />
        <TechnologiesCard />
      </div>
      <Footer />
    </main>
  );
}
