import axios from "axios";

export async function getData() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}

export async function getDataByCategory() {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products/category/electronics"
  );
  return data;
}

export async function getDataDetail(id) {
  const { data } = await axios.get("https://fakestoreapi.com/products/" + id);
  return data;
}
