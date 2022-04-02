import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
        <Container>
            <ListGroup>
                <ListGroup.Item active>
                    Lorem Ipsum
                </ListGroup.Item>
                <ListGroup.Item>
                    Here is another list item here
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}




