import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimersDashboard from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<TimersDashboard />, document.getElementById('root'));
registerServiceWorker();
