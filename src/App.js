import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css'
import Navbar from './components/Navbar'

class App extends Component  {

  captureFile = (e) =>{
    e.preventDefault();
    console.log("file captured")
  }



render () {
  return (
    <div className="App">
      <Navbar />
      <img className =" ml-auto mr-auto img-fluid" src="https://www.insidehighered.com/sites/default/server_files/media/iStock-892082986.jpg "  />
      <br />
      <p></p>
      <h1> IPFS Images Upload</h1>
      <p></p>
    <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
            <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
          </div>
        </div>


    </form>
    </div>
  );
}

  
}

export default App;
