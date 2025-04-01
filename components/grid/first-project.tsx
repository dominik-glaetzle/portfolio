import projectImage from '@/public/projects/avalanche-alert/logo.png';
import Project from '../project';

export default function FirstProject() {
    return (
        <Project
            projectName='Avalanche Alert'
            projectImage={projectImage}
            backgroundColor='bg-red-100'
        />
    );
}
