import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

const ModalView = ({ props, showPdf}) => {

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={props.image1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={props.image2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={props.image3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>   
                <br></br>
          {props.text}
          <br></br><br></br>
          {showPdf()}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalView;