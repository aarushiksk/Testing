// src/components/PremiumFeature.jsx
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';
import { eq } from 'drizzle-orm';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { chatSession } from '@/utils/GeminiAIModel';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const ExpertBot = () => {

    const [openDailog, setOpenDailog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const [interviewCount, setInterviewCount] = useState(0);
    const [isUpgrade, setIsUpgrade] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);

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
            setOpenDailog(true);
        }
    };

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const InputPrompt = `Job Role: ${jobPosition} Job Description: ${jobDesc} Years of Experience: ${jobExperience} Depending on this data get me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions with answers that can be asked from the user in the interview in JSON format`;

        const result = await chatSession.sendMessage(InputPrompt);
        const MockJsonResp = (await result.response.text()).replace('json', '').replace('', '');

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
                setOpenDailog(false);
                router.push('/dashboard/interview/' + resp[0]?.mockId);
            }
        } else {
            console.log("ERROR");
        }
        setLoading(false);
    };


    const notify = () => {
        toast.info('🔒 Upgrade to unlock this feature!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
    };

    return (
        <div>
            <ToastContainer />
            <div className='flex justify-center items-center p-10 border rounded-lg bg-pink-100 animate-pulse hover:scale-105 hover:shadow-md cursor-pointer transition-all min-h-[200px]' onClick={handleAddClick}>
  <Image src="/images/lock.png" className='block' alt="Locked" width={40} height={40} />
</div>

            <Dialog open={openDailog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader className="relative">
                        <div className="flex justify-between items-center">
                            <DialogTitle className="text-2xl">
                                Tell us more about your job interview
                            </DialogTitle>
                            <span className="bg-gray-200 text-gray-700 text-xs font-bold py-1 px-2 rounded-full">
                                Advanced
                            </span>
                        </div>

                        <DialogDescription>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <h2 className='font-medium'>Add Details about your Job description, job position/role and years of experience</h2>

                                    <div className='mt-7 my-3'>
                                        <label className='font-semibold'>Job Role/Job Position</label>
                                        <Input placeholder="Ex. Full Stack Data Scientist"
                                            required
                                            onChange={(event) => setJobPosition(event.target.value)}
                                        />
                                    </div>

                                    <div className='my-3'>
                                        <label className='font-semibold transition-colors'>Job Description/Tech Stack</label>
                                        <Textarea placeholder="Ex. Python,Java,SQL,ReactJS etc..."
                                            required
                                            onChange={(event) => setJobDesc(event.target.value)}
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label className='font-semibold'>Years of Experience</label>
                                        <Input className='font-sans font-medium' placeholder="Ex. 5" type="number" max="100"
                                            required
                                            onChange={(event) => setJobExperience(event.target.value)}
                                        />
                                    </div>

                                    <div className='my-3'>
                                        <label className='font-bold'>Upload Resume (PDF)</label>

                                        <div className="relative font-semibold">
                                            <Input
                                                type="file"
                                                accept="application/pdf"
                                                required
                                                className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                                                onChange={(event) => {
                                                    setResumeFile(event.target.files[0]);
                                                }}
                                            />
                                            <Button
                                                className='bg-primary text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition-colors'
                                                onClick={() => document.querySelector('input[type="file"]').click()}
                                            >
                                                Choose File
                                                <Image src='/images/crown.png'
                                                    width={25}
                                                    height={25}
                                                />
                                            </Button>

                                            {resumeFile && (
                                                <p className="mt-1 ml-2 text-gray-700">
                                                    Selected file: {resumeFile.name}
                                                </p>
                                            )}

                                        </div>

                                    </div>
                                </div>
                                <div className='flex gap-5 justify-end'>
                                    <Button type="button" variant="cancel" onClick={() => setOpenDailog(false)}>Cancel</Button>
                                    <Button type="submit" disabled={loading}>
                                        {loading ?
                                            <>
                                                <LoaderCircle className='animate-spin' /> 'Generating from AI'
                                            </> : 'Start Your AI Interview'
                                        }
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div >

    );
};

export default ExpertBot;