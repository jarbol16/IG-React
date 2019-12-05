import React,{Component} from 'react'

class Encabezado extends Component{
  render(){
    return(
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/" >{this.props.proyecto}</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/Elementos">Elementos </a>
          </li>
        </ul>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </nav>
    )
  }
}

export default Encabezado;