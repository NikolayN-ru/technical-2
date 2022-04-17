import { breadCamps, changeMenuShop } from "@/redux/actions"
import { FC, useEffect } from "react"
import { connect } from "react-redux"


const Market: FC= ({breadCamps, changeMenuShop}): JSX.Element=> {
	useEffect(() => {
		breadCamps(["магазин",])
		changeMenuShop()
	},[])
  return (
	<div>Market</div>
  )
}

const mapDispatchToProps = {
	breadCamps,
	changeMenuShop
}


export default connect(null, mapDispatchToProps)(Market)