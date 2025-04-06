import { IconType } from 'react-icons';
import {
    FaReact,
    FaJava,
    FaPython,
} from 'react-icons/fa6';

export interface Stack {
    name: string;
    icon: IconType;
}

const socials: Stack[] = [
    {
        name: 'React',
        icon: FaReact,
    },
    {
        name: 'Java',
        icon: FaJava,

    },
    {
        name: 'Python',
        icon: FaPython,
    },
];

export default socials;
