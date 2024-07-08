"use client";
import React, { createContext } from "react";
import Table from "rowstack";

// تعريف أنواع البيانات
type RowData = {
  id: string;
  name: string;
  email: string;
  Num_orders: string;
};

type ColumnData = {
  id: keyof RowData;
  name: string;
  Num_orders: string;
};

function Rowstack() {
  const data: RowData[] = [
    {
      id: "0",
      name: "Uriel Russo",
      email: "dolor.vitae@icloud.ca",
      Num_orders: "20",
    },
    {
      id: "1",
      name: "Priscilla Whitehead",
      email: "egestas.aliquam@icloud.ca",
      Num_orders: "15",
    },
    {
      id: "2",
      name: "Mariam Christensen",
      email: "lectus@google.com",
      Num_orders: "10",
    },
    {
      id: "3",
      name: "Elizabeth Hoffman",
      email: "tellus.nunc@google.ca",
      Num_orders: "5",
    },
    {
      id: "4",
      name: "Zelda Hess",
      email: "phasellus.libero.mauris@icloud.ca",
      Num_orders: "15",
    },
  ];

  const columns: ColumnData[] = [
    { id: "id", name: "id", Num_orders: "id" },
    {
      id: "name",
      name: "Name",
      Num_orders: "name",
    },
    {
      id: "email",
      name: "Email",
      Num_orders: "email",
    },
    {
      id: "Num_orders",
      name: "Num_orders",
      Num_orders: "Num_orders",
    },
  ];

  // تعريف قيم افتراضية للخصائص الإضافية
  const onChange = (x: any) => {
    console.log(x);
  };

  const config = {};

  const licenseKey = "your-license-key";

  return (
    <div>
      <Table
        data={data}
        columns={columns}
        onChange={onChange}
        config={config}
        licenseKey={licenseKey}
      />
    </div>
  );
}

export default Rowstack;
