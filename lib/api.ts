const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export async function getMeetingsFromApi(date?: string) {
  const url = new URL("/api/meetings", getBaseUrl());

  if (date) {
    url.searchParams.set("date", date);
  }

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch meetings.");
  }

  return response.json();
}

export async function getMeetingFromApi(id: number) {
  const url = new URL(`/api/meetings/${id}`, getBaseUrl());

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch meeting.");
  }

  return response.json();
}
