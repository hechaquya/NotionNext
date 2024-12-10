import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div
      className={`gap-x-1 flex flex-wrap text-sm font-serif ${props.className || ''}`}>
      <span></span>
      <a
        href='https://zhaolaoshi.fun'
        className='underline justify-start'>
        数学培优只有一条路：提高效率；提高效率只有一条路：掌握方法
      </a>
      .
    </div>
  )
}
