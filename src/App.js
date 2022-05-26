import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPost from "./routes/category_post/CategoryPost";
import Home from "./routes/home/Home";
import Post from "./routes/post/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styled from "styled-components"
import { SignIn } from "./routes/admin/SignIn";
import { useSelector } from "react-redux";

export default function App() {
  const token = useSelector((state) => state.auth.token)

  return (
    <>
      <Header />
      <Container>
        <MainContents>
          <BrowserRouter>
            <Routes>
              <Route
                index
                element={<Home />}
              />
              <Route
                path="/posts/:slug"
                element={<Post />}
              />
              <Route
                path="/categories/:slug"
                element={<CategoryPost />}
              />
              <Route
                path="/admin/"
                element={<Admin />}
              />
              <Route
                path="/login/"
                element={<SignIn />}
              />
            </Routes>
          </BrowserRouter>
        </MainContents>
        <SubContents>
          <Sidebar />
        </SubContents>
      </Container>
    </>
  );
}

const Container = styled.div`
    display: flex;
    width: 100%;
`

const MainContents = styled.div`
    width: 75%;
`

const SubContents = styled.div`
    width: 25%;
`