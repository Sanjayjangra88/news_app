import React from 'react'
import loading from './loading.gif'

// export default class spiner extends Component { -->>> class base
  const spiner = ()=> {
  // render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="loading" />
      </div>
    )
  }
// }
export default spiner
