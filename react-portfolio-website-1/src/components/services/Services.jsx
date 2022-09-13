import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {/* FRONTEND SERVICE */}
        <article className='service'>
          <div className="service__head">
            <h3>Front End Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing the user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating responsive websites on various device types.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Translating designs into functional web applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Following SEO best practices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fixing bugs and testing for usability.</p>
            </li>
          </ul>
        </article>

        {/* BACKEND SERVICE */}
        <article className='service'>
          <div className="service__head">
            <h3>Back End Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database creation, integration, and management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Server-side web application logic.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reporting — generating analytics and statistics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud computing integration.</p>
            </li>
          </ul>
        </article>

         {/* CLOUD SERVICE */}
         <article className='service'>
          <div className="service__head">
            <h3>Cloud </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deployment of applications on the cloud.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Networking.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Scaling.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Security.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services