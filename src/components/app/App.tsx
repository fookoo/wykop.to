import { Grid } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/home/home.page'
import { Post } from '../../pages/post/post.page'
import { AppBar } from '../AppBar/AppBar'

export const App: React.FC = () => {
  return (
    <Grid container gap={1}>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </Grid>
  )
}
