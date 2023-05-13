import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {Switch,Route} from "react-router-dom"
import ThiruBros from './components/thiruAnnaTestCopy';




function App() {
  return (
   <>
    <Switch>
    {/* <Route exact path="/test" component={ThiruBro} /> */}
    <Route exact path="/" component={ThiruBros} />
    </Switch>
   
   </>
  );
}

export default App;






