import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {store} from './store/store.jsx';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GlobalProvider} from './components/GlobalStore/GlobalStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
     <GlobalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </GlobalProvider>
    </Provider>
  </StrictMode>,
  
)
