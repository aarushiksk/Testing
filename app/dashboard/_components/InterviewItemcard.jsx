import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function InterviewItemcard({interview}) {

  const router=useRouter()
  
  const onStart=()=>{
   router.push('/dashboard/interview/'+interview?.mockId)
  }

  const onFeedback=()=>{
    router.push('/dashboard/interview/'+interview?.mockId+'/feedback')
  }

  return (
    <div className=' bg-white border shadow-sm rounded-lg p-3 m-2'>
         <h2 className='font bold text-primary'>{interview?.jobPosition}</h2>
         <h2 className='text-sm text-gray-700'>{interview?.jobExperience} Years of Experience</h2>
         <h2 className='text-xs text-gray-500'>Created At:{interview.createdAt}</h2>
         <div className="flex justify-between mt-2 gap-5">
            <Button size="sm" variant="outline" className="w-full" onClick={onFeedback}>FeedBack</Button>
            <Button size="sm" className="w-full bg-[#5a3ee9]  hover:bg-white hover:text-black" onClick={onStart}>Start</Button>
         </div>
    </div>
  )
}


export default InterviewItemcard