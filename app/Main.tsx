import Goal from './page_component/Goal'
import Spaces from './page_component/Spaces'
import RecentEvents from './page_component/RecentEvents'

export default function Home({ posts }) {
  return (
    <>
      <Goal />
      <RecentEvents posts={posts} />
    </>
  )
}
