import React,{Component} from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Inicio from './Inicio'
import Pagina2 from './Pagina2';

const routing = (
  <Router>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/Elementos" component={Pagina2} />
  </Router>
)

class Principal extends Component{
  constructor(props){
    super(props);
    this.state = {
        reloj: 0
    }
  }

  componentDidMount(){
    setInterval( () => { 
      this.setState({reloj: new Date().toLocaleTimeString()})
    }, 1000)
  }

  render(){
    return(
      <div className="">
        <div className="card-reloj m-3">
          <span>Reloj: {this.state.reloj}</span>
        </div>
        <div className="card-page">
          {routing}
        </div>
      </div>
    )
  }
}

export default Principal;