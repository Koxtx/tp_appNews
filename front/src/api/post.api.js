import { BASE_URL } from "../utils/url";

export async function addPost(values) {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to add post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in addPost:", error);
    throw error;
  }
}

export async function allPost() {
  try {
    const response = await fetch(`${BASE_URL}/`);
   const allNews = await response.json();
    return allNews;
  } catch (error) {
    console.log(error);
  }
}
