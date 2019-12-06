import React, {Component} from 'react'
import axios from 'axios'
import {Card} from '../componentes/Funcioonales'

class Pagina2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            elementos:[]
        }
        this.obtener = this.obtener.bind(this);
    }


    async obtener() {
        var respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon");
        console.log(respuesta.data)
        this.setState({elementos:respuesta.data.results})
    }

    pintar() {
        if(this.state.elementos.length > 0){
            var res = this.state.elementos.map((el,i) => {
                return <Card name = {el.name}/>
            })
            return res;
        }
    }

    render(){
        return (
            <div className="card-principal">
                Pagina 2
                <button className="btn btn-primary" onClick={this.obtener}>Click</button>
                <div className="container">
                    {this.pintar()}
                </div>
            </div>
        )
    }
}

export default Pagina2;