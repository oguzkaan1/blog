import React from "react";
import { ErrorPageLayout } from "../Error/ErrorPage";
import { useNavigate } from "react-router";

export const ErrorPageProducer = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  const navigate = useNavigate();
  return (
    <ErrorPageLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vh",
          gap: "3vh",
        }}
      >
        <h1
          style={{
            color: "#f44336",
            fontWeight: "bold",
          }}
        >
          HATA
        </h1>

        <h1>Ali Bir Şeyler Yanlış Gitti. Sen En İyisi Ana Sayfaya Git.</h1>
        <button
          label="Ana Sayfaya Dön"
          onClick={() => {
            resetErrorBoundary();
            navigate("/");
          }}
          style={{
            padding: "1vh 2vw",
          }}
        >
          Ana Sayfaya Dön
        </button>
      </div>
    </ErrorPageLayout>
  );
};
