import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Contributors from './Components/Contributors';
import Header from './Components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Contributors />
      </div>
    </QueryClientProvider>
  );
}

export default App;
