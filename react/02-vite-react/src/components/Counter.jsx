

function Counter() {

    let count = 0

    function inc(){
        count++
        console.log(count)
        return count
    }

    function dec(){
        count--
        console.log(count)
        return count
    }


  return (
    <div>
      <button onClick={inc}>increase</button>
      <p>count {}</p>
      <button onClick={dec}>decrease</button>
    </div>
  )
}

export default Counter
