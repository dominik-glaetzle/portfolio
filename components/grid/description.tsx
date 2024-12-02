import profile from '@/public/images/profile-picture.jpeg';
import Image from 'next/image';
import Card from '../ui/card';
import Head from 'next/head'; // Head importieren

export default function Description() {
    return (
        <>
            {/* Head für Google Fonts */}
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Poppins:ital,wght@1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {/* Card-Komponente */}
            <Card className="flex flex-col justify-center gap-4 p-8">
                {/* Profilbild */}
                <div className="relative size-14 overflow-hidden rounded-full sm:size-16">
                    <Image
                        src={profile}
                        alt="Dominik Glätzle"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        priority
                    />
                </div>

                {/* Beschreibungstext */}
                <p className="text-balance leading-relaxed">
                    I&apos;m{' '}
                    <span className="font-[Poppins] text-xl  font-black">
                        dominik
                    </span>
                    , a computer science student from innsbruck, tyrol.{' '}
                    <span className="hidden md:inline">
                        I&apos;m interested in react (native), node.js and java
                    </span>
                </p>
            </Card>
        </>
    );
}