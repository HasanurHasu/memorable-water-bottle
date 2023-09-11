
const Bottle = ({ bottle, handleCard }) => {
    const { name, img, price } = bottle;
    return (
        <div className="w-72 text-center p-5 border rounded-lg">
            <h1 className="text-lg font-semibold">{name}</h1>
            <img src={img} alt="" className="rounded-lg my-3" />
            <p>Price: {price}$</p>
            <button onClick={() => handleCard(bottle)} className="rounded-lg font-semibold bg-green-400 py-2 px-6 mt-2">By Now</button>
        </div>
    );
};

export default Bottle;