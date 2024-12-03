import { FaArrowRight, FaSpotify } from 'react-icons/fa6';
import Anchor from '../ui/anchor';
import Card from '../ui/card';

export default function Spotify() {
    return (
        <Card className="relative flex h-full flex-col items-center justify-center bg-[#1DB954] dark:bg-[#1DB954]">
            <div className="absolute bottom-3 left-3">

            </div>
            
            {/* Spotify Icon in the center */}
            <FaSpotify size="4rem" color="white" />
        </Card>
    );
}