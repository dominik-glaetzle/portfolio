import { FaArrowRight, FaGithub } from 'react-icons/fa6';
import Anchor from '../ui/anchor';
import Card from '../ui/card';

export default function GitHub() {
    return (
        <Card className="relative flex h-full flex-col items-center justify-center bg-[#2dba4e] dark:bg-[#2dba4e]">
            <div className="absolute bottom-3 left-3">
            <Anchor
                    className='cancel-drag'
                    href='https://github.com/smxkz'
                    target='_blank'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    <span className='sr-only'>LinkedIn</span>
                </Anchor>
            </div>
            <FaGithub size="4rem" color="white" />
        </Card>
    );
}