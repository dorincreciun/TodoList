import {createRoot} from 'react-dom/client'
import {AppLayout} from "./app.tsx";
import './styles/index.css'

createRoot(document.getElementById('root')!).render(<AppLayout />)
