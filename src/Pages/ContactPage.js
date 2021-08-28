import React, {useState} from 'react'
import styled from 'styled-components';
import { Form, Col, Row,Button } from 'react-bootstrap';

function ContactPage() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };

    return (
        <ContactPageStyled>
        <div className="safeview">
            <div className="ContactPage">
                <div className="map-sect">
                <iframe title="myLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97475.50057551643!2d-8.486314356307988!3d40.22886990393581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f9144aacd16d%3A0x634564477b42a6b9!2sCoimbra!5e0!3m2!1spt-PT!2spt!4v1629567707064!5m2!1spt-PT!2spt" 
                width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>                </div>
                <div className="contact-sect">
                    <h1>Let's Talk !</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                            <Form.Control className="mb-2" placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control className="mb-2" placeholder="Last name" />
                            </Col>
                        </Row>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write me a message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                        <Button className="mb-2" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
        </ContactPageStyled>
    )
}
const ContactPageStyled = styled.header`
.safeview{
    padding: 5rem;
}
.ContactPage{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 6rem;
    @media screen and (max-width: 1270px){
        grid-template-columns: repeat(1, 1fr);
        .map-sect{
            width: 100%;
            height: 50vh;
            margin-bottom: 1rem;
        }
    }
    .contact-sect{
        width: 100%;
    }
}
.map-sect{
    width: 97%;
    padding: 1rem;
    background-color:#191D2B;
    iframe{
        width: 100%;
        height: 100%;
    }
}
.contact-sect{
    h1{
        color:#057FFF;
    }
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.title{
    margin-bottom: 5rem;
}
`;

export default ContactPage;
