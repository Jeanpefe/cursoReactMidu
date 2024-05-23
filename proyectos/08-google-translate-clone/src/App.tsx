import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants';
import { ArrowIcon } from './components/Icons';

function App() {
  const { fromLanguage, toLanguage, setFromLanguage, interchangeLanguages } = useStore()

  return (
    //usar el hook useReducer
    <>
      <Container fluid>
        <h1>Google translate</h1>

        <Row>
          <Col>
            <h2>From</h2>
            {fromLanguage}
          </Col>
          <Col>
            <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
              <ArrowIcon />
            </Button>
          </Col>
          <Col>
            <h2>To</h2>
            {toLanguage}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
