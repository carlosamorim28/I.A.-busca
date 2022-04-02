import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Col, Container, Form, FormFeedback, FormGroup, FormText, Input, Label, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Modal, ModalBody, ModalFooter, ModalHeader, Row, UncontrolledAlert } from "reactstrap";
import ModalProject from "../../src/Modal";
import busca from "../../src/I.A";
import ElementListProduct from "../../src/components/ElementListProducks";
import Produto from "../../src/Class/Produto";


export default class Dashboard extends React.Component{
    state = {
        valorDesejado: 0,
        inputValorDesejadoIndocrreto:false,
        modalVisible: false,
        data: {
            listaProdutosEsculhidos:[{nome:"Blusa", valor:10},{nome:"Blusa", valor:10},{nome:"Blusa", valor:10},{nome:"Blusa", valor:10},{nome:"Blusa", valor:10},{nome:"Blusa", valor:10},{nome:"Blusa", valor:10},{nome:"Blusa", valor:10}],
            resultado: { soma: 5.55, produto: 4.71504 },
            distancia: 0,
            iteracoes: 343
        },
        listaDeProdutos: [],
        alert: true
    }

    isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    alteraEstadoModal= ()=>{
        this.setState({modalVisible:false})
    }

    setModalState(func,isOpen){
        func({isOpen:isOpen})
    }

    preecheLista = () => {
        let listaProdutos = [
            new Produto({nome:"Blusa",valor:1.10}),
            new Produto({nome:"Camisa",valor:1.20}),
            new Produto({nome:"Calça",valor:1.25}),
            new Produto({nome:"Casaco",valor:1.41}),
            new Produto({nome:"Blusão",valor:1.50}),
            new Produto({nome:"Jeans",valor:1.63}),
            new Produto({nome:"Jaqueta",valor:2.05}),
            new Produto({nome:"Macacão",valor:2.22}),
            new Produto({nome:"Saia",valor:2.65}),
            new Produto({nome:"Saruel",valor:2.90}),
            new Produto({nome:"Short",valor:3.04}),
            new Produto({nome:"Sueter",valor:3.16}),
        ]
        return listaProdutos
    }

    componentDidMount(){
        this.setState({listaDeProdutos: this.preecheLista()})
    }
    render(){
        return(
            <Container className="">
            <ModalProject 
                isOpen = {this.state.modalVisible} 
                closeModal={this.alteraEstadoModal}
                title="Combinação selecionada"
                data = {this.state.data}
            />
            <Form>
                <FormGroup/>
                <FormGroup>
                    <Label>
                        Supondo que você foi a uma loja de roupas, cuja a lista de produtos a venda está localizada a baixo, e que você levou uma quantia limitada de dinhero, desejando gastar o máximo possível do que levou. Informe o valor levado e a aplicação lhe indicará uma lista de compras que mais se aproxime do valor levado.
                    </Label>
                </FormGroup>
                <FormGroup className="position-relative">
                    <Label>
                        Valor que está disposto a gastar:
                    </Label>
                    <Input 
                        invalid = {this.state.inputValorDesejadoIndocrreto}
                        onChange = {(event)=>{
                            this.setState({
                                valorDesejado: event.target.value,
                                inputValorDesejadoIndocrreto: !this.isNumber(event.target.value)
                            })
                        }}
                        value={this.state.valorDesejado}
                    />
                    <FormFeedback tooltip>
                        Por favor digite um valor numérico
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <div>
                        <Button
                            color="primary"
                            onClick={async ()=>{
                                if(!this.state.inputValorDesejadoIndocrreto){
                                    const valor = await busca(this.state.valorDesejado,this.preecheLista)
                                    this.setState({data:valor})
                                    this.setState({modalVisible:true})
                                    this.setState({alert:true})
                                }else{
                                    this.setState({alert:false})
                                }
                            }}
                        >
                            Encontrar combinação mais próxima
                        </Button>
                    </div>
                    </FormGroup>
                    <div>
                    <Alert
                        toggle={()=>{this.setState({alert:true})}}
                        color="danger" 
                        hidden={this.state.alert}
                    >
                        <h4 className="alert-heading">
                            Erro!!!
                        </h4>
                        <p> O valor cujo o qual você buscou não é conisderado numérico. Poro favor digite um valor numérico.</p>
                    </Alert>
                </div>
                    <ListGroup>
                        {this.state.listaDeProdutos.map((produto)=>{
                            console.log(produto)
                            // eslint-disable-next-line react/jsx-key
                            return <ElementListProduct nome={produto.nome} valor={produto.valor} />
                        })}
                    </ListGroup>
          </Form>
          </Container>
            )
    }
}
