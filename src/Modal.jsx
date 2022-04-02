import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React from "react";
export default class ModalProject extends React.Component {
       
    constructor(props){
        super(props)
        this.state = {
            isOpen: props.isOpen,
            setOpen: props.closeModal
        }
    }
    
    render(){
        console.log(this.props) 
        const teste = ()=>{
            console.log(this.props.isOpen)
            this.props.closeModal({isOpen:false})
        }
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={teste}
            >
                <ModalHeader toggle={teste}>
                {this.props.title}
                </ModalHeader>
                <ModalBody>
                {this.props.data.listaProdutosEsculhidos.map((elemento)=>{
                    return<>
                    <br/>
                    
                    <span>{`Nome: ${elemento.nome}`}</span>
                    <br/>
                    <span>{`valor: ${elemento.valor}`}</span>
                    <br/>
                    <br/>
                    <span>-----</span>
                    </>
                })}
                <p>{`Soma obtida: ${this.props.data.resultado.soma}`}</p>
                <p>{`Distancia até o objetivo: ${this.props.data.distancia}`}</p>
                <p>{`Iterações Feitas: ${this.props.data.iteracoes}`}</p>
                </ModalBody>
                <ModalFooter>
                <Button onClick={teste}>
                    Exit
                </Button>
                </ModalFooter>
            </Modal>
        )
    }
}