'use client'
import React, { useState } from "react";
import Image from 'next/image'

export default function App() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [description, setDescription] = useState('敞開明亮的V.Lab實驗室，清一色的iMac，乍看像電腦教室，但它並非只是電腦教室而已。V.Lab是一個高科技、適合討論、能激發集體創意、也可獨立思考，並展現視覺化設計能力的地方。');
  const [space, setSpace] = useState('Space');
  const images = ['static/images/space/404-1.jpg', 'static/images/space/404-2.jpg', 'static/images/space/404-3.jpg'];
  const descriptions = ['工程視覺實驗室(Visualization Lab)，簡稱V.Lab，位於土木研究大樓604室，其中配置了數十台iMac和Windows桌電，使學生能運用所學，快速掌握課堂技巧；其中也配有投影機、VR等設備，是教師與學生共同發想、進步並且激發創意的討論空間。', '2021年開放的612共同學習空間，除了有配置電腦外，也規劃了圓桌討論區、白板等區域，同學們可以在此處討論，並利用V.Lab的設備進一步驗證或確認，我們希望此處可以為兩處空間帶來更多生氣！', '攝影棚位於土木研究大樓403室，為專門提供教師、學生錄製影片或室進行線上教學時所使用之空間，該空間相關器材齊全，提供土木系大量線上課程資源。'];
  const spaces = ['604', '612', '404'];

  return (
    <div className="grid grid-cols-2 px-8 flex">
      <div className="w-full flex-1 self-center justify-start">  
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 mb-5">
            {space}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        {description}
        </p>
      </div>
      
      <div className="w-full md:w-3/4 space-y-8 flex-1 justify-center ml-10"> 
        <div className="col-span-6 grid grid-cols-2 grid-rows-1 gap-2">
          <div className="col-span-2 row-span-2 justify-center"
            onMouseEnter={() => {
              setSelectedImage(0);
              setDescription(descriptions[0]);  
            }}
            onMouseLeave={() => {
              setDescription('敞開明亮的V.Lab實驗室，清一色的iMac，乍看像電腦教室，但它並非只是電腦教室而已。V.Lab是一個高科技、適合討論、能激發集體創意、也可獨立思考，並展現視覺化設計能力的地方。');
            }}
          >
            <Image  
                src={"/" + images[0]} 
                alt="Image"
                width={480}
                height={240}
                className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            />

          </div>
          <div className="col-span-2 grid grid-cols-2 gap-2 justify-center">            
            {images.slice(1).map((image, index) => (
              <div 
                className={`row-span-1 ${index + 1 === selectedImage ? 'scale-110 transform transition duration-2000 ease-in-out' : ''}`}
                onMouseEnter={() => {
                  setSelectedImage(index + 1);
                  setDescription(descriptions[index + 1]);
                }}
                onMouseLeave={() => {
                  setDescription('敞開明亮的V.Lab實驗室，清一色的iMac，乍看像電腦教室，但它並非只是電腦教室而已。V.Lab是一個高科技、適合討論、能激發集體創意、也可獨立思考，並展現視覺化設計能力的地方。');
                }}
              >
                <Image src={"/" + image} width={240} height={240} alt="Image" className="transition-transform duration-500 ease-in-out transform hover:scale-105"  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
