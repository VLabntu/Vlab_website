import React from 'react'
import Image from '@/components/Image'

export default function Spaces() {
  return (
    <div className="Space-section">
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Space
          </h1>
        </div>
        <div className="my-3 w-full border-b border-gray-200 dark:border-gray-700"></div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="group ml-10 mt-5 flex flex-col items-center space-x-2 pt-8 xl:col-span-1">
            {/* 地圖 image */}
            <Image
              src="/static/images/space/604.jpg"
              alt="cerb"
              width={400}
              height={400}
              className="h-60 w-80 transform rounded-xl transition-transform group-hover:scale-95"
            />
          </div>

          <div className="prose ml-10 max-w-none pb-8 pt-8 dark:prose-invert  xl:col-span-2">
            {/* 聯絡資訊 */}
            <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
              <p>
                工程視覺實驗室(Visualization
                Lab)，簡稱V.Lab，位於土木研究大樓604室，其中配置了數十台iMac和Windows桌電，使學生能運用所學，快速掌握課堂技巧；其中也配有投影機、VR等設備，是教師與學生共同發想、進步並且激發創意的討論空間。
              </p>
              <p>
                敞開明亮的V.Lab實驗室，清一色的iMac，乍看像電腦教室，但它並非只是電腦教室而已。V.Lab是一個高科技、適合討論、能激發集體創意、也可獨立思考，並展現視覺化設計能力的地方。
              </p>
            </div>
          </div>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="group ml-10 flex flex-col items-center space-x-2 pt-8 xl:col-span-2">
            {/* 聯絡資訊 */}
            <div className="prose max-w-none pb-8 pt-8 dark:prose-invert">
              <p>
                2021年開放的612共同學習空間，除了有配置電腦設備外，還精心規劃了多功能區域，包括圓桌討論區、個人作業區和圖書分享櫃等區域，同學們可以在此處討論，並利用共同學習空間內的設備！
              </p>
              <p>
                此外，612空間的開放設計和舒適的學習環境，也使其成為學生們進行實作課程討論和創意思維的首選場所。近期也成為實作課程同學們討論的區域，我們鼓勵所有對學習充滿熱情的人來到這裡，發現和創造知識。
              </p>
            </div>
          </div>
          <div className="group ml-10 mt-5 flex flex-col items-center space-x-2 pt-8 xl:col-span-1">
            {/* 地圖 image */}
            <Image
              src="/static/images/space/612.jpg"
              alt="cerb"
              width={400}
              height={400}
              className="h-60 w-80 transform rounded-xl transition-transform group-hover:scale-95"
            />
          </div>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="group ml-10 mt-5 flex flex-col items-center space-x-2 pt-8 xl:col-span-1">
            {/* 地圖 image */}
            <Image
              src="/static/images/space/403.jpg"
              alt="cerb"
              width={400}
              height={400}
              className="h-60 w-80 transform rounded-xl transition-transform group-hover:scale-95"
            />
          </div>

          <div className="prose ml-10 max-w-none pb-8 pt-8 dark:prose-invert  xl:col-span-2">
            {/* 聯絡資訊 */}
            <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
              <p>
                攝影棚位於土木研究大樓403室，為專門提供教師、學生錄製影片或室進行線上教學時所使用之空間，該空間相關器材齊全，提供土木系大量線上課程資源。
              </p>
              <p>
                為了因應課程（如Coursera）及教材數位化的需求，需要提供教師及課程助理一個專業錄製的環境與資源，因此Vlab擴充既有功能，另裝置一間專業攝影棚，以利去背、符合專業錄製的需求。因此添購了攜帶型綠幕、四盞330W冷光燈以及全片幅攝影機Sony
                VG900一台，其訊號外接至螢幕，可讓教師同步監看錄製的結果。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
