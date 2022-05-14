import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./routes/home/Home";
import Post from "./routes/post/Post";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/posts/:slug"
          element={<Post />}
        />
      </Routes>
    </BrowserRouter>
  );
}