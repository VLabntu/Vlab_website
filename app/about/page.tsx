import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Members from '@/components/Menber'
import Spaces from '../page_component/Spaces'
import Contact from '../page_component/Contact'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  const members = [
    {
      name: '莊世坤',
      role: '管理員',
      word: 'V.Lab宗師',
      imageUrl: '/static/images/about_us/wuse.jpg',
    },
    {
      name: '王炳璋',
      role: '工讀生',
      word: 'V.Lab大師',
      imageUrl: '/static/images/about_us/bzw.jpg',
    },
    {
      name: '洪昊天',
      role: '工讀生',
      word: 'V.Lab大猩猩',
      imageUrl: '/static/images/about_us/ape.jpg',
    },
    {
      name: '劉邦琪',
      role: '工讀生',
      word: 'V.Lab地縛靈',
      imageUrl: '/static/images/about_us/zq.jpg',
    },
    {
      name: '林禹辰',
      role: '工讀生',
      word: 'V.Lab幽靈1號',
      imageUrl: '/static/images/about_us/uzh.jpg',
    },
    {
      name: '鄭如恩',
      role: '工讀生',
      word: 'V.Lab幽靈2號',
      imageUrl: '/static/images/about_us/run.jpg',
    },
    {
      name: '劉冠宗',
      role: '工讀生',
      word: 'V.Lab吼吼獸',
      imageUrl: '/static/images/about_us/qz.jpg',
    },
    {
      name: '黃承濬',
      role: '工讀生',
      word: 'V.Lab新手',
      imageUrl: '/static/images/about_us/bz.jpg',
    },
  ]

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <div className="my-3 mb-10 w-full border-b border-gray-200 dark:border-gray-700"></div>
      <div className="ml-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member, index) => (
          <Members key={member.name} {...member} /> // 使用成員名稱作為 key
        ))}
      </div>
      <Spaces />
      <Contact />
    </>
  )
}
