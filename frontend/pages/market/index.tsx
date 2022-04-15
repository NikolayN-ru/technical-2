import LayoutMain from '@/src/layout'
import Market from '@/src/pages/market'
import {FC} from 'react'

const Merket: FC = (): JSX.Element=> {
  return (
	  <LayoutMain>
      <Market />
    </LayoutMain>
  )
}

export default Merket