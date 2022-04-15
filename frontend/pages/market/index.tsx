import LayoutMain from '@/src/layout'
import Market from '@/src/pages/market'
import { NextPage } from 'next'

const Merket: NextPage = (): JSX.Element=> {
  return (
	  <LayoutMain>
      <Market />
    </LayoutMain>
  )
}

export default Merket