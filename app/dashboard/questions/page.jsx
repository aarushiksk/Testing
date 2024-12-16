"use client";
import React, { useState, useEffect } from 'react';
import { UserAnswer } from '@/utils/schema';
import { db } from '@/utils/db';
import { jsPDF } from 'jspdf';

const Page = () => {
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const fetchedQuestions = await db.select().from(UserAnswer);
        console.log("Fetched questions:", fetchedQuestions);
        setQuestions(fetchedQuestions.slice(0, 10).map(q => q.question)); // Display only the first 10 questions
        setAllQuestions(fetchedQuestions.map(q => q.question)); // Store all questions for download
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    fetchQuestions();
  }, []);

  const downloadQuestionsAsPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const marginLeft = 10;
    const marginTop = 20;
    const lineHeight = 10; // Adjust as needed
  
    let yPosition = marginTop; // Initialize yPosition
  
    allQuestions.forEach((question, index) => {
      // Split the question into multiple lines if necessary
      const lines = doc.splitTextToSize(`${index + 1}. ${question}`, pageWidth - 2 * marginLeft);
  
      // Print each line
      lines.forEach((line, lineIndex) => {
        if (yPosition + lineHeight > doc.internal.pageSize.height - marginTop) {
          // Add a new page if we exceed the page height
          doc.addPage();
          yPosition = marginTop; // Reset yPosition for new page
        }
  
        doc.text(line, marginLeft, yPosition);
        yPosition += lineHeight; // Update yPosition for next line
      });
    });
  
    doc.save('interview-questions.pdf');
  };

  return (
    <div className="mt-20 min-h-screen">
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
        All Interview Questions Answered By You
      </h1>

      <ul className="bg-white shadow-lg rounded-lg p-6">
        {questions.map((question, index) => (
          <li
            key={index}
            className="mb-4 p-4 rounded-lg bg-blue-100 text-blue-800 font-medium text-lg hover:bg-blue-200 transition-all duration-200"
          >
            {index + 1}. {question}
          </li>
        ))}
      </ul>

      <div className="mt-6 mb-5 flex justify-center">
        <button
          onClick={downloadQuestionsAsPDF}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-200"
        >
          Download All Questions as PDF
        </button>
      </div>
    </div>
  );
};

export default Page;
