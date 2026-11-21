const BUSINESS_QUERY = "MGPELEC, 314 Chemin Jeanson, 97440 Saint-André, La Réunion";

export type GoogleReview = {
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GoogleReviewsData = {
  reviews: GoogleReview[];
  overallRating: number;
  reviewCount: number;
  mapsUrl: string;
};

async function resolvePlaceId(apiKey: string): Promise<string | null> {
  const configured = process.env.GOOGLE_PLACE_ID;
  if (configured) return configured;

  try {
    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id",
      },
      body: JSON.stringify({ textQuery: BUSINESS_QUERY }),
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.places?.[0]?.id ?? null;
  } catch {
    return null;
  }
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  const placeId = await resolvePlaceId(apiKey);
  if (!placeId) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount,googleMapsUri",
      },
      next: { revalidate: 43200 },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const reviews: GoogleReview[] = Array.isArray(data.reviews)
      ? data.reviews.map((review: Record<string, unknown>) => {
          const authorAttribution =
            (review.authorAttribution as Record<string, unknown>) ?? {};
          const text = (review.text as Record<string, unknown>) ?? {};
          return {
            authorName: (authorAttribution.displayName as string) ?? "Client Google",
            authorPhotoUrl: authorAttribution.photoUri as string | undefined,
            rating: Number(review.rating) || 0,
            text: (text.text as string) ?? "",
            relativeTime: (review.relativePublishTimeDescription as string) ?? "",
          };
        })
      : [];

    return {
      reviews: reviews.filter((review) => review.rating === 5),
      overallRating: Number(data.rating) || 0,
      reviewCount: Number(data.userRatingCount) || 0,
      mapsUrl: (data.googleMapsUri as string) ?? "",
    };
  } catch {
    return null;
  }
}
