"use client";
import { useState } from "react";

function Page() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    console.log("File added to FormData:", formData.get("file"));

    setLoading(true);
    setError("");
    setText("");

    try {
      const response = await fetch("https://experiment-mhuo.onrender.com/", {
        method: "POST",
        body: formData,
      });

      console.log('Response Status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to extract text");
      }

      const data = await response.json();
      console.log('Extracted Text:', data.text);
      setText(data.text || "No text extracted.");
    } catch (error) {
      console.error("Error during text extraction:", error);
      setError("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload PDF"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {text ? (
          <div>
            <h3>Extracted Text:</h3>
            <pre>{text}</pre>
          </div>
        ) : (
          <p>No text extracted or text is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Page;
