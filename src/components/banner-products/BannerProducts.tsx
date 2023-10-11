import { useEffect, useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
const BannerProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
    }, []);

    const getAllProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())

        setProducts(data.slice(0, 3))
    }

    return (
        <div className="mx-10 mt-5 border-b border-zinc-200 pb-20">
            <div className="flex justify-between">
                <p className="font-bold">¡Nuestros productos!</p>
                <a href="#" className="text-xs underline font-bold">VER TODOS LOS PRODUCTOS</a>
            </div>
            <div className="mt-8 space-x-5 whitespace-nowrap flex justify-center">
                {products.map((item: any) =>
                    <div>
                        <img src={item.image} alt={item.description} className="w-60 h-72 rounded-lg border p-5" />
                        <div>
                            <p className="font-bold w-60 whitespace-pre-line">{item.title}</p>
                            <p className="text-sm w-60 whitespace-pre-line">{item.description}</p>
                            <p className="font-bold text-lg">${item.price}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BannerProducts;