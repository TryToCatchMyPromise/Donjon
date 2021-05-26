import {connect} from 'react-redux'
import ImageTransfer from 'src/Page Structure/Pages content/main_page/Image Transfer/ImageTransfer'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = () => {
  return null
}

const ImageTransferContainer = connect(mapStateToProps, mapDispatchToProps)(ImageTransfer)

export default ImageTransferContainer
