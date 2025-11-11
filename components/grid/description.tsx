"use client";
import memoji from "@/public/images/memoji.webp";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Card from "../ui/card";
import socials from "@/config/socials";
import { FaArrowRight } from "react-icons/fa6";

export default function Description() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Poppins:ital,wght@1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Card className="flex flex-col justify-center p-2 gap-6">
        <div className="relative w-36 h-36 ml-1">
          <Image
            src={memoji}
            alt="Dominik Glätzle"
            fill
            placeholder="blur"
            className="rounded-full object-cover"
          />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-balance leading-relaxed ml-2">
            I&apos;m{" "}
            <span className="font-[Poppins] text-xl font-black">dominik</span>,
            a computer science student based in innsbruck, tyrol.{" "}
            <span className="hidden md:inline">
              My main interests lie in web development and mobile app design.
            </span>
          </p>
        </motion.div>
        <div className="inline-flex items-center gap-3 ml-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="cancel-drag"
              aria-label={`My ${social.name}`}
              target="_blank"
              rel="noreferrer"
            >
              {<social.icon size="1.3rem" />}
            </a>
          ))}
          <a
            className="cancel-drag group inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium outline-none ring-2 ring-gray-200/45 transition-all duration-300 focus:ring-4 hover:ring-4 dark:text-black dark:ring-gray-200/30"
            href="mailto:dev@glaetzle.io"
          >
            <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            Let's talk!
          </a>
        </div>
      </Card>
    </>
  );
}
