import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DataProvider } from './context';
import Sidebar from './components/Sidebar/Sidebar';
import DaoScreen from './components/DaoScreen/DaoScreen';
import NewDao from './components/NewDao/NewDao';
import DaoPage from './components/DaoPage/DaoPage';
import EditDao from './components/EditDao/EditDao';
import Learn from './components/Learn/Learn';

function App() {

  return (
    <DataProvider>
      <Router>
    <div className="App">
      <Sidebar />
      <Route path="/" exact component={DaoScreen} />
      <Route path="/new" exact component={NewDao} />
      <Route path="/:id" exact component={DaoPage} />
      <Route path="/:id/edit" exact component={EditDao} />
      <Route path="/learn" exact component={Learn} />
    </div>
    </Router>
    </DataProvider>
  );
}

export default App;
