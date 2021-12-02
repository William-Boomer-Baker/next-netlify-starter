import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { InlineWidget } from 'react-calendly'

export default function Appointment() {
  return (
      <div className="section-54 wf-section">
          <div className="div-block-137">
            <h1 className="heading-55">Get In Touch With Us!</h1>
            <p className="paragraph-37">Want to go ahead and schedule an appointment? Use the calendar below to find the best time that works for you.</p>
          </div>
          <div className="html-embed w-embed">
            {/*  Calendly inline widget begin  */}
            <InlineWidget
              url="https://calendly.com/hyperscalemedia/30min"
              styles={{
                minWidth: '320px',
                height: '675px'
              }}
            />
            {/*  Calendly inline widget end  */}
          </div>
        </div>
  )
}
