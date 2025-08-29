import projectImage from '@/public/projects/montis/logo.webp';
import Project from '../project';

export default function FirstProject() {
    return (
        <Project
            projectName='Montis'
            projectImage={projectImage}
            backgroundColor='bg-black-100'
        />
    );
}
