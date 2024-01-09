interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'V.Lab 空間預約',
    description: `點擊 Learn more 查看 Calendar，確認該時段沒有被預約後。e-mail 至 vlab@caece.net，內容需包含借用人姓名、電話、借用時段與借用目的。另可至土研大樓613室跟陳信嘉申請。`,
    imgSrc: '/static/images/space/604_1.jpg',
    href: 'https://sites.google.com/caealumni.ce.ntu.edu.tw/vlabtimetable/%E9%A6%96%E9%A0%81  ',
  },
  {
    title: '軟體安裝申請',
    description: `點擊 Learn more 進入表單頁面進行申請。所有申請必須先經過審核，通過審核之申請軟體將由Vlab團隊為您安裝，全程約需5-7個工作天。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScm4fsWqR1h3o_clu2QnYJmlgx-221etysRYvFiG28o0qPYuw/viewform?pli=1',
  },
  {
    title: '電腦使用申請',
    description: `因個人作業需用V.Lab電腦作跑程式、檔案輸出等，長時間占用電腦而需離席者，可申請電腦借用。`,
    imgSrc: '/static/images/space/computor.jpg',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScz_lQ7G657XUDtgyddbwwUgAemQ93gU_0d-tDcqtaHK3obgQ/viewform',
  },
  {
    title: '攝影棚借用',
    description: `目前僅供教師或計畫助理進行課程專案使用，點擊下方連結進行場地申請。`,
    imgSrc: '/static/images/space/403.png',
    href: 'https://docs.google.com/forms/d/1gwSzPHNba2STNT9v4OIjYjXMin3tkuKtk5Ox34rRXW4/prefill',
  },
]

export default projectsData
