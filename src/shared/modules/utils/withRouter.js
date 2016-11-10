/* eslint-disable no-param-reassign */
import { propTypes } from 'react-router'

// The routerContext type exported from react-router v4
/* export const routerContext = PropTypes.shape({
 *   transitionTo: PropTypes.func.isRequired,
 *   replaceWith: PropTypes.func.isRequired,
 *   blockTransitions: PropTypes.func.isRequired,
 *   createHref: PropTypes.func.isRequired
 * })
 * */
export default function (target) {
  target.contextTypes = {
    router: propTypes.routerContext.isRequired,
  }

  target.prototype.push = function (path) {
    this.context.router.transitionTo(path)
  }

  target.prototype.replace = function (path) {
    this.context.router.replaceWith(path)
  }
}

