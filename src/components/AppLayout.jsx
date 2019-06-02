import React from 'react';
import { Navigation } from './Navigation';

export const AppLayout = ({ children }) => (
  <>
    <header>
      <Navigation />
    </header>
    <main>{children}</main>
    <footer className="footer">ja sam footer</footer>
  </>
);
