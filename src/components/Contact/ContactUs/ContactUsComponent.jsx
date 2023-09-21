import React from 'react'

const ContactUsComponent = () => {
  return (
    <>
    <div className="box pl-4 md:pl-8 pr-8 py-4">
      <div className="flex flex-col gap-4 text-center">
          <h2 className="p1 text-xl">Welcome To S.Kijchai</h2>
          <h1 className="p2 text-3xl  text-[#1b3a91] font-bold">ติดต่อเรา</h1>
      </div>
    </div>

    <div class="cover-corporate">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <img src="../corporate-1.png" class="corporate-dot-1" />
              <div class="page-header text-center">
                <p>บริษัท ส.กิจชัย เอ็นเตอร์ไพรส์ จำกัด (มหาชน)</p>
              </div>

              <div class="cover-map mx-auto max-w-6xl">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d4627.924007888376!2d101.59966793369637!3d12.739190877591687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d12.7411953!2d101.6002182!5e0!3m2!1sen!2sth!4v1463474204292" 
                   
                    height={400}
                    frameborder={0} 
                    style={{border:0 , width:"100%"}} 
                    allowfullscreen></iframe>
			    </div>
            </div>

          </div>
        </div>
		</div>
    </>
  )
}

export default ContactUsComponent