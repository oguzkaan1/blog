import React, { useState } from "react";
import "./BlogPostForm.scss";

export const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bu noktada, blog yazısının gönderimini gerçekleştirebilirsiniz
    // Gönderim işlemi genellikle bir API çağrısı ile gerçekleştirilir
  };

  return (
    <div className="blog-post-form-container">
      <h2>Blog Yazısı Ekle</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Başlık:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />

        <label htmlFor="body">İçerik:</label>
        <textarea id="body" value={body} onChange={handleBodyChange} />

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};
