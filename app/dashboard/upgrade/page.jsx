import React from 'react'
import Header from '../_components/Header'
import Image from 'next/image'

const page = () => {

  return (
    <div>
      {/* Details 1 */}
      <div id="details" className="pt-12 pb-16 lg:pt-16">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <div className="mb-16 lg:mb-0 xl:mt-16">
              <h2 className="font-bold mb-6">Resume Based Interviews</h2>
              <p className="mb-4">Unlock tailored interview questions based on your resume. </p>
              <p className="mb-4">Let AI analyze your background to deliver questions that reflect your skills and experience, helping you prepare effectively and confidently for your next interview.</p>
            </div>
          </div> {/* end of col */}
          <div className="lg:col-span-7">
            <div className="xl:ml-14">
              <img className="inline" src="/images/details-1.jpg" alt="alternative" />
            </div>
          </div> {/* end of col */}
        </div> {/* end of container */}
      </div>
      {/* end of details 1 */}

      {/* Details 2 */}
      <div className="py-24">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <div className="mb-12 lg:mb-0 xl:mr-14">
              <img className="inline" src="/images/details-2.jpg" alt="alternative" />
            </div>
          </div> {/* end of col */}
          <div className="lg:col-span-5">
            <div className="xl:mt-12">
              <h2 className="font-bold mb-6">Become a pro at handling different kinds of interviews</h2>
              <ul className="list mb-7 space-y-2">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Expand your preparation with access to a variety of interview rounds, including behavioral, technical, and situational interviews.</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Our platform offers comprehensive mock interviews to cover all aspects of your interview journey, ensuring you're ready for any type of question.</div>
                </li>
              </ul>
            </div>
          </div> {/* end of col */}
        </div> {/* end of container */}
      </div>
      {/* end of details 2 */}


      {/* Details 3 */}
      <div className="pt-16 pb-12">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <div className="mb-16 lg:mb-0 xl:mt-16">
              <h2 className="font-bold mb-6">Gain access to expert bots </h2>
              <p className="mb-4">Trained on extensive data in various fields. These advanced bots can generate tailored interview questions and provide nuanced evaluations, offering a smarter, more effective way to prepare for your interviews.</p>
  
            </div>
          </div> {/* end of col */}
          <div className="lg:col-span-7">
            <div className="ml-14">
              <img className="inline" src="/images/details-3.jpg" alt="alternative" />
            </div>
          </div> {/* end of col */}
        </div> {/* end of container */}
      </div>
      {/* end of details 3 */}


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
    </div>
  )
}

export default page