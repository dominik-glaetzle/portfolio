import { Layout } from 'react-grid-layout';

export const lgLayout: Layout[] = [
    { i: 'logo', x: 0, y: 0, w: 1, h: 1 },
    { i: 'home-screen', x: 1, y: 1, w: 1, h: 2 },
    { i: 'notification-screen', x: 2, y: 1, w: 1, h: 2 },
    { i: 'profile-screen', x: 3, y: 1, w: 1, h: 2 },
];

export const smLayout: Layout[] = [
    { i: 'logo', x: 0, y: 1, w: 1, h: 1 },
    { i: 'home-screen', x: 1, y: 1, w: 1, h: 2 },
    { i: 'notification-screen', x: 0, y: 2, w: 1, h: 2 },
    { i: 'profile-screen', x: 1, y: 3, w: 1, h: 2 },

];
