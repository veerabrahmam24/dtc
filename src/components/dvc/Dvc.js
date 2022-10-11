import React from 'react';
import Carditem from '../../Carditem';
import '../../cards2.css';
import '../../Contact.css'



function cntct() {
  return (
    <div className='hero-container1'>
      <img src="/images/communication.jpg"/>
      <div>

        <div className='cards__container1'>
          <div className='cards__wrapper1'>
            <ul className='cards__items1'>


              <Carditem
                src='assets/mdl.jpg' 
                text='Call'
                label='Book appointment'
                desc='Call the number given below to book appointment or ask quieries about your commercial or personal vehicle. '
                path='/Travel'
                btntext='Landline: 80 41130573, Mobile: +91 7673076541'
                className='card1'
              />
              <Carditem
                src='assets/iot.jpg'
                text='Message'
                label='Message us'
                desc='Message us at our various social media sites to stay in touch with us and solve your doubts.Access our whatsapp number, instagram, facebook and twitter accounts below.'
                path='/services'
                btntext='Whatsapp: +91 9828390987, Instagram: ams71Group, Facebook: ams71Group, Twitter: @Ams71'
                className='card2'
              />

              <Carditem

                src='assets/dvc.jpg'
                text='Mail'
                label='Send a mail'
                desc='Send a mail to our address or to our gmail to contact us.'
                btntext='Address: A Block, ShivaNanda Estate,
                Bhulabhai Desai Road,
                Worli, Mumbai - 400020,                       
                Email: Ams71.automobiles@gmail.com'
                path='/Automobile'
                className='card1'
              />
            </ul>
            <div>

            </div>

          </div>

          
        </div>
      

      </div>
      
    </div>
    
  );
}
export default cntct;