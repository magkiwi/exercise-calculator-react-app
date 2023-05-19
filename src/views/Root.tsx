import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import { routes } from 'config'
import { Sidebar } from 'views/Sidebar/Sidebar'
import { Calculator } from 'views/Calculator/Calculator'

export const Root = () => {
  return (
      <Container>
          <Sidebar/>
          <Routes>
              <Route path={routes.home} element={<Calculator/>}/>
          </Routes>
      </Container>
  )
}
