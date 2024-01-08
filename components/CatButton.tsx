import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'

// 待更改成一個按鈕可以隨機跳出一句小廢話

const CatButton = () => {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const CatButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <CatButtonWrapper aria-label="Rock">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-gray-900 dark:text-gray-100"
        >
          {/* Updated path for CatButton */}
          <path
            d="M 2.9414 4.4132 L 9.8494 2.2506 L 16.9532 6.1688 L 20.6052 12.5994 L 18.6384 21.362 L 11.7436 22.4356 L 8.9628 14.1152 L 8.14 17.1952 L 8.14 17.1952 L 2.1252 11.3784 L 3.3088 9.9792 L 4.9544 11.407 L 4.9544 11.407 L 4.1734 7.9816 L 1.6874 9.1454 L 2.9414 4.4132 M 4.851 5.4582 L 6.017 9.295 L 6.1666 6.127 L 7.359 4.4088 L 4.8488 5.4582 M 8.1334 11.0352 L 12.9316 16.577 L 17.5274 16.6232 L 13.0086 15.1096 L 8.1312 8.4414 L 8.1334 11.0352 M 3.4056 15.5166 L 9.2136 19.2676 L 9.449 22.1298 L 3.4056 15.5166"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.2}
          />

        </svg>
      </CatButtonWrapper>
    )
  }
}

export default CatButton


