import React from "react";

//Remember to add export to components/index.js
export const FeaturedProduct = ({ component }) => {
  const { name, description, date } =
    component?.parameters?.product?.value?.fields ?? {};
  return (
    <div>
      <hr />
      <div>name: {name}</div>
      <div>description: {description}</div>
      <div>date: {date}</div>
    </div>
  );
};