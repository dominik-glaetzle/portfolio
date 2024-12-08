"use client";
import memoji from "@/public/images/memoji.png";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Card from "../ui/card";

export default function Description() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Poppins:ital,wght@1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Card className="flex flex-col justify-center p-8">
        <motion.div
          className="relative size-14 overflow-hidden rounded-full sm:size-36"
          initial={{ scale: 0, opacity: 0, rotate: 250 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          whileHover={{ scale: 1.8 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <Image
            src={memoji}
            alt="Dominik Glätzle"
            fill
            placeholder="blur"
            priority
            className="transition-transform duration-300 ease-in-out"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-balance leading-relaxed">
            I&apos;m{" "}
            <span className="font-[Poppins] text-xl font-black">dominik</span>,
            a computer science student from Innsbruck, Tyrol.{" "}
            <span className="hidden md:inline">
              I&apos;m interested in React (Native), Node.js, and Java.
            </span>
          </p>
        </motion.div>
      </Card>
    </>
  );
}
