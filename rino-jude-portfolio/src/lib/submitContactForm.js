const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

export async function submitContactForm(payload) {
  if (!endpoint) {
    const error = new Error(
      "Form delivery is not configured yet. Please email rinojude1810@gmail.com instead.",
    );
    error.code = "NOT_CONFIGURED";
    throw error;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("The message could not be sent. Please try again or email directly.");
  }

  return true;
}
