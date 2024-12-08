import memoji from '@/public/images/memoji.png';
import profilepicture from '@/public/images/profile-picture.png';
import Image from 'next/image';
import Card from '../ui/card';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Description() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Poppins:ital,wght@1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Card className="flex flex-col justify-center gap-4 p-8">
                <div className="relative size-14 overflow-hidden rounded-full sm:size-36">
                    <Image
                        src={memoji}
                        alt="Dominik Glätzle"
                        fill
                        placeholder="blur"
                        priority
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                </div>

                <p className="text-balance leading-relaxed">
                    I&apos;m{' '}
                    <span className="font-[Poppins] text-xl  font-black">
                        Dominik
                    </span>
                    , a computer science student from Innsbruck, tyrol.{' '}
                    <span className="hidden md:inline">
                        I&apos;m interested in react (native), node.js and java.
                    </span>
                </p>
            </Card>
        </>
    );
}