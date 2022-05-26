import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPost from "./routes/category_post/CategoryPost";
import Home from "./routes/home/Home";
import Post from "./routes/post/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styled from "styled-components"
import { SignIn } from "./routes/admin/SignIn";
import { AdminLayout } from "./routes/layout/AdminLayout";
import { Admin } from "./routes/admin/Admin";
import { useSelector } from "react-redux";
import { DefaulLayout } from "./routes/layout/DefaulLayout";

export default function App() {
  const token = useSelector((state) => state.auth.token)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaulLayout />}>
            <Route index element={<Home />} />
            <Route path="categories/:slug" element={<CategoryPost />} />
            <Route path="posts/:slug" element={<Post />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}