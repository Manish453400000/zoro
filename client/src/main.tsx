import {QueryClient, QueryClientProvider} from 'react-query'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import './sass/utility.scss'
import './sass/media.scss'
import './sass/component.scss'
import { store } from './app/store.ts'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </Provider>
)
