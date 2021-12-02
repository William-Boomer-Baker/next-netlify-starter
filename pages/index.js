import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
      <div className="section-46 wf-section">
          <div className="div-block-160">
            <div className="div-block-161">
              <h1 className="heading-62 top">Your&nbsp;Outsourced<br /><span className="text-span-24">Fortune 500</span><br />Design Team</h1>
              <h1 className="heading-63" />
              <p className="paragraph-44">We help you effortlessly scale your design team with access to a team composed of 100% UI/UX designers with Fortune 500 or venture-backed startup experience.</p>
              <div className="form-block w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="post" action="/api/submit" className="form-4"><input type="email" className="text-field-6 w-input" maxLength={256} name="email" data-name="email" placeholder="Enter your email" id="email-3" required /><input type="submit" value="Talk To A Strategist" data-wait="Please wait..." className="submit-button-2 w-button" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>Please enter a valid email.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
