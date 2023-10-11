const BannerSupermarket = () => {
    return (
        <div className="pt-1.5 text-center px-96 mt-20 border-b border-zinc-200 pb-20">
            <p className="text-2xl font-bold">Descripción supermercado</p>
            <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem distinctio cum quas, quidem sequi iste eveniet nam ex.</p>
            <div className="space-x-6 mt-8">
                <button className="border-2 border-zinc-700 bg-zinc-700 text-white font-bold py-2 px-8 rounded-lg text-sm">OFERTAS</button>
                <button className="border-2 border-zinc-700 text-zinc-700 font-bold py-2 px-6 rounded-lg text-sm">PRODUCTOS</button>
            </div>
        </div>
    )
}

export default BannerSupermarket;