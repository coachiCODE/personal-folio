import React, {useState} from 'react'
import styled from 'styled-components';
import { Form, Col, Row,Button } from 'react-bootstrap';
import { db } from "../firebase"; 

const ContactPage= () => {

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        Fname: Fname,
        Lname: Lname,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
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
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                            <Form.Control className="mb-2" placeholder="First name"
                            value={Fname}
                            onChange={(e) => setFname(e.target.value)}
                            />
                            </Col>
                            <Col>
                            <Form.Control className="mb-2" placeholder="Last name"
                            value={Lname}
                            onChange={(e) => setLname(e.target.value)} />
                            </Col>
                        </Row>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write me a message</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                        <Button className="mb-3" variant="primary" type="submit"
                        style={{ background: loader ? "#ccc" : " #057FFF" }}>
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
