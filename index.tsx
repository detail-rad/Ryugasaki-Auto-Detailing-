import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("App initializing...");

const container = document.getElementById('root');
if (container) {
  try {
    const root = createRoot(container);
    root.render(<App />);
    console.log("App rendered successfully.");
  } catch (err) {
    console.error("React Rendering Error:", err);
    container.innerHTML = `<div style="padding: 20px; color: white;">Render Error: ${err.message}</div>`;
  }
} else {
  console.error("Critical Error: Root element '#root' not found in index.html");
}