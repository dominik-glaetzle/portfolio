import { FaGithub, FaArrowRight } from "react-icons/fa6";
import Card from "../ui/card";

export default function Github() {
    return (
        <Card className=" relatvie flex h-full flex-col items-center justify-center bg-[#0D1117] dark:bg-[#FFFF] text-white p-6 dark:text-black rounded-2xl shadow-md">
            <div className="flex flex-col items-center text-center gap-4">
                <FaGithub size="2.5rem" className="text-white dark:text-black" />
                <div>
                    <h3 className="text-lg font-semibold">Dominik Glätzle</h3>
                    <p className="text-sm text-gray-400">@dominik-glaetzle</p>
                </div>

                <a
                    href="https://github.com/dominik-glaetzle"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-1 text-sm font-medium transition hover:bg-gray-200 dark:bg-gray-400"
                >
                    View on GitHub
                    <FaArrowRight size="0.9rem" />
                </a>
            </div>
        </Card>
    );
}