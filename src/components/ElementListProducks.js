import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import react from "react";

export default class ElementListProduct extends react.Component {
    render(){
        return(
            <ListGroupItem>
                <ListGroupItemHeading>
                   {this.props?.nome}
                </ListGroupItemHeading>
                <ListGroupItemText>
                    Valor: {this.props?.valor}
                </ListGroupItemText>
            </ListGroupItem>
        )
    }
}