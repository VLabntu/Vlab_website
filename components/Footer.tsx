import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} /> */}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://www.google.com/maps/place/106%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A4%A7%E5%AE%89%E5%8D%80%E8%BE%9B%E4%BA%A5%E8%B7%AF%E4%B8%89%E6%AE%B5188%E8%99%9F604/data=!4m2!3m1!1s0x3442aa252bd0238d:0x387b07e5bf73f7e7?sa=X&ved=2ahUKEwjst5ehm86DAxUMklYBHdDCBBUQ8gF6BAgMEAA">
            地址：台北市大安區辛亥路三段188號 604室
          </Link>
          {` • 0233669052 • 郵寄地址：10617 台北市大安區羅斯福路四段一號`}
        </div>
      </div>
    </footer>
  )
}
