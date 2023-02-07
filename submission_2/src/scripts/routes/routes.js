import Detail from '../views/pages/detail'
import Home from '../views/pages/home'

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorites': 'page'
}

export default routes
