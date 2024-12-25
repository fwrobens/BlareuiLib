import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Installation } from './pages/Installation';
import { Windows } from './pages/components/Windows';
import { Tabs } from './pages/components/Tabs';
import { Buttons } from './pages/components/Buttons';
import { Toggles } from './pages/components/Toggles';
import { Sliders } from './pages/components/Sliders';
import { Dropdowns } from './pages/components/Dropdowns';
import { Notifications } from './pages/components/Notifications';
import { Labels } from './pages/components/Labels';
import { Keybinds } from './pages/components/Keybinds';
import { Textbox } from './pages/components/Textbox';
import { Separator } from './pages/components/Separator';
import { Exit } from './pages/components/Exit';
import { Sections } from './pages/components/Sections';
import { KeySystem } from './pages/advanced/KeySystem';
import { Example } from './pages/Example';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="installation" element={<Installation />} />
          <Route path="components">
            <Route path="windows" element={<Windows />} />
            <Route path="tabs" element={<Tabs />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="toggles" element={<Toggles />} />
            <Route path="sliders" element={<Sliders />} />
            <Route path="dropdowns" element={<Dropdowns />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="labels" element={<Labels />} />
            <Route path="keybinds" element={<Keybinds />} />
            <Route path="textbox" element={<Textbox />} />
            <Route path="separator" element={<Separator />} />
            <Route path="exit" element={<Exit />} />
            <Route path="sections" element={<Sections />} />
          </Route>
          <Route path="advanced">
            <Route path="key-system" element={<KeySystem />} />
          </Route>
          <Route path="example" element={<Example />} />
        </Route>
      </Routes>
    </Router>
  );
}