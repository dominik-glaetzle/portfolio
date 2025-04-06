import { Layout } from 'react-grid-layout';

export const lgLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 1 },
    { i: 'article', x: 2, y: 0, w: 2, h: 1 },
    { i: 'location', x: 2, y: 0, w: 2, h: 2 },
    { i: 'theme', x: 1, y: 1, w: 1, h: 1 },
    { i: 'first-project', x: 0, y: 1, w: 1, h: 1 },
    { i: 'contact', x: 0, y: 3, w: 1, h: 1},
    { i: 'tech-stack', x: 1, y: 3, w: 1, h: 1},
];

export const mdLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'article', x: 2, y: 0, w: 2, h: 2 },
    { i: 'location', x: 2, y: 0, w: 2, h: 2 },
    { i: 'theme', x: 1, y: 1, w: 1, h: 1 },
    { i: 'first-project', x: 0, y: 1, w: 1, h: 1 },
    { i: 'contact', x: 0, y: 3, w: 2, h: 1},
];

export const smLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'contact', x: 0, y: 3, w: 1, h: 1 },
    { i: 'location', x: 1, y: 1, w: 1, h: 1 },
    { i: 'article', x: 0, y: 2, w: 2, h: 2 },
    { i: 'first-project', x: 0, y: 1, w: 1, h: 1 },
    { i: 'theme', x: 1, y: 3, w: 1, h: 1 },
];
