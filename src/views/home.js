import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Accordion from '../components/accordion'
import Feature from '../components/feature'
import Check from '../components/check'
import TestimonialCard1 from '../components/testimonial-card1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <div id="notifcation" className="home-notification">
            <Link to="/">
              <Announcement
                rootClassName="announcement-root-class-name"
                className="home-component"
              ></Announcement>
            </Link>
          </div>
          <Navbar rootClassName="navbar-root-class-name"></Navbar>
        </div>
        <div className="home-hero">
          <div className="home-content">
            <h1 className="home-title">
              <span className="home-text">
                Receipt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text001"></br>
              <span className="home-text002">Koala</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <span className="home-caption">
              Receipt Koala is a clean, easy to use, finance app.
            </span>
            <div className="home-hero-buttons">
              <div className="home-ios-btn">
                <img
                  alt="pastedImage"
                  src="/pastedimage-zmzg.svg"
                  className="home-apple"
                />
                <span className="home-caption1"> iOS</span>
              </div>
              <div className="home-android-btn">
                <img
                  alt="pastedImage"
                  src="/pastedimage-ld65.svg"
                  className="home-android"
                />
                <span className="home-caption2">Android</span>
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-column">
              <img
                alt="pastedImage"
                src="/pastedimage-oy26-800h.png"
                className="home-pasted-image"
              />
            </div>
            <div className="home-column1">
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyMHx8cGhvbmUlMjUyMGFwcHxlbnwwfHx8fDE2OTg2MDg4MTN8MA&amp;ixlib=rb-4.0.3&amp;h=800"
                className="home-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="/pastedimage-c39.svg"
                className="home-pasted-image2"
              />
            </div>
            <div className="home-column2">
              <img
                alt="pastedImage"
                src="/pastedimage-iqnj.svg"
                className="home-pasted-image3"
              />
              <img
                alt="pastedImage"
                src="/pastedimage-06e.svg"
                className="home-pasted-image4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-video">
        <div className="home-content1">
          <div className="home-header1">
            <h2 className="home-text004">
              Built specifically for people who want receipt digitalisation
            </h2>
          </div>
          <div className="home-video-container">
            <video
              src="https://www.youtube.com/watch?v=MRQ69XeDxVk"
              loop
              muted
              poster="/pastedimage-v2-900w.png"
              autoPlay
              controls
              className="home-video1"
            ></video>
            <div className="home-heading-container">
              <div className="home-heading01">
                <span className="home-text005">How the App Works</span>
                <span className="home-text006">
                  <span className="home-text007">
                    Receipt Koala simply replaces the physical receipts with
                    e-receipts or e-invoices that are stored in our system.
                    After a simple QR code scan at the checkout, everything
                    works automatically and you access your e-receipt via the
                    app installed on your phone.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-explore">
                <span className="home-text009">
                  Explore pricing plans -&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <span className="home-caption3">200k</span>
          <span className="home-description">
            Businesses who have chosen us to digitise their receipts
          </span>
        </div>
        <div className="home-stat1">
          <span className="home-caption4">3,5 millions</span>
          <span className="home-description1">
            Users worldwide who find Receipt Koala makes their everyday shopping
            easier
          </span>
        </div>
        <div className="home-stat2">
          <span className="home-caption5">10.000 +</span>
          <span className="home-description2">
            Transactions through our partners
          </span>
        </div>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <div className="home-image">
            <div className="home-image-highlight">
              <span className="home-text010">
                <span className="home-text011">
                  Easy and simple app for you
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-content2">
            <h2 className="home-text013">
              Everything you get with Receipt Koala
            </h2>
            <Highlight
              title="Easy Peasy"
              description="You'll have all your receipts and invoices for all your transactions and purchases in one place."
            ></Highlight>
            <Highlight
              title="Quick identification"
              description="No more receipt hoarding and sorting"
            ></Highlight>
            <div className="home-explore1">
              <span>Explore pricing plans -&gt;</span>
            </div>
          </div>
        </div>
        <div className="home-section1">
          <div className="home-content3">
            <div className="home-heading02">
              <h2 className="home-text015">
                <span>Reinventing Receipt</span>
                <br></br>
                <span>Technology</span>
              </h2>
              <span className="home-text019">
                Join more than a million of happy users
              </span>
            </div>
            <div className="home-content4">
              <div className="home-points">
                <Point text="QR Solution: Enjoy the convenience of scanning QR codes to access your digital receipts."></Point>
                <Point text="Personalized Coupons: Receive tailor-made offers and discounts based on your shopping habits."></Point>
                <Point text="Insightful Data: Gain valuable insights into your purchasing behavior for a more personalized shopping experience."></Point>
              </div>
              <Link to="/" className="home-navlink1">
                <div className="home-get-started">
                  <span className="home-sign-up">Get started now</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-image1"></div>
        </div>
        <div className="home-section2">
          <div className="home-image2"></div>
          <div className="home-content5">
            <h2 className="home-text020">
              <span>Benefits for everyone</span>
              <br></br>
            </h2>
            <Accordion text="Benefits for Users:"></Accordion>
          </div>
        </div>
      </div>
      <div id="Demo" className="home-banner">
        <h1 className="home-text023">
          <span>
            Begin your financial journey on
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Receipt Koala</span>
        </h1>
        <span className="home-text027">
          <span className="home-text028">
            If you not sure if Receipt Koala is for you or you have question
            don&apos;t hesitate to reach us and we 
          </span>
          <span className="home-text029">
            will call or write you back in 24 hours.
          </span>
          <br></br>
        </span>
        <input
          type="text"
          placeholder="Email here..."
          className="home-textinput input"
        />
        <img alt="image" src="/mask%20group.svg" className="home-image3" />
        <Link to="/" className="home-navlink2">
          <div className="home-get-started1">
            <span className="home-sign-up1">Book a demo</span>
          </div>
        </Link>
      </div>
      <div id="Features" className="home-features">
        <div className="home-header2">
          <div className="home-tag">
            <span className="home-text031">Features</span>
          </div>
          <div className="home-heading03">
            <h2 className="home-text032">
              Everything you get with Receipt Koala
            </h2>
            <span className="home-text033">
              <span className="home-text034">
                We are working to make your life easier. We provide you
              </span>
              <br></br>
              <span>smart features to make it happen.</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-feature-list">
          <Feature
            title="Effortless Digital Receipts: "
            description="Ditch paper clutter and embrace eco-friendly digital receipts with Receipt Koala."
          ></Feature>
          <Feature
            title="Eco-Friendly Shopping:"
            thumbnail="/vector6113-r6dl.svg"
            description="Join the green revolution by using Receipt Koala for paperless receipts."
          ></Feature>
          <Feature
            title="Seamless Purchase Records: "
            thumbnail="/vector6113-6zj.svg"
            description="Keep your shopping history in one place with our user-friendly e-receipts."
          ></Feature>
          <Feature
            title="Instant Receipts, No Hassle: "
            thumbnail="/vector6113-lvvs.svg"
            description="Say goodbye to long paper receipts and hello to instant e-receipts in your app."
          ></Feature>
          <Feature
            title="Reduce Paper Waste:"
            thumbnail="/vector6114-cupp.svg"
            description="Contribute to saving trees and reducing waste with Receipt Koala's digital receipts."
          ></Feature>
          <Feature
            title="Shopping Simplified: "
            thumbnail="/vector6114-6m1e.svg"
            description="Make your shopping experience hassle-free with organized e-receipts at your fingertips."
          ></Feature>
          <Feature
            title="Track Your Spending:"
            thumbnail="/vector6114-yjl.svg"
            description="Easily track and manage your expenses with Receipt Koala's digital receipt system."
          ></Feature>
          <Feature
            title="Eco-Conscious Shopping: "
            thumbnail="/vector6113-lvvs.svg"
            description="Choose Receipt Koala for a sustainable shopping experience without paper waste."
          ></Feature>
        </div>
      </div>
      <div id="Steps" className="home-steps">
        <h1 className="home-text038">Discover Our Process</h1>
        <span className="home-text039">
          <span className="home-text040">
            With Receipt Koala everything is easier.
          </span>
          <br></br>
        </span>
        <div className="home-container01">
          <div className="home-step">
            <div className="home-container02">
              <div className="home-line"></div>
              <div className="home-container03">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <div className="home-line1"></div>
            </div>
            <div className="home-container04">
              <h1 className="home-text042">Download the App</h1>
              <span className="home-text043">
                <span>
                  Start by downloading the Receipt Koala app on your smartphone 
                </span>
                <span>for both Android and iOS.</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-step1">
            <div className="home-container05">
              <div className="home-line2"></div>
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className="home-line3"></div>
            </div>
            <div className="home-container07">
              <h1 className="home-text047">Create an Account</h1>
              <span className="home-text048">
                Sign up and create your account within the app.
              </span>
            </div>
          </div>
          <div className="home-step2">
            <div className="home-container08">
              <div className="home-line4"></div>
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div className="home-line5"></div>
            </div>
            <div className="home-container10">
              <h1 className="home-text049">Link Your Purchases</h1>
              <span className="home-text050">
                This will trigger the automatic issuance of an e-receipt to your
                app.
              </span>
            </div>
          </div>
          <div className="home-step3">
            <div className="home-container11">
              <div className="home-line6"></div>
              <div className="home-container12">
                <svg viewBox="0 0 1024 1024" className="home-icon07">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className="home-line7"></div>
            </div>
            <div className="home-container13">
              <h1 className="home-text051">View Your Receipts</h1>
              <span className="home-text052">
                Your e-receipts will be neatly organized within the app, making
                them easy to access and manage.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="Pricing" className="home-pricing">
        <div className="home-content6">
          <div className="home-header3">
            <div className="home-tag1">
              <span className="home-text053">Pricing plans</span>
            </div>
            <div className="home-heading04">
              <h2 className="home-text054">Our plans for you</h2>
            </div>
          </div>
          <div className="home-pricing-plans">
            <div className="home-plans">
              <div className="home-plan">
                <div className="home-top">
                  <div className="home-heading05">
                    <span className="home-text055">Standard</span>
                    <span className="home-text056">
                      Whether you are a single store owner or a big
                      multinational chain our pricing caters for all merchants.
                    </span>
                  </div>
                  <div className="home-cost">
                    <div className="home-cost1">
                      <span className="home-text057">$9</span>
                      <span className="home-text058">/month</span>
                    </div>
                  </div>
                </div>
                <span className="home-text059">Koala Standard includes:</span>
                <div className="home-bottom">
                  <div className="home-check-list">
                    <Check></Check>
                    <Check feature="Cutstom interactive receipts"></Check>
                    <Check feature="Receipt delivery business customers"></Check>
                    <Check feature="'No print' functionality"></Check>
                    <Check feature="Receipt Delivery for virtual cards"></Check>
                    <Check feature="Analytics, insights, reports and analysis"></Check>
                  </div>
                  <div className="home-button">
                    <span className="home-text060">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-top1">
                  <div className="home-heading06">
                    <span className="home-text061">Plus</span>
                    <span className="home-text062">
                      Increase sales by giving customers instant rewards on
                      targeted products
                    </span>
                  </div>
                  <div className="home-cost2">
                    <span className="home-text063">$29</span>
                    <span className="home-text064">/month</span>
                  </div>
                </div>
                <span className="home-text065">
                  Everything in Koala Standard, plus:
                </span>
                <div className="home-bottom1">
                  <div className="home-check-list01">
                    <Check feature="Your own Merchant channel in the Receipt Koala "></Check>
                    <Check feature="Digital stampcards"></Check>
                    <Check feature="Coupons"></Check>
                    <Check feature="Rewards"></Check>
                    <Check feature="Feedback / polls on digital receipts"></Check>
                    <Check feature="Analytics, insights, reports and analysis"></Check>
                  </div>
                  <div className="home-button1">
                    <span className="home-text066">Get Plus</span>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-top2">
                  <div className="home-heading07">
                    <span className="home-text067">Premium</span>
                    <span className="home-text068">
                      LoyaltyKoala is built for merchants utilising Customer
                      Data Platforms(CDP).
                    </span>
                  </div>
                  <div className="home-cost3">
                    <span className="home-text069">$49</span>
                    <span className="home-text070">/month</span>
                  </div>
                </div>
                <span className="home-text071">
                  Everything in Koala Plus, plus:
                </span>
                <div className="home-bottom2">
                  <div className="home-check-list02">
                    <Check feature="Integrations to Customer Data Platforms"></Check>
                    <Check feature="Receipt API for Merchant own applications and system"></Check>
                    <Check feature="Digital loyalty &amp; employee cards in Koala app"></Check>
                    <Check feature="Analytics, insights, reports and analysis"></Check>
                  </div>
                  <div className="home-button2">
                    <span className="home-text072">Get Premium</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-expand">
              <div className="home-overlay">
                <div className="home-header4">
                  <div className="home-heading08">
                    <span className="home-text073">Expand</span>
                    <span className="home-text074">
                      <span className="home-text075">Please contact us</span>
                      <br></br>
                      <span>for additional</span>
                      <br></br>
                      <span>plan.</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-check-list03">
                    <div className="home-check">
                      <svg viewBox="0 0 1024 1024" className="home-icon09">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text081">More personalized</span>
                    </div>
                    <div className="home-check1">
                      <svg viewBox="0 0 1024 1024" className="home-icon11">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text082">Uniqe features</span>
                    </div>
                    <div className="home-check2">
                      <svg viewBox="0 0 1024 1024" className="home-icon13">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text083">24/7 support</span>
                    </div>
                  </div>
                </div>
                <div className="home-button3">
                  <span className="home-text084">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-plans1">
            <div className="home-plan3">
              <div className="home-top3">
                <div className="home-heading09">
                  <span className="home-text087">Standard</span>
                  <span className="home-text088">
                    Whether you are a single store owner or a big multinational
                    chain our pricing caters for all merchants.
                  </span>
                </div>
                <div className="home-cost4">
                  <div className="home-cost5">
                    <span className="home-text089">$9</span>
                    <span className="home-text090">/month</span>
                  </div>
                </div>
              </div>
              <span className="home-text091">Koala Standard includes:</span>
              <div className="home-bottom3">
                <div className="home-check-list04">
                  <div className="home-check-list05">
                    <Check></Check>
                    <Check feature="Cutstom interactive receipts"></Check>
                    <Check feature="Receipt delivery business customers"></Check>
                    <Check feature="'No print' functionality"></Check>
                    <Check feature="Receipt Delivery for virtual cards"></Check>
                    <Check feature="Analytics, insights, reports and analysis"></Check>
                  </div>
                </div>
                <div className="home-button4">
                  <span className="home-text092">Get Standard</span>
                </div>
              </div>
            </div>
            <div className="home-plan4">
              <div className="home-top4">
                <div className="home-heading10">
                  <span className="home-text093">Plus</span>
                  <span className="home-text094">
                    Increase sales by giving customers instant rewards on
                    targeted products
                  </span>
                </div>
                <div className="home-cost6">
                  <span className="home-text095">$29</span>
                  <span className="home-text096">/month</span>
                </div>
              </div>
              <span className="home-text097">
                Everything in Koala Standard, plus:
              </span>
              <div className="home-bottom4">
                <div className="home-check-list06">
                  <div className="home-check-list07">
                    <div className="home-check-list08">
                      <Check feature="Your own Merchant channel in the Receipt Koala app"></Check>
                      <Check feature="Digital stampcards"></Check>
                      <Check feature="Coupons"></Check>
                      <Check feature="Rewards"></Check>
                      <Check feature="Feedback / polls on digital receipts"></Check>
                      <Check feature="Analytics, insights, reports and analysis"></Check>
                    </div>
                  </div>
                </div>
                <div className="home-button5">
                  <span className="home-text098">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="home-plan5">
              <div className="home-top5">
                <div className="home-heading11">
                  <span className="home-text099">Premium</span>
                  <span className="home-text100">
                    Loyalty Koala is built for merchants utilising Customer Data
                    Platforms(CDP).
                  </span>
                </div>
                <div className="home-cost7">
                  <span className="home-text101">$59</span>
                  <span className="home-text102">/month</span>
                </div>
              </div>
              <span className="home-text103">
                Everything in Koala Plus, plus:
              </span>
              <div className="home-bottom5">
                <div className="home-check-list09">
                  <div className="home-check-list10">
                    <Check feature="Integrations to Customer Data Platforms"></Check>
                    <Check feature="Receipt API for Mercahnt own applications and system"></Check>
                    <Check feature="Digital loyalty &amp; employee cards in Koala app"></Check>
                    <Check feature="Analytics, insights, reports and analysis"></Check>
                  </div>
                </div>
                <div className="home-button6">
                  <span className="home-text104">Get Premium</span>
                </div>
              </div>
            </div>
            <div className="home-plan6">
              <div className="home-top6">
                <div className="home-heading12">
                  <span className="home-text105">Expand</span>
                  <span className="home-text106">
                    <span>
                      Please
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>contact</span>
                    <span> us for additional plan.</span>
                  </span>
                </div>
              </div>
              <div className="home-bottom6">
                <div className="home-check-list11">
                  <div className="home-check-list12">
                    <div className="home-check3">
                      <svg viewBox="0 0 1024 1024" className="home-icon15">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text110">More personalized</span>
                    </div>
                    <div className="home-check4">
                      <svg viewBox="0 0 1024 1024" className="home-icon17">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text111">Unique features</span>
                    </div>
                    <div className="home-check5">
                      <svg viewBox="0 0 1024 1024" className="home-icon19">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text112">24/7 support</span>
                    </div>
                  </div>
                </div>
                <div className="home-button7">
                  <span className="home-text113">Contact us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-help">
          <span className="home-text114">Need any help?</span>
          <div className="home-explore2">
            <span className="home-text115">
              Get in touch with us right away -&gt;
            </span>
          </div>
        </div>
      </div>
      <div className="home-testimonial">
        <div className="home-container14">
          <h1 className="home-text116">
            <span className="home-text117">Our beloved customers</span>
            <br></br>
          </h1>
          <span className="home-text119">
            Receipt Koala users who already use and love the app and proudly use
            our service.
          </span>
          <div className="home-container15">
            <TestimonialCard1
              name="Jane Smith"
              quote="&quot;Receipt Koala has completely changed my shopping routine. With their e-receipts, I no longer have to deal with stacks of paper cluttering my wallet. It's not just convenient; it's eco-friendly. Plus, the personalized coupons are a nice bonus!&quot;"
              pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></TestimonialCard1>
            <TestimonialCard1 rootClassName="rootClassName"></TestimonialCard1>
            <TestimonialCard1
              name="Michael Johnson"
              quote="&quot;As an environmentally conscious shopper, I was thrilled to switch to e-receipts with Receipt Koala. The app is intuitive, and I appreciate the personalized offers. It's not just about saving trees; it's about reducing carbon emissions too. I highly recommend it!&quot;"
              pictureSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></TestimonialCard1>
          </div>
        </div>
      </div>
      <div className="home-faq">
        <div id="FAQ" className="home-content7">
          <div className="home-header5">
            <div className="home-tag2">
              <span className="home-text120">
                <span>FAQ</span>
                <br></br>
              </span>
            </div>
            <div className="home-heading13">
              <h2 className="home-text123">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="home-rows">
            <div className="home-column3">
              <div className="Question">
                <span className="home-title1">
                  What is Receipt Koala, and how does it work?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description3">
                  <span>
                    Receipt Koala is a digital receipt management service that
                    revolutionizes the way you handle receipts. Instead of
                    traditional paper receipts, it provides e-receipts for your
                    purchases. When you make a purchase at a participating
                    retailer, there&apos;s no need to provide your email address
                    or phone number. Instead, you can simply scan a QR or
                    barcode at the point of sale, and the e-receipt will be
                    instantly delivered to your Receipt Koala app. This
                    streamlined process makes it effortless to access and
                    organize your purchase details.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="Question">
                <span className="home-title2">
                  How can Receipt Koala help the environment?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description4">
                  <span>
                    Receipt Koala significantly reduces the use of thermal paper
                    and the environmental impact of traditional receipts. By
                    going digital, you are helping to save trees, reduce water
                    consumption, and decrease carbon emissions associated with
                    paper production and disposal.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-question2 Question">
                <span className="home-title3">
                  What retailers are partnered with Receipt Koala?
                </span>
                <span className="home-description5">
                  Receipt Koala is actively partnering with various retailers
                  and businesses. The list is continuously growing, so you can
                  expect more and more establishments to offer this service.
                  Keep an eye out for our partnered retailers in your area!
                </span>
              </div>
            </div>
            <div className="home-column4">
              <div className="home-question3 Question">
                <span className="home-title4">
                  Is Receipt Koala secure and compliant with data protection
                  regulations?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description6">
                  Yes, Receipt Koala takes data security and privacy seriously.
                  We use advanced encryption to protect your information. We are
                  also compliant with data protection regulations to ensure your
                  data remains safe.
                </span>
              </div>
              <div className="home-question4 Question">
                <span className="home-title5">
                  How do I access my e-receipts?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description7">
                  All your e-receipts are conveniently stored within the Receipt
                  Koala app. You can access them anytime, search, and filter by
                  store, date, or purchase amount.
                </span>
              </div>
              <div className="home-question5 Question">
                <span className="home-title6">
                  Are there any fees associated with using Receipt Koala?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description8">
                  <span>
                    Receipt Koala offers both free and premium plans. The basic
                    service, including the storage of e-receipts, is free for
                    users. We also offer premium features and plans for
                    businesses and individuals looking for additional benefits.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-get-started2">
        <div className="home-content8">
          <div className="home-heading14">
            <h2 className="home-text130">
              Get started with Receipt Koala now!
            </h2>
            <span className="home-text131">Download our application now.</span>
          </div>
          <div className="home-hero-buttons1">
            <div className="home-ios-btn1">
              <img
                alt="pastedImage"
                src="/pastedimage-zmzg.svg"
                className="home-apple1"
              />
              <span className="home-caption6">iOS</span>
            </div>
            <div className="home-android-btn1">
              <img
                alt="pastedImage"
                src="/pastedimage-ld65.svg"
                className="home-android1"
              />
              <span className="home-caption7">Android</span>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
      <div className="home-container16"></div>
    </div>
  )
}

export default Home
