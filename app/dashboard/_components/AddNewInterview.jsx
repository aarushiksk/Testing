import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { v4 as uuidv4 } from 'uuid';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/GeminiAIModel';
import { LoaderCircle } from 'lucide-react';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { db } from '@/utils/db';
import { useRouter } from 'next/navigation';
import ResumeFeature from './ResumeFeature';
import ExpertBot from './ExpertBot';
import { eq } from 'drizzle-orm';

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const [interviewCount, setInterviewCount] = useState(0);
  const [isUpgrade, setIsUpgrade] = useState(false);
  
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchInterviewCount = async () => {
      if (user) {
        const result = await db.select()
          .from(MockInterview)
          .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress));
        setInterviewCount(result.length);
      }
    };

    fetchInterviewCount();
  }, [user]);

  const handleAddClick = () => {
    if (interviewCount === 5) {
      setIsUpgrade(true);
      return "Upgrade";
    } else {
      setOpenDialog(true);
    }
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const InputPrompt = "Job Role: " + jobPosition + "Job Description:" + jobDesc + "Years of Experience: " + jobExperience + "Depending on this data get me" + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + "interview questions with answers that can be asked from the user in the interview in JSON format"

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = (await result.response.text()).replace('json', '').replace('', '');
    console.log(MockJsonResp);
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db.insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-YYYY HH:mm:ss')
        }).returning({ mockId: MockInterview.mockId });

      if (resp) {
        setOpenDialog(false);
        router.push('/dashboard/interview/' + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }
    setLoading(false);
  };

  
  

  return (
    <div className='p-4 md:p-8 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12'>
  <div
    className='p-5 md:p-8 lg:p-10 w-full md:w-1/2 lg:w-[44%] border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer min-h-[200px] transition-all'
    onClick={handleAddClick}
  >
    <h2 className='font-bold text-lg md:text-xl lg:text-2xl lg:mt-8 text-center'>+ Add new</h2>
  </div>

  <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 w-full'>
    <div className='w-full md:w-1/2 lg:w-1/2'>
      <ResumeFeature /> {/* Resume feature component */}
    </div>
    <div className='w-full md:w-1/2 lg:w-1/2'>
      <ExpertBot /> {/* Expert bot component */}
    </div>
  </div>

      <Dialog open={openDialog}>
        <DialogContent className="max-w-full md:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl lg:text-2xl">Tell us more about your job interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div className='space-y-4'>
                  <h2 className='font-medium text-base md:text-lg lg:text-xl'>Add Details about your Job description, job position/role and years of experience</h2>

                  <div className='mt-3'>
                    <label className='block font-semibold'>Job Role/Job Position</label>
                    <Input
                      placeholder="Ex. Full Stack Data Scientist"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>

                  <div className='mt-3'>
                    <label className='block font-semibold'>Job Description/Tech Stack</label>
                    <Textarea
                      placeholder="Ex. Python, Java, SQL, ReactJS etc..."
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className='mt-3'>
                    <label className='block font-semibold'>Years of Experience</label>
                    <Input
                      className='font-medium'
                      placeholder="Ex. 5"
                      type="number"
                      max="100"
                      required
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className='flex gap-4 justify-end mt-5'>
                  <Button type="button" variant="cancel" onClick={() => setOpenDialog(false)}>Cancel</Button>
                  <Button type="submit" disabled={loading}>
                    {loading ?
                      <>
                        <LoaderCircle className='animate-spin' /> Generating from AI
                      </>
                      : 'Start Your AI Interview'
                    }
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
