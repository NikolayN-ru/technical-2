import { breadCamps } from "@/redux/actions"
import { FC, useEffect } from "react"
import { connect } from "react-redux"


const Market: FC= ({breadCamps}): JSX.Element=> {
	useEffect(() => {
		breadCamps(["магазин",])
	},[])
  return (
	<div>Market</div>
  )
}

const mapDispatchToProps = {
	breadCamps,
}


export default connect(null, mapDispatchToProps)(Market)