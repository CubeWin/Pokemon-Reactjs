import { createRoot } from 'react-dom/client';
import Pokemon from './pages/CharactersPage';
import './style/index.css';
import './style/main.css';

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<Pokemon />);
