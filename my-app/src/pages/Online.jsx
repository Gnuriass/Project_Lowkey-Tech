import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Online() {
  return (
    <div className="home-page d-flex">
      {/* Sidebar */}
      <div className="sidebar p-3">
        <h3 className="logo">หมวดหมู่</h3>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">Overview</li>
          <li className="nav-item">Courses</li>
          <li className="nav-item">Schedule</li>
          <li className="nav-item">chat</li>
          <li className="nav-item">Setting</li>
        </ul>
        <div className="mt-auto">
          <Button variant="warning" className="w-100 mt-3">
            Upgrade to PRO
          </Button>
          <Button variant="outline-secondary" className="w-100 mt-3">
            Log out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="content flex-grow-1 p-4">
        {/* Recent Search */}
        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Popular Class</h5>
            <Link to="/classes/popular">See all</Link>
          </div>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Digital Art for Print</Card.Title>
                  <Card.Text>$30</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Lunacy Design Class</Card.Title>
                  <Card.Text>$40</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Newest Class */}
        <section>
          <div className="d-flex justify-content-between align-items-center">
            <h5>Newest Class</h5>
            <Link to="/classes/newest">See all</Link>
          </div>
          <Row>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Drawing Toward Illustrations</Card.Title>
                  <Card.Text>$50</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Illustrations to Life</Card.Title>
                  <Card.Text>$45</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar p-3">
        <h5>Latest Learned</h5>
        <Card className="mb-3">
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Productivity Masterclass</Card.Title>
            <small>28 minutes</small>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>Adobe Illustrator Training (50%)</Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>Hand-Painted Textures (30%)</Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Online;
