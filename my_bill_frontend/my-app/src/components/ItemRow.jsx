import React from "react";

const ItemRow = ({ item, index, onChange }) => {
  return (
    <div style={{ marginBottom: "10px", borderBottom: "1px solid #ccc" }}>
      <input
        type="text"
        placeholder="CN No"
        name="cn_no"
        value={item.cn_no}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="CN Date"
        name="cn_date"
        value={item.cn_date}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="Weight"
        name="weight"
        value={item.weight}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="Rate"
        name="rate"
        value={item.rate}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="Freight"
        name="freight"
        value={item.freight}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="Detention"
        name="detention"
        value={item.detention}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="Other Expenses"
        name="other_exp"
        value={item.other_exp}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="Vehicle No"
        name="vehicle_no"
        value={item.vehicle_no}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="From"
        name="from_city"
        value={item.from_city}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="To"
        name="to_city"
        value={item.to_city}
        onChange={(e) => onChange(e, index)}
      />
      <input
        type="text"
        placeholder="Bill Amount"
        name="bill_amount"
        value={item.bill_amount}
        onChange={(e) => onChange(e, index)}
      />

      {/* Add other fields similarly */}
    </div>
  );
};

export default ItemRow;