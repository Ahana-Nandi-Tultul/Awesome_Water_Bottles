import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

function App() {

  const bottlesPromise = fetch('./bottles.json').then(res=> res.json())


  return (
    <>
      <h2>Buy Awesome Water Bottle</h2>
      <Suspense  fallback = {<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise= {bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
