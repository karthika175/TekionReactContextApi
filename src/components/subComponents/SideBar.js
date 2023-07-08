import { useContext } from "react";
import { ShopContext } from "../connectors/ContextApi";

const SideBar = (
) => {
    const { 
        setPriceRange, 
        priceRange, 
        stockRange,
        setStockRange,
        discountRange,
        setDiscountRange,
       } = useContext(ShopContext);
    return (
   <div className="sidebar">
            <h3>Filters</h3>
            <ul>
            <li>
                <h4>Price Range</h4>
                <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                />
                <span>Max Price: {priceRange}</span>
            </li>
            <li>
                <h4>Discount Range</h4>
                <input
                type="range"
                min="0"
                max="20"
                value={discountRange}
                onChange={(e) => setDiscountRange(e.target.value)}
                />
                <span>Max Discount: {discountRange}</span>
            </li>
            <li>
                <h4>Stock Range</h4>
                <input
                type="range"
                min="0"
                max="100"
                value={stockRange}
                onChange={(e) => setStockRange(e.target.value)}
                />
                <span>Max Stock: {stockRange}</span>
            </li>
            </ul>
        </div>
    )
  }
export default SideBar;

    // priceRange,
    // setPriceRange,
    // discountRange,
    // setDiscountRange,
    // stockRange,
    // setStockRange
