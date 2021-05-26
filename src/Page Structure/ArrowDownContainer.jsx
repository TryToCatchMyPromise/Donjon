import {connect} from 'react-redux'
import ArrowDownSwitchContainer from 'src/Page Structure/ArrowDownSwitchContainer'

const mapStateToProps = (state) => {
  return {
    arrowDown: state.arrowDown
  }
}

const mapDispatchToProps = () => {
  return {}
}

const ArrowDownContainer = connect(mapStateToProps, mapDispatchToProps)(ArrowDownSwitchContainer)

export default ArrowDownContainer
