import React from 'react'

const CsrComponent = () => {
  return (
    <>
    <div className="box pl-4 md:pl-8 pr-8 py-4">
      <div className="flex flex-col gap-4 text-center">
          <h2 className="p1 text-xl">Welcome To S.Kijchai</h2>
          <h1 className="p2 text-3xl text-[#1b3a91] font-bold">
          ความรับผิดชอบต่อสังคมและกิจกรรมต่างๆ
            </h1>
      </div>
    </div>

      <div class="cover-corporate">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <img src="../corporate-1.png" class="corporate-dot-1" />
              <div class="page-header text-center">
                <p>นโยบายความรับผิดชอบต่อสังคม</p>
              </div>
              <img src="../csr-pic.jpg" class="corporate-pic" />
            </div>
            <div class="">
              <div class="corporate-dot-2"></div>
              <p class="text-skn-standard corporate-t1 mb-8">
              บริษัทมุ่งมั่นที่จะพัฒนาธุรกิจให้เติบโตอย่างยั่งยืนควบคู่ไปกับการรับผิดชอบต่อสังคม ดังนั้นเพื่อให้เป็นไปตามแนวทางการพัฒนาธุรกิจอย่างยั่งยืนของบริษัท คณะกรรมการบริษัทจึงกาหนดนโยบายความรับผิดชอบต่อสังคม (Corporate Social Reponsibilities หรือ CSR) ซึ่งกาหนดให้ดาเนินธุรกิจภายใต้การกากับดูแลกิจการที่ดีและยึดหลักจริยธรรมควบคู่ไปกับการใส่ใจดูแลรักษาสิ่งแวดล้อมและสังคม มีสานึกรับผิดชอบต่อสังคมอย่างแท้จริง โดยคานึงถึงผู้ที่มีส่วนได้ส่วนเสีย (Stakeholder) ที่เกี่ยวข้องทั้งภายในและภายนอกองค์กร ตั้งแต่ผู้ถือหุ้น พนักงาน ลูกค้า ชุมชน ตลอดจนสังคมวงกว้าง โดยบริษัทได้กาหนดแนวทางของความรับผิดชอบต่อสังคมดังนี้
              </p>              
            </div>
          </div>
        </div>
		</div>

    <div class="container mt-4">
    <p class="text-skn-standard">อ่านเอกสารเพิ่มเติม</p>
      <div class="relative overflow-x-auto">
          <table class="w-full mt-4 text-sm text-center text-white">
              <thead class="text-md text-white bg-[#1b3a91] border-b-2 border-[#84a5ff]">
                  <tr>
                      <th scope="col" class="px-6 py-4 text-center">
                        ชื่อเอกสาร
                      </th>
                      <th scope="col" class="px-6 py-4">
                      ขนาดไฟล์
                      </th>
                      <th scope="col" class="px-6 py-4">
                      ชนิดไฟล์
                      </th>
                      <th scope="col" class="px-6 py-4">
                      ดาวน์โหลด
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-slate-100/60 border-b hover:bg-slate-100/800 transition-all text-base">
                      <th scope="row" class="px-6 py-4 text-[#1b3a91] font-medium">
                      ความรับผิดชอบต่อสังคม
                      </th>
                      <td class="px-6 py-4 text-[#666] text-center">
                      18.3 MB
                      </td>
                      <td class="px-6 py-4 text-[#666] text-center">
                      PDF
                      </td>
                      <td class="px-6 py-4 text-[#092267] text-center">
                        <a href="pdf/corporate/corporate_2020_T.pdf" target="_blank"> ไฟล์ดาวน์โหลด </a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

		</div>
    </>
  )
}

export default CsrComponent