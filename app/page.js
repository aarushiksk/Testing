"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  const navigate = (url) => {
    router.push(url);
  }

  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
          {/* Image Logo */}
          <a
            className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
            href="index.html"
          >
            <Image
              src="/images/logo1.png"
              alt="alternative"
              className="h-auto"
              width={110}
              height={110}
              style={{ objectFit: 'contain' }}
            />
          </a>

          <button
            className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
          </button>

          <div
            className={`navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center ${isOpen ? 'open' : ''
              }`}
            id="navbarsExampleDefault"
          >
            <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
              <li>
                <a className="nav-link page-scroll active" href="#header">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="dropdown">
                <a className="nav-link page-scroll cursor-pointer" onClick={() => navigate('/dashboard')}>
                  Get Started
                </a>
              </li>
            </ul>
            <span className="block lg:ml-3.5">
              <a className="no-underline" href="#your-link">
                <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
              </a>
              <a className="no-underline" href="#your-link">
                <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
              </a>
            </span>
            {isOpen && (
              <button
                className="absolute top-4 right-4 text-xl"
                onClick={toggleNavbar}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Header */}
      <header id="header" className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
            <h1 className="h1-large mb-5">Ace your next interview with AI!</h1>
            <p className="p-large mb-8">Perfect Your Interview Skills with AI-Powered Mock Sessions Tailored to Your Job Role</p>
            <a className="btn-solid-lg" onClick={() => navigate('/dashboard')}><i className="fab fa-apple"></i>Get Started</a>
            <a className="btn-solid-lg secondary" href="#features"><i className="fab fa-google-play"></i>Learn More</a>
          </div>
          <div className="xl:text-right">
            <Image src="/images/front2.png" className="mt-7 pt-8 w-[140%] h-[80%] max-w-none " alt="alternative" width={1300} height={900} />
          </div>
        </div> {/* end of container */}
      </header>

      {/*Introduction*/}
      <div className="pt-4 pb-14 text-center">
        <div className="container px-4 sm:px-8 xl:px-4">
          <p className="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
            Seraph AI: Your Ultimate Interview Coach - Experience Next-Gen  SaaS Customized for Your Job Role to Ensure Success
          </p>
        </div> {/* end of container */}
      </div>

      {/* Features */}
      <div id="features" className="cards-1">
        <div className="container px-4 sm:px-8 xl:px-4">
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <Image src="/images/features-icon-1.svg" alt="alternative" width={300} height={400} className="w-100 h-300" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Personalized Question Generation</h5>
              <p className="mb-4">Craft targeted interview questions based on your job role, ensuring you practice with relevant and realistic scenarios.</p>
            </div>
          </div>
          {/* end of card */}

          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="/images/features-icon-2.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Interactive Answer Recording</h5>
              <p className="mb-4">Record your responses in real-time, just like in a live interview, allowing you to practice speaking and articulating your thoughts under pressure</p>
            </div>
          </div>
          {/* end of card */}

          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="/images/features-icon-3.svg" alt="alternative" width={300} height={500} />
            </div>
            <div className="card-body">
              <h5 className="card-title">AI-Driven Feedback</h5>
              <p className="mb-4">Receive instant, comprehensive feedback on your performance highlighting strengths, areas for improvement, and tailored responses.</p>
            </div>
          </div>
          {/* end of card */}

          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="/images/features-icon-4.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Flexible Practice Sessions</h5>
              <p className="mb-4">Schedule and conduct mock interviews at your convenience, providing a flexible and accessible way to prepare for interviews on your own time.</p>
            </div>
          </div>
          {/* end of card */}

          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="/images/features-icon-5.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Interview Dashboard</h5>
              <p className="mb-4">Access a personalized dashboard where you can review past interview sessions, track your progress over time, and revisit AI feedback to continually refine your skills.</p>
            </div>
          </div>
          {/* end of card */}

          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="/images/features-icon-6.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Comprehensive Interview Preparation</h5>
              <p className="mb-4">From question generation to detailed feedback, Seraph AI offers a complete, end-to-end solution for mastering interview techniques and boosting your confidence.</p>
            </div>
          </div>
          {/* end of card */}
        </div> {/* end of container */}
      </div> {/* end of cards-1 */}


      {/*Testimonials*/}

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Testimonials
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">

                <Image
                  alt=""
                  src="/images/Malay Testimonial.jpg"
                  width={80}
                  height={80}
                  className="rounded-3xl h-12 w-12"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Malay Pandey
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
              "The UI is very clean and minimal, great use of AI, I felt a lot more confident after preparing for my graphics designer interview with this tool. Really affordable too!"
              </p>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  alt=""
                  src="/images/Malay Testimonial.jpg"
                  width={80}
                  height={80}
                  className="rounded-3xl h-12 w-12"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
                rerum incidunt, a consequuntur recusandae ab saepe illo est quia
                obcaecati neque quibusdam eius accusamus error officiis atque
                voluptates magnam!
              </p>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
              <Image
                  alt=""
                  src="/images/Rudra testimonial.jpeg"
                  width={80}
                  height={80}
                  className="rounded-3xl h-12 w-12"
                />
                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
                rerum incidunt, a consequuntur recusandae ab saepe illo est quia
                obcaecati neque quibusdam eius accusamus error officiis atque
                voluptates magnam!
              </p>
            </blockquote>
          </div>
        </div>
      </section>


      <div id="pricing" className="cards-2">
        <div className="absolute bottom-0 h-40 w-full bg-white"></div>
        <div className="container px-4 pb-px sm:px-8">
          <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">Pricing options for all budgets</h2>
          <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto">Our pricing plans are setup in such a way that any user can start enjoying Pavo without worrying so much about costs. They are flexible and work for any type of industry</p>

          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="mb-3 flex justify-center items-center">
                <Image src="/images/crown.png" width={30} height={30} alt="Crown" />
              </div>
              <div className="card-title">STANDARD</div>
              <div className="price"><span className="currency">₹</span><span className="value">1</span></div>
              <div className="frequency">monthly</div>
              <ul className="list mb-7 space-y-2 text-left">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Customer Support</div>
                </li>
                <li className="flex ">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Upto 10 interviews</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Past Interview Questions
                  </div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/wrong.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Resume based interview</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/wrong.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Access to more Interview Rounds</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#download">Upgrade</a>
              </div>
            </div>
          </div> {/* end of card */}
          {/* end of card */}

          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="mb-3 flex justify-center items-center">
                <Image src="/images/crown.png" width={30} height={30} alt="Crown" />
              </div>
              <div className="card-title">ADVANCED</div>
              <div className="price"><span className="currency">₹</span><span className="value">2</span></div>
              <div className="frequency">monthly</div>
              <ul className="list mb-7 space-y-2 text-left">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Customer Support</div>
                </li>
                <li className="flex ">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Upto 30 interviews</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Past Interview Questions
                  </div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Access to more Interview Rounds</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/wrong.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Resume based Interview</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#download">Upgrade</a>
              </div>
            </div>
          </div> {/* end of card */}
          {/* end of card */}

          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="mb-3 flex justify-center items-center">
                <Image src="/images/crown.png" width={30} height={30} alt="Crown" />
              </div>
              <div className="card-title">COMPLETE</div>
              <div className="price"><span className="currency">₹</span><span className="value">3</span></div>
              <div className="frequency">monthly</div>
              <ul className="list mb-7 space-y-2 text-left">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Customer Support</div>
                </li>
                <li className="flex ">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Unlimited interviews</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Past Interview Questions
                  </div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Access to more Interview Rounds</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div className='flex items-center'>
                    <Image src={'/images/check.png'} className={'w-50 h-50 mr-2'} width={25} height={25}
                    />
                    Resume based Interview</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="https://rzp.io/i/Vt0jQ8kBJG">Upgrade</a>
              </div>
            </div>
          </div> {/* end of card */}
          {/* end of card */}

        </div> {/* end of container */}
      </div> {/* end of cards-2 */}
      {/* end of pricing */}

      {/* Conclusion */}
      <div id="download" className="basic-5">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
          <div className="mb-13 lg:mb-0">
            <img src="/images/landing-landing.png" alt="alternative" />
          </div>
          <div className="lg:mt-24 xl:mt-44 xl:ml-12">
            <p className="mb-9 text-gray-800 text-3xl leading-10">Ace your interview today with Seraph AI, affordable, flexible and convenient.</p>
    
          </div>
        </div> {/* end of container */}
      </div> {/* end of basic-5 */}
      {/* end of conclusion */}


      {/* Footer */}
      <div className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
            Seraph AI is a website and you can reach the team at<a className="text-indigo-600 hover:text-gray-500" href="mailto:email@domain.com">email@domain.com</a>
          </h4>
          <div className="social-container">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-pinterest-p fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-instagram fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-youtube fa-stack-1x"></i>
              </a>
            </span>
          </div> {/* end of social-container */}
        </div> {/* end of container */}
      </div> {/* end of footer */}
      {/* end of footer */}



    </div>

  );
}
