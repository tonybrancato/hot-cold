import React from 'react';
import ReactDOM from 'react-dom';
import HotCold from './hot-cold.js'
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HotCold />, document.getElementById('root'));
registerServiceWorker();
