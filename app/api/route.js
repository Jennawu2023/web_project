import fetch from "node-fetch";

export async function GET(request) {
  try {
    const response = await fetch("https://favqs.com/api/qotd");

    if (!response.ok) {
      return new Response(
        JSON.stringify({ message: "Failed to fetch quote from FavQs API" }),
        { status: response.status }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching quote:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
