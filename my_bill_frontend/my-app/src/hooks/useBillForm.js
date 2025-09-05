import { useState } from "react";

export const useBillForm = () => {
  const [formData, setFormData] = useState({
    bill_no: "",
    bill_date: "",
    customer_name: "",
    grand_total: "",
    amount_words: "",
    items: [
      {
        cn_no: "",
        cn_date: "",
        weight: "",
        rate: "",
        freight: "",
        detention: "",
        other_exp: "",
        vehicle_no: "",
        from_city: "",
        to_city: "",
        bill_amount: "",
      },
    ],
  });

  // Update top-level fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update item fields
  const handleItemChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newItems = [...prev.items];
      newItems[index][name] = value;
      return { ...prev, items: newItems };
    });
  };

  // Add new item row
  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          cn_no: "",
          cn_date: "",
          weight: "",
          rate: "",
          freight: "",
          detention: "",
          other_exp: "",
          vehicle_no: "",
          from_city: "",
          to_city: "",
          bill_amount: "",
        },
      ],
    }));
  };

  return { formData, handleChange, handleItemChange, addItem };
};