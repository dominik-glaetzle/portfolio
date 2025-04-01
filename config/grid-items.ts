import * as GridComponents from '@/components/grid';
import React from "react";

export interface GridItem {
    i: string;
    component: React.ComponentType;
}

export const gridItems: GridItem[] = [
    { i: 'article', component: GridComponents.Article },
    { i: 'description', component: GridComponents.Description },
    { i: 'location', component: GridComponents.Location },
    { i: 'contact', component: GridComponents.Contact },
    { i: 'first-project', component: GridComponents.FirstProject },
    { i: 'theme', component: GridComponents.Theme },
];
