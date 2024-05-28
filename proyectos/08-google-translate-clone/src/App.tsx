import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants';
import { ArrowIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import TextArea from './components/TextArea';

function App() {
  const { fromLanguage, toLanguage, fromText, result, setFromLanguage, setToLanguage, interchangeLanguages, setFromText, setResult } = useStore()

  return (
    //usar el hook useReducer
    <>
      <Container fluid>
        <h1>Google translate</h1>

        <Row>
          <Col>
			<Stack gap={2}>
				<LanguageSelector 
					type={SectionType.From}
					value={fromLanguage}
					onChange={setFromLanguage} />
				<TextArea
					type={SectionType.From}
					value={fromText}
					onChange={setFromText}
				/>
			</Stack>
          </Col>

          <Col xs='auto'>
            <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
              <ArrowIcon />
            </Button>
          </Col>
		  
          <Col>
			<Stack gap={2}>
				<LanguageSelector 
					type={SectionType.To}
					value={toLanguage}
					onChange={setToLanguage} />
				<TextArea
					type={SectionType.To}
					value={result}
					onChange={setResult}
				/>
		  	</Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
