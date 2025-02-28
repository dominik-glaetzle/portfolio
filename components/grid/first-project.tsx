import projectImage from '@/public/projects/MoviePicker.png';
import Project from '../project';

export default function FirstProject() {
    return (
        <Project
            projectName='Movie Picker'
            projectImage={projectImage}
            backgroundColor='bg-green-100'
        />
    );
}
