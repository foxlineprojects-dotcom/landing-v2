export async function verifyRecaptcha(token) {
  if (!process.env.RECAPTCHA_SECRET_KEY) return true; // Skip if no secret

  try {
    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const data = await res.json();
    return data.success && data.score >= 0.5;
  } catch (err) {
    console.error("Recaptcha verification failed:", err);
    return false;
  }
}
