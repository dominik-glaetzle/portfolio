"use client";
import memoji from "@/public/images/memoji.webp";
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

        <Card className="flex flex-col justify-center p-8 gap-6">
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
          <p className="text-balance leading-relaxed">
            I&apos;m{" "}
            <span className="font-[Poppins] text-xl font-black">dominik</span>,
            a computer science student based in  innsbruck, tyrol.{" "}
            <span className="hidden md:inline">
My main interests lie in web development and mobile app design.
            </span>
          </p>
        </motion.div>
      </Card>
    </>
  );
}
