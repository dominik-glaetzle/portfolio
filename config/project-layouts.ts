import { Layout } from 'react-grid-layout';

export const lgLayout: Layout[] = [
    { i: 'logo', x: 0, y: 0, w: 1, h: 1 },
    { i: 'snowflake', x: 3, y: 1, w: 1, h: 1 },
    { i: 'page', x: 1, y: 1, w: 2, h: 1 },
];

export const smLayout: Layout[] = [
    { i: 'logo', x: 0, y: 1, w: 1, h: 1 },
    { i: 'snowflake', x: 1, y: 1, w: 1, h: 1 },
    { i: 'page', x: 0, y: 3, w: 2, h: 1 }
];
