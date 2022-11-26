import { Button, Typography, Input } from 'antd'
import React from 'react'
import { Container, Row, Col } from 'react-grid-system'

const { Title } = Typography
function SignUp() {
  return (
    <Container fluid className="text-center">
      <Row justify="center" align="center" direction="row" className="h-100vh">
        <Col>
          <Row justify="center" align="center">
            <Col>
              <Title level={4}>Welcome to</Title>
              <Title style={{ margin: 0 }}>
                react-eslint-husky-dashboard-initial-setup
              </Title>
            </Col>
          </Row>
          <Title level={5}>Register using your mobile number</Title>
          <Container
            fluid
            className="transparent"
            style={{ marginTop: '1rem' }}
          >
            <Row
              align="center"
              justify="center"
              direction="column"
              gutterWidth={16}
            >
              <Col md={4} xs={10} style={{ margin: '0.5rem 0' }}>
                <Input size="large" placeholder="Full Name" />
              </Col>
              <Col md={4} xs={10} style={{ margin: '0.5rem 0' }}>
                <Input size="large" placeholder="Mobile Number" />
              </Col>
              <Col md={4} xs={10} style={{ margin: '0.5rem 0' }}>
                <Input size="large" placeholder="Enter OTP" />
              </Col>
              <Col md={4} xs={10} style={{ margin: '0.5rem 0' }}>
                <Button type="primary" size="large" style={{ width: '100%' }}>
                  Send OTP
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp
