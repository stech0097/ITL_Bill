import React from "react";
import { useBillForm } from "../hooks/useBillForm";
import { generateBillPdf } from "../api/billapi";
import { downloadFile } from "../utils/downloadFile";
import ItemRow from "./ItemRow";

const BillForm = () => {
  const { formData, handleChange, handleItemChange, addItem } = useBillForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await generateBillPdf(formData);
      downloadFile(response);
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("Failed to generate PDF");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Generate Freight Bill</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Bill No"
          name="bill_no"
          value={formData.bill_no}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bill Date"
          name="bill_date"
          value={formData.bill_date}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Customer Name"
          name="customer_name"
          value={formData.customer_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Grand Total"
          name="grand_total"
          value={formData.grand_total}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Amount in Words"
          name="amount_words"
          value={formData.amount_words}
          onChange={handleChange}
        />

        <h3>Items</h3>
        {formData.items.map((item, index) => (
          <ItemRow
            key={index}
            item={item}
            index={index}
            onChange={handleItemChange}
          />
        ))}
        <button type="button" onClick={addItem}>
          + Add Item
        </button>

        <br />
        <button type="submit">Generate PDF</button>
      </form>
    </div>
  );
};

export default BillForm;