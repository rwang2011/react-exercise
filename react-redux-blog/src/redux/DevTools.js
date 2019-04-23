import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


// DockMonitor决定了DevTools在屏幕上显示的位置，ctrl+q切换位置，ctrl+h隐藏
// LogMonitor决定DevTools中显示的内容
const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey="ctrl-w"
        changePositionKey="ctrl-q"
    >
        <LogMonitor theme="tomorrow" />
    </DockMonitor>
)

export default DevTools;