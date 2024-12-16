"use client";
import { UserButton } from '@clerk/nextjs';
import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';
import { Typewriter } from 'react-simple-typewriter';

function Dashboard() {
  return (
    <div className='mt-20 p-5 md:p-10'>
      {/* Header */}
      <div className='mb-6'>
        <h2 className='font-bold text-2xl md:text-3xl'>Dashboard</h2>
        <h2 className='text-gray-500 text-sm md:text-lg'>
          <Typewriter
            words={['Seraph AI', 'Create and start your AI MockUp Interview!']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>

      {/* Add New Interview Section */}
      <div className='grid grid-cols-1 gap-5 md:gap-8 my-5'>
        <AddNewInterview />
      </div>

      {/* Previous Interview List */}
      <div className='my-5'>
        <InterviewList />
      </div>
    </div>
  );
}

export default Dashboard;
