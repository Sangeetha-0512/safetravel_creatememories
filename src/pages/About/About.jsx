import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card } from "react-bootstrap";
import aboutImg from "../../assets/images/about/aboutimg.png";
import "../About/about.css";
import icons1 from "../../assets/images/icons/destination.png";
import icons2 from "../../assets/images/icons/best-price.png";
import icons3 from "../../assets/images/icons/quick.png";

const About = () => {
  useEffect(() => {
    document.title = "About us ";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="About us" pagename="About us" />
      <section className="py-5">
        <Container>
          <Row>
            <Col md="8">
              <div className="about-content">
                <div className="about-image position-relative">
                  <img
                    src={aboutImg}
                    alt="about "
                    className="img-fluid rounded-5"
                  />
                  <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm">
                    <h3 className="h2 fw-bold  text-white">
                      {" "}
                      HOW WE ARE BEST FOR TRAVEL !
                    </h3>
                  </div>
                </div>
              </div>
              <h2 className="h2 font-bold  pt-4 pb-2">
                HOW WE ARE BEST FOR TRAVEL !
              </h2>
              <p className="body-text mb-2">
                At our core, we believe travel is more than just reaching a
                destination—it's about the journey and the memories you create
                along the way. With carefully curated travel plans, we ensure
                every moment of your trip is filled with excitement, comfort,
                and unforgettable experiences.
              </p>
              <p className="body-text mb-2">
                We pride ourselves on offering personalized itineraries tailored
                to your preferences. Whether you're seeking adventure,
                relaxation, or a mix of both, our team goes the extra mile to
                craft trips that suit your unique travel style. With us, no
                detail is overlooked.
              </p>
              <p className="body-text mb-2">
                Our network of trusted partners and expert guides ensures you
                get the best services at every destination. From seamless
                bookings to 24/7 support, we’re dedicated to making your journey
                stress-free and truly exceptional. Experience travel like never
                before—choose us for your next adventure!
              </p>
            </Col>
            <Col md="4">
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2 ">
                      <img src={icons1} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">
                    {" "}
                    50+ Destination{" "}
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Explore a world of possibilities with over 50 breathtaking
                    destinations to choose from. Whether you're seeking serene
                    beaches, vibrant cities, or adventurous escapes, we have the
                    perfect place waiting for you.
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2 ">
                      <img src={icons2} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">
                    {" "}
                    Best Price In The Industry{" "}
                  </Card.Title>
                  <p className="mb-2 body-text">
                    We guarantee unbeatable prices for all your travel needs.
                    Our competitive rates ensure you get the most value for your
                    money without compromising on quality. Travel smart, travel
                    affordably with us!
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2 ">
                      <img src={icons3} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">
                    {" "}
                    Super Fast Booking{" "}
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Book your dream trips in just a few clicks! Our intuitive
                    platform makes planning your travels seamless and
                    hassle-free. Save time and focus on the journey ahead with
                    our lightning-fast booking process.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
