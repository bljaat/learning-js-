import products from "./data"
import Products from "./Products"

function App() {

  return (
    <>
      <h2>Products</h2>


      <div className="products" style={{display: "flex" , justifyContent: "center", alignItems: "center", gap: "1rem"}}>
        {
          products.map((productData, index) => {
            return (
             <Products product={productData}  key={productData.id}/>
            )
          })
        }
      </div>
    </>
  )
}

export default App
