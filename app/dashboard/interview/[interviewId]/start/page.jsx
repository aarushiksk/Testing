"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartInterview = ({ params }) => {
  const [interViewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(() => {
    GetInterviewDetails();
  }, []);
  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
  
      if (result.length > 0) {
        // Retrieve the JSON string from the database result
        const rawJsonString = result[0].jsonMockResp;
        console.log("Raw JSON String:", rawJsonString);
  
        // Sanitize the JSON string
        // Remove any backticks or other unexpected characters
        const cleanJsonString = rawJsonString.replace(/`/g, ''); // Example to remove backticks
  
        // Parse the sanitized JSON string
        const parsedMockResp = JSON.parse(cleanJsonString);
  
        console.log("Parsed JSON:", parsedMockResp);
        
        setMockInterviewQuestion(parsedMockResp);
        setInterviewData(result[0]);
      } else {
        console.error("No interview data found for the given interviewId.");
      }
    } catch (error) {
      console.error("Failed to fetch interview details:", error);
    }
  };
  return (
    <div>
      <div className="mt-[5rem] grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Questions */}
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        {/* video or audion recording */}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interViewData}
        />
      </div>
      <div className="flex justify-end gap-6">
        {activeQuestionIndex > 0 && <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
        {activeQuestionIndex!=mockInterviewQuestion?.length-1 && <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
        {activeQuestionIndex==mockInterviewQuestion?.length-1 &&
        <Link href={'/dashboard/interview/'+interViewData?.mockId+'/feedback'}>
         <Button>End Interview</Button>
         </Link>}
      </div>
    </div>
  );
};

export default StartInterview;