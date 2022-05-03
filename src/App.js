import './App.css';
import { Client } from './Client';
import {Header, Card} from "./Components";

function App() {
  const query = Client.items().type('artist').depthParameter(5)
  query.toPromise().then(response => {
    let data = response;
  })
  return (
    <div className="main">
      <Header/>
      <Card>
        <h1>artist card</h1>
      </Card>
      <Card>
        <h1>album card</h1>
      </Card>
      <Card>
        <h1>song card</h1>
      </Card>



    </div>
    
    
  );
}

export default App;
