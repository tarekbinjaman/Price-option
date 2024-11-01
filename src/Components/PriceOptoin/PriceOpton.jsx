

const PriceOpton = ({option}) => {
    const  {name, price, features} = option;
    return (
        <div className="bg-blue-300 rounded-md p-4">
            <h2>
                <span className="text-7xl font-extrabold text-white">{price}</span>
                <span className="text-blue-700">/mon</span>
            </h2>
            <h4 className="text-2xl text-white">{name}</h4>
        </div>
    );
};

export default PriceOpton;