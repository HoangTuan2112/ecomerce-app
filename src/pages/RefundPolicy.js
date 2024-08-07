import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const RefundPolicy = () => {
  return (
    <div>
      <Meta tittle="Refund Policy" />
      <BreadCrumb tittle="Refund Policy" />
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'>
                <h2>Refund Policy</h2>
                <p>We strive to ensure your satisfaction with every purchase. If you are not satisfied with your purchase, you may be eligible for a refund or exchange under the following conditions:</p>
                
                <h3>Eligibility for Refunds</h3>
                <p>To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                
                <h3>Refund Process</h3>
                <p>To initiate a refund, please contact our customer service team with your order number and reason for the refund. We will provide you with instructions on how to return the item.</p>
                
                <h3>Refund Timeframe</h3>
                <p>Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days.</p>
                
                <h3>Non-Refundable Items</h3>
                <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers, or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>
                
                <h3>Late or Missing Refunds</h3>
                <p>If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. If you’ve done all of this and you still have not received your refund yet, please contact us.</p>
                
                <h3>Exchanges</h3>
                <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, contact our customer service team for further instructions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RefundPolicy;