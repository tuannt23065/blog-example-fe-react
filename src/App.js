import { useEffect } from 'react';
import WebFont from 'webfontloader';
import './assets/libs/bootstrap4/bootstrap-tcl.css';
import './assets/css/main.css';
import Header from './Components/Header/index';
import ArticleLatest from './Components/ArticleLatest';
import ArticlePopular from './Components/ArticlePopular';
import NewsList from './Components/NewsList';

import Footer from './Components/Footer/index';

function App() {
  useEffect(() => {
    document.title = 'Home Page';
    WebFont.load({
      google: {
        families: ['Muli', 'Fira Sans']
      }
    });
   }, []);

  return (
    <div className="App">
      <div className="wrapper-content">
        <Header />
        <ArticleLatest />
        <ArticlePopular />
        <NewsList />
        <Footer />
      </div>
    </div>
  );
}



export default App;
