import {connect} from 'react-redux'
import RestaurantPage from 'src/Page Structure/Pages content/restaurant_page/RestaurantPage'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = () => {
  return null
}

const RestaurantPageContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantPage)

export default RestaurantPageContainer
