import stack from '@/config/stack';
import Card from '../ui/card';

export default function TechStack() {
    return (
        <Card className="relative flex h-full flex-col items-center justify-center bg-[#C4FCEF] dark:bg-[#4D8076]">
            <div className='inline-flex flex-col items-center gap-2 lg:flex-row'>
                <div className='inline-flex gap-6'>
                    {stack.map((stack) => (
                        <a
                            key={stack.name}
                            className='cancel-drag'
                            aria-label={`My ${stack.name}`}
                            target='_blank'
                            rel='noreferrer'>
                            {<stack.icon size='2.2rem' />}
                        </a>
                    ))}
                </div>
            </div>
        </Card>
    );
}