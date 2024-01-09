import Goal from './page_component/Goal'
import Spaces from './page_component/Spaces'
import RecentEvents from './page_component/RecentEvents'

export default function Home({ posts }) {
  return (
    <>
      <Goal />
      <div className="w-full border-b border-gray-200 my-12"></div>
      <RecentEvents posts={posts} />
      {/* <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 my-15">
        <div className="w-full md:w-1/2 md:ml-auto">  
          <div className="flex justify-center"> 
          <RecentEvents posts={posts} />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-8"> 
          <RecentEvents posts={posts} />
        </div>
      </div> */}
      </>
  )
}