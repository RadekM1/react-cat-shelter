import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import App from './App';
import '@fontsource/roboto'


const container = document.getElementById('result')
const root = createRoot(container)
root.render(<App tab="home" />)