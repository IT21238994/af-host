import React, { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function About() {
  const [img, setImg] = useState(null);
  const [img2, setImg2] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButton = async () => {
    try {
      const res = await axios.get(
        'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
      );
      setImg(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  
  const handleButton2 = async () => {
    try {
      const res = await axios.get(
        'https://api.nasa.gov/planetary/earth/imagery'
      );
      setImg2(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };


  return (
    <>
      <div>
        <h1>APOD- Astronomy Picture of the Day</h1>
          </div>
     
      <div>
        <p>
        One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most 
        popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint 
        structures the APOD imagery and associated metadata so that it can be repurposed for other applications.
        In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. 
        These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help 
        with discoverability of relevant imagery.
        </p>
      </div>

      <div>
        <button type="button" class="btn btn-secondary btn-lg btn-block"  onClick={handleButton}>View Picture</button>
      </div>
      <div>
        {img && (
          <img src={img.url} alt={img.title} className="w-full" />
        )}
      </div>


      <div>
        <button type="button" class="btn btn-primary" onClick={handleButton2}>Click2</button>
      </div>
      <div>
        {img2 && (
          <img src={img2.url} alt={img2.title} className="w-full" />
        )}
      </div>



      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default About;
