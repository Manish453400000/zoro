import {QueryClient, QueryClientProvider} from 'react-query'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import './sass/utility.scss'
import './sass/media.scss'
import './sass/component.scss'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
