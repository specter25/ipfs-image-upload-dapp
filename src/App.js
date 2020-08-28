import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css'
import Navbar from './components/Navbar'


const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })



class App extends Component  {


  constructor(props) {
    super(props);
    this.state = {
      buffer:null
    };
  }

  captureFile = (e) =>{
    e.preventDefault();
    //Process File for IPFS
    console.log(e.target.files[0])
    const file = e.target.files[0]
    //helps in converting the file into a buffer and a buffer is what we need at this instant
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () =>{
      this.setState({buffer:Buffer(reader.result)})
    }
  }


  //https://ipfs.io/ipfs/QmYbggFBJWPa8NpEc1wQneHdYFoLnqwqq49NyoCmBZKSFm
  handleSubmit = async (e)=>{
    //step1 is to 
    e.preventDefault();
    console.log('Submittig the form');
    console.log(this.state.buffer)
    const fileupload = await ipfs.add(this.state.buffer)
    console.log(fileupload)

    //Step 2 is to store the fie onthe blockchian
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
    <form  onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon03">Button</button>
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile03" 
            onChange={this.captureFile}
            aria-describedby="inputGroupFileAddon03" />
            <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
          </div>
        </div>


    </form>
    </div>
  );
}

  
}

export default App;
