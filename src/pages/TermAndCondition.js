import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const TermAndCondition = () => {
  return (
    <div>
      <Meta tittle="Term And Condition" />
      <BreadCrumb tittle="Term And Condition" />
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'>
                <h2>Terms and Conditions</h2>
                <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [Your Company Name]'s relationship with you in relation to this website.</p>
                
                <h3>Use of the Website</h3>
                <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
                
                <h3>Intellectual Property</h3>
                <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
                
                <h3>Limitation of Liability</h3>
                <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
                
                <h3>Governing Law</h3>
                <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of [Your Country/State].</p>
                
                <h3>Changes to Terms and Conditions</h3>
                <p>We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page. You are advised to review this Terms and Conditions periodically for any changes.</p>
                
                <h3>Contact Us</h3>
                <p>If you have any questions about these Terms and Conditions, please contact us at [your contact information].</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermAndCondition;