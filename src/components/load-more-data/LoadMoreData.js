import React from 'react'
import './styles.css';

const LoadMoreData = () => {
    const [loading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [disableButton, setDisableButton] = React.useState(false);

    async function fetchProducts(){
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                    count === 0 ? 0 : count * 20
                }`);
            const result = await response.json();

            if (result && result.products && result.products.length){
                setProducts((prevData)=> [...prevData, ...result.products]);  // when you use a hook setter function and pass in a function, the arg to the function is the past value of the hook state variable
                setLoading(false);
            }

            console.log(result);
        } catch(e) {
            console.log(e);
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchProducts();
    }, [count]);

    React.useEffect(() => {
        if (products && products.length === 100) setDisableButton(true);
    }, [products]);

    if (loading) {
        return <div>Loading data! Please wait</div>
    }

    return (
        <div className='load-more-container'>
            <div className='product-container'>
                {
                    products && products.length ?
                    products.map(item => {
                        return (
                        <div className='product' key={item.id}>
                            <img src={item.thumbnail} alt={item.title}/>
                            <p>{item.title}</p>
                        </div>
                        )
                    }) : null
                }
            </div>
            <div className='button-container'>
                <button disabled={disableButton} onClick={()=> setCount(count+1)}>Load More Products</button>
                {disableButton ? <p>You have reached 100 products</p> : null}
            </div>
        </div>
    )
}

export default LoadMoreData