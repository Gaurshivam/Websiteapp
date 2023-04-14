import React, { useEffect, useState } from 'react';
import './Product.css'

const Product = () => {
    const [product,setProduct] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((results)=>{
           console.log(results)
           setProduct(results)
        })
    },[])
  return (
    <div>
    <h2 style={{color:"red" , marginTop:"50px",textAlign:"center"}}>Product Component</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, amet mollitia. Similique esse corrupti aspernatur, est numquam dolores vero eveniet maiores, in officia ea iusto modi. Ipsam similique repellat doloribus magnam! Cumque ea iusto velit ut. Impedit minus vero enim repudiandae cum nostrum. Obcaecati et ea, eaque repellat quia aperiam quidem, repudiandae quod cumque aliquid quas provident vero tempore libero earum sapiente autem accusantium asperiores. Harum rerum adipisci temporibus atque impedit quibusdam ipsam necessitatibus iste vero reiciendis, repellat nihil a consectetur. Voluptates nihil nobis vitae eveniet fuga facilis earum harum numquam laborum laudantium, ut ipsum assumenda, distinctio qui suscipit aliquam voluptatum illum in nostrum facere debitis. Accusamus aliquam alias, quas architecto ipsum repudiandae nesciunt corrupti earum animi maxime voluptatum saepe ex voluptatibus possimus autem minus inventore hic veritatis repellendus exercitationem? Nisi in exercitationem vel optio vitae aspernatur culpa fugiat repudiandae autem esse, temporibus reprehenderit eveniet repellendus doloribus nam totam? Suscipit laudantium saepe iusto eligendi magnam dolorum recusandae cum mollitia porro impedit. Ipsam eum porro veritatis repellat, nostrum nesciunt, at veniam nemo obcaecati perferendis quo reiciendis necessitatibus autem ex quae aliquid voluptas. Blanditiis tempore omnis enim nobis, accusantium ipsam labore vero, mollitia nostrum beatae esse eum quasi consequatur ut magnam necessitatibus!</p>
    <div >
        {
            product.length > 0 ? 
            
            <div className='container'>
                {
                    product.map((item,i)=>{
                       return<div key={i} className='product'>
                        <img src={item.image} width={200} height={200} alt='ImageP' />
                        <h2>{item.category}</h2>
                        <h2>Price {item.price}</h2>
                        <button>Product Details</button>
                       </div>
                    })
                }
            </div>: <h2>No Products display</h2>
        }
    </div>
  </div>
  );
}

export default Product;
