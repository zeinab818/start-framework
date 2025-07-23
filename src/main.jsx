import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

render(<App />, document.getElementById('app'));
