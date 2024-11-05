"use server";

export const delay = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getProductsByCategory = async (category: string) => {
  try {
    if (!category) {
      throw new Error("Category is required");
    }
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
      {
        cache: "no-cache",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: (error as Error)?.message };
  }
};
export const getAllProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    // await delay(3000);
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: (error as Error)?.message };
  }
};

export const getProductById = async (id: number) => {
  try {
    if (!id) {
      throw new Error("Id is required");
    }
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: (error as Error)?.message };
  }
};
