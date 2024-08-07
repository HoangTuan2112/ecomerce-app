import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const PrivacyPolicy = () => {
  return (
    <div>
      <Meta tittle="Privacy Policy" />
      <BreadCrumb tittle="Privacy Policy" />
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'>
                <h2>Privacy Policy</h2>
                <p>We value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and protect your information.</p>
                
                <h3>Information Collection</h3>
                <p>We collect information that you provide to us directly, such as when you create an account, place an order, or contact us for support. This information may include your name, email address, phone number, and payment information.</p>
                
                <h3>Information Use</h3>
                <p>We use the information we collect to process your orders, provide customer support, and improve our services. We may also use your information to send you promotional materials and updates about our products and services.</p>
                
                <h3>Information Sharing</h3>
                <p>We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website, conducting our business, or providing services to you, as long as those parties agree to keep this information confidential.</p>
                
                <h3>Data Security</h3>
                <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.</p>
                
                <h3>Cookies</h3>
                <p>We use cookies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.</p>
                
                <h3>Changes to This Policy</h3>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</p>
                
                <h3>Contact Us</h3>
                <p>If you have any questions about this privacy policy, please contact us at [your contact information].</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;