/**
 * Health check — site vitrine sans DB.
 * Retourne 200 si le Worker répond.
 */
export async function GET() {
  return Response.json(
    {
      status: "ok",
      version: process.env.NEXT_PUBLIC_VERSION ?? "dev",
      timestamp: new Date().toISOString(),
    },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
}
