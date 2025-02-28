import projectImage from '@/public/projects/MoviePicker.png';
import Project from '../project';

export default function ThirdProject() {
    return (
        <Project
            projectName='Laravel POS'
            projectImage={projectImage}
            backgroundColor='bg-blue-100'
        />
    );
}
