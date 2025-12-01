"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Legal Information
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-base text-white/90 md:text-lg">
              Last Updated: December 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate max-w-none">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 mb-8">
            <p className="text-slate-700 leading-relaxed">
              This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
            </p>
          </div>

          <Section title="What personal information do we collect from the people that visit our blog, website or app?">
            <p>
              When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.
            </p>
          </Section>

          <Section title="When do we collect information?">
            <p>We collect information from you when you:</p>
            <ul>
              <li>Register on our site</li>
              <li>Fill out a form</li>
              <li>Use Live Chat</li>
              <li>Enter information on our site</li>
              <li>Provide us with feedback on our products or services</li>
            </ul>
          </Section>

          <Section title="How do we use your information?">
            <p>
              We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
            </p>
            <ul>
              <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
              <li>To improve our website in order to better serve you.</li>
              <li>To allow us to better service you in responding to your customer service requests.</li>
              <li>To administer a contest, promotion, survey or other site feature.</li>
              <li>To quickly process your transactions.</li>
              <li>To ask for ratings and reviews of services or products.</li>
              <li>To follow up with them after correspondence (live chat, email or phone inquiries).</li>
              <li>To send marketing materials and other product information through calls, emails, and text messages.</li>
            </ul>
          </Section>

          <Section title="How do we protect your information?">
            <p>
              We do not use vulnerability scanning and/or scanning to PCI standards. We only provide articles and information. We never ask for credit card numbers.
            </p>
            <p>We use regular Malware Scanning.</p>
            <p>
              Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
            </p>
            <p>
              We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.
            </p>
            <p>
              For your convenience we may store your credit card information kept for more than 60 days in order to expedite future orders, and to automate the billing process.
            </p>
          </Section>

          <Section title="Do we use 'cookies'?">
            <p>
              Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
            </p>
            <p className="font-semibold mt-4">We use cookies to:</p>
            <ul>
              <li>Understand and save user's preferences for future visits.</li>
              <li>Keep track of advertisements.</li>
              <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
            </ul>
            <p>
              You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
            </p>
            <p>
              If you turn cookies off, some of the features that make your site experience more efficient may not function properly. It won't affect the user's experience that make your site experience more efficient and may not function properly.
            </p>
          </Section>

          <Section title="Third-party disclosure">
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
            </p>
            <p>
              However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
            </p>
          </Section>

          <Section title="Third-party links">
            <p>
              Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
            </p>
          </Section>

          <Section title="Google">
            <p>
              Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users.{" "}
              <a
                href="https://support.google.com/adwordspolicy/answer/1316548?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:underline"
              >
                https://support.google.com/adwordspolicy/answer/1316548?hl=en
              </a>
            </p>
            <p>We use Google AdSense Advertising on our website.</p>
            <p>
              Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
            </p>
            <p className="font-semibold mt-4">We have implemented the following:</p>
            <ul>
              <li>Remarketing with Google AdSense</li>
              <li>Google Display Network Impression Reporting</li>
              <li>Demographics and Interests Reporting</li>
            </ul>
            <p>
              We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.
            </p>
            <p className="font-semibold mt-4">Opting out:</p>
            <p>
              Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.
            </p>
          </Section>

          <Section title="California Online Privacy Protection Act (CalOPPA)">
            <p>
              CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared.
            </p>
            <p className="font-semibold mt-4">According to CalOPPA, we agree to the following:</p>
            <ul>
              <li>Users can visit our site anonymously.</li>
              <li>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</li>
              <li>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</li>
            </ul>
            <p className="font-semibold mt-4">You will be notified of any Privacy Policy changes:</p>
            <ul>
              <li>On our Privacy Policy Page</li>
            </ul>
            <p className="font-semibold mt-4">Can change your personal information:</p>
            <ul>
              <li>By emailing us</li>
              <li>By calling us</li>
              <li>By logging in to your account</li>
              <li>By chatting with us or by sending us a support ticket</li>
            </ul>
          </Section>

          <Section title="How does our site handle Do Not Track signals?">
            <p>
              We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.
            </p>
          </Section>

          <Section title="Does our site allow third-party behavioral tracking?">
            <p>
              It's also important to note that we allow third-party behavioral tracking.
            </p>
          </Section>

          <Section title="COPPA (Children Online Privacy Protection Act)">
            <p>
              When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.
            </p>
            <p>We do not specifically market to children under the age of 13 years old.</p>
            <p>
              Do we let third-parties, including ad networks or plug-ins collect PII from children under 13? No.
            </p>
          </Section>

          <Section title="Fair Information Practices">
            <p>
              The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.
            </p>
            <p className="font-semibold mt-4">
              In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:
            </p>
            <ul>
              <li>We will notify you via email within 7 business days</li>
              <li>We will notify you via in-site notification within 7 business days</li>
            </ul>
            <p>
              We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.
            </p>
          </Section>

          <Section title="CAN SPAM Act">
            <p>
              The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
            </p>
            <p className="font-semibold mt-4">We collect your email address in order to:</p>
            <ul>
              <li>Send information, respond to inquiries, and/or other requests or questions</li>
              <li>Send you additional information related to your product and/or service</li>
              <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>
            </ul>
            <p className="font-semibold mt-4">To be in accordance with CANSPAM, we agree to the following:</p>
            <ul>
              <li>Not use false or misleading subjects or email addresses.</li>
              <li>Identify the message as an advertisement in some reasonable way.</li>
              <li>Include the physical address of our business or site headquarters.</li>
              <li>Monitor third-party email marketing services for compliance, if one is used.</li>
              <li>Honor opt-out/unsubscribe requests quickly.</li>
              <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
            </ul>
          </Section>

          <Section title="SMS Terms and Conditions">
            <p>
              Welcome to Maverick Realty LLC. By opting in to receive SMS communications from us, you agree to these Terms of Service. Please read them carefully.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">1. Consent for SMS Communication</h3>
            <p>
              By providing your phone number and opting in to receive SMS communications, you consent to receive text messages fromMaverick Realty LLC. This includes but is not limited to the types of communications described below.
            </p>
            <p>
              Information obtained as part of the SMS consent process will be used solely for the purposes outlined in this document and will not be shared with third parties. SMS Opt-In consent and the phone numbers we collect for the purpose of SMS will not be shared with third parties or affiliates in any circumstance.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">2. Types of SMS Communications</h3>
            <p>We may send SMS communications in the following contexts:</p>
            <p className="font-semibold mt-3">a. Customers and Guests</p>
            <ul>
              <li>Order updates (e.g., order confirmations, shipment tracking, delivery notifications).</li>
              <li>Notifications about account activity or relevant services.</li>
              <li>Promotional messages, if separately consented to by the user.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3">3. Standard Messaging Disclosures</h3>
            <ul>
              <li><strong>Message Frequency:</strong> The number of messages you receive will depend on your engagement with our services and interactions. Messaging frequency may vary.</li>
              <li><strong>Message and Data Rates:</strong> Standard message and data rates may apply based on your mobile carrier and plan. Message and data rates may apply.</li>
              <li><strong>Opt in:</strong> By providing your phone number and checking the checkbox you are providing us consent and opting into our text messages.</li>
              <li><strong>Opt-Out:</strong> You may opt out of receiving SMS communications at any time by texting "STOP". Once you opt-out, you will no longer receive SMS messages from us.</li>
              <li><strong>Help Support:</strong> For assistance, text "HELP" or visit{" "}
                <a href="https://maverickrealtys.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                  https://maverickrealtys.com/
                </a>{" "}
                or call us at 469-804-9001
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Quick Summary:</strong><br />
                Messaging frequency may vary.<br />
                Message and data rates may apply.<br />
                To opt out at any time, text STOP.<br />
                For assistance, text HELP or visit our website at{" "}
                <a href="https://maverickrealtys.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                  https://maverickrealtys.com/
                </a>.<br />
                Visit{" "}
                <a href="https://maverickrealtys.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                  https://maverickrealtys.com/
                </a>{" "}
                for privacy policy and Terms of Service.
              </p>
            </div>
          </Section>

          {/* CONTACT SECTION */}
          <div className="mt-12 rounded-2xl bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-bold">Questions About Our Privacy Policy?</h2>
            <p className="mt-2 text-white/80">
              If you have any questions about this privacy policy or how we handle your personal information, please contact us.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:Info@mavericrealty.com"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                Email Us
              </a>
              <a
                href="tel:+14695770265"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                Call (469) 577-0265
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-emerald-500">
        {title}
      </h2>
      <div className="text-slate-700 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}