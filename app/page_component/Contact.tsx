// app/page_component/Contact.tsx
import React from 'react';
import Image from '@/components/Image'

const Contact = () => {
  return (
    <div className="contact-us-section">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-right">
            Contact us
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="group flex flex-col items-center space-x-2 pt-8 xl:col-span-1 ml-10 mt-5">
              {/* 地圖 image */}
              <Image
                  src='/static/images/space/CERB.jpg'
                  alt="cerb"
                  width={400}
                  height={400}
                  className="h-60 w-80 transform group-hover:scale-95 transition-transform rounded-xl"
                />
            </div>

            <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2  ml-10">
              {/* 聯絡資訊 */}
              <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
                <p>若您有任何問題，歡迎透過以下方式聯絡我們：</p>
                  <ul>
                    <li>信箱：vlab@caece.net</li>
                    <li>電話：0233669052</li>
                    <li>地址：台北市大安區辛亥路三段188號604室</li>
                    <li>郵寄地址：10617 台北市大安區羅斯福路四段一號</li>
                  </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;