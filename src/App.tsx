import { Provider } from 'chatuim2';
import { APPKEY } from './config';
import './App.css';
import 'chatuim2/style.css';
import Main from './views/main';
function App() {
  return (
    <div className='app_container'>
      <Provider initConfig={{ appKey: APPKEY }}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
