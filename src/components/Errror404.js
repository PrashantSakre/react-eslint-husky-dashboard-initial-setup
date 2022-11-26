import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Typography, Button } from 'antd'

function Error404() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/')
  }

  return (
    <Card
      display="flex"
      alignContent="center"
      justifyContent="flex-start"
      flexDirection="column"
      p={4}
    >
      <Typography>Error 404! Page not Found.</Typography>
      <Button onClick={() => handleNavigate()} style={{ cursor: 'pointer' }}>
        Go to Home
      </Button>
    </Card>
  )
}

export default Error404
