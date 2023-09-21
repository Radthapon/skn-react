import React from 'react'
import './CorporateComponent.css'
const CorporateComponent = () => {
  return (
    <>
    <div className="box pl-4 md:pl-8 pr-8 py-4">
      <div className="flex flex-col gap-4 text-center">
          <h2 className="p1 text-xl">Welcome To S.Kijchai</h2>
          <h1 className="p2 text-3xl  text-[#1b3a91] font-bold">การกำกับดูแลกิจการ</h1>
      </div>
    </div>

      <div class="cover-corporate">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <img src="../corporate-1.png" class="corporate-dot-1" />
              <div class="page-header text-center">
                <p>นโยบายการกำกับดูแลกิจการ</p>
              </div>
              <img src="../corporate-pic.jpg" class="corporate-pic" />
            </div>
            <div class="">
              <div class="corporate-dot-2"></div>
              <p class="text-skn-standard corporate-t1">บริษัทคำนึงถึงความสำคัญของนโยบายเกี่ยวกับการกำกับดูแลกิจการที่ดี (The Principles of Good Corporate Governance) โดยกำหนดเป็นนโยบายเพื่อให้การดำเนินธุรกิจบริษัทมีการกำกับดูแลกิจการที่โปร่งใส สามารถตรวจสอบได้ และเพิ่มความเชื่อมั่นให้แก่ผู้ลงทุน โดยมีหลักการและแนวปฏิบัติที่สอดคล้องกับหลักการกำกับดูแลกิจการที่ของตลาดหลักทรัพย์ สำนักงาน ก.ล.ต. และข้อแนะนำของสมาคมส่งเสริมสถาบันกรรมการบริษัทไทย (IOD) และมีการสื่อสารให้กับผู้บริหารและพนักงานรับทราบและถือปฏิบัติมาอย่างต่อเนื่อง ทั้งนี้คณะกรรมการบริษัทได้ทบทวนนโยบายเป็นประจำทุกปี รวมถึงติดตามดูแลให้มีการนำนโยบายไปปรับใช้เพื่อให้เกิดการปฏิบัติอย่างเหมาะสมกับบริบทธุรกิจของบริษัท และสภาวการณ์และการดำเนินงานของบริษัทอยู่เสมอ ซึ่งบริษัทจะเปิดเผยข้อมูลให้กับสาธารณะและผู้ถือหุ้นอย่างสม่ำเสมอ </p>
              <p class="text-skn-standard corporate-t1 mt-5">นอกจากนี้ บริษัทยังให้ความสำคัญต่อระบบการควบคุมและตรวจสอบภายใน ส่วนการบริหารความเสี่ยง บริษัทพยายามควบคุมและบริหารความเสี่ยงอย่างใกล้ชิดและคานึงถึงเรื่องจริยธรรมในการดำเนินธุรกิจ โดยดำรงไว้ซึ่งความเป็นธรรมต่อคู่ค้า ผู้ถือหุ้น และผู้มีส่วนได้เสียทุกๆ กลุ่ม ซึ่งมีรายละเอียดดังนี้</p>
              <p class="text-skn-standard corporate-t1 t3">1. สิทธิของผู้ถือหุ้น</p>
              <p class="text-skn-standard corporate-t1 t3">2. การปฏิบัติต่อผู้ถือหุ้นอย่างเท่าเทียมกัน</p>
              <p class="text-skn-standard corporate-t1 t3">3. การคํานึงถึงบทบาทของผู้มีส่วนได้เสีย</p>
              <p class="text-skn-standard corporate-t1 t3">4. การเปิดเผยข้อมูลและความโปร่งใส</p>
              <p class="text-skn-standard corporate-t1 t3">5. ความรับผิดชอบของคณะกรรมการ</p>
            </div>
          </div>
        </div>
		</div>

    <div class="container mt-4">
    <p class="text-skn-standard corporate-t1">อ่านเอกสารเพิ่มเติม</p>
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
                      การกำกับดูแลกิจการ
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

export default CorporateComponent