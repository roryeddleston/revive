import React from 'react';
import { createRoot } from 'react-dom/client';
import Web from './web';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
    <Web />
);
