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

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "reviews,rating,userRatingCount,googleMapsUri",
        },
        next: { revalidate: 43200 },
      }
    );
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
            relativeTime:
              (review.relativePublishTimeDescription as string) ?? "",
          };
        })
      : [];

    return {
      reviews,
      overallRating: Number(data.rating) || 0,
      reviewCount: Number(data.userRatingCount) || 0,
      mapsUrl: (data.googleMapsUri as string) ?? "",
    };
  } catch {
    return null;
  }
}
