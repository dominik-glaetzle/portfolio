import * as GridComponents from '@/components/grid';

export interface GridItem {
    i: string;
    component: React.ComponentType;
}

export const gridItems: GridItem[] = [
    { i: 'article', component: GridComponents.Article },
    { i: 'description', component: GridComponents.Description },
    { i: 'location', component: GridComponents.Location },
    { i: 'github', component: GridComponents.Github },
    { i: 'linkedin', component: GridComponents.LinkedIn },
    { i: 'theme', component: GridComponents.Theme },
    // { i: 'project-2', component: GridComponents.SecondProject },
    // { i: 'project-3', component: GridComponents.ThirdProject },
    // { i: 'contact', component: GridComponents.Contact },
];
