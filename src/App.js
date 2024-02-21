import './App.css';
import VideoBackground from './components/VideoBackground ';
import Navigationbar from './components/Navigationbar';
import Footer from './components/footer.js';
import ContentPages from './components/ContentPages';
import { ContextVar } from './components/ContextVar';

function App() {
  return (
    <ContextVar>
      <div style={{ position: "fixed", width: "100%", height: "100%" }}>
        <VideoBackground />
        <div className='main_container'>
          <Navigationbar />
          <ContentPages />
          <Footer />
        </div>
      </div>
    </ContextVar>
  );
}

export default App;
