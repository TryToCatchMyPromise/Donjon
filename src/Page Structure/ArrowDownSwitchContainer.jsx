import {Route, Switch} from 'react-router'
import ArrowDown from 'src/Page Structure/ArrowDown'

const ArrowDownSwitchContainer = ({arrowDown}) => {
  return (
    <Switch>
      <Route exact path='/'>
        <ArrowDown hash={arrowDown.hash.main} />
      </Route>
      <Route path='/hotel'>
        <ArrowDown hash={arrowDown.hash.hotel} />
      </Route>
      <Route path='/restaurant'>
        <ArrowDown hash={arrowDown.hash.restaurant} />
      </Route>
      <Route path='/services'>
        <ArrowDown hash={arrowDown.hash.services} />
      </Route>
      <Route path='/contacts'>
        <ArrowDown hash={arrowDown.hash.contacts} />
      </Route>
    </Switch>
  )
}

export default ArrowDownSwitchContainer
