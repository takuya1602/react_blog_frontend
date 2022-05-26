import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPost from "./routes/category_post/CategoryPost";
import Home from "./routes/home/Home";
import Post from "./routes/post/Post";

export default function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}