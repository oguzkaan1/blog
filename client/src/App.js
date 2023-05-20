import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { AppWrapper } from "./AppWrapper";
import { BlogPostForm } from "./components/BlogForm/BlogPostForm";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPageProducer } from "./components/Error/Error";
function App() {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorPageProducer}
      onError={(err, info) => {
        console.log(err, info);
      }}
      onReset={() => {
        navigate("/");
      }}
    >
      {" "}
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<BlogPostForm />} />
          <Route path="/about" />
        </Routes>
      </AppWrapper>
    </ErrorBoundary>
  );
}

export default App;
