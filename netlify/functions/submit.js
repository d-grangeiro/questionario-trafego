exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ ok: false, error: "Method not allowed" }),
    };
  }

  try {
    const payload = JSON.parse(event.body || "{}");

    if (!payload.email || !payload.answers) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Missing data" }),
      };
    }

    const subject = `Novo questionário: ${payload.companyName || payload.clientName || payload.email}`;

    const answerLines = Object.entries(payload.answers)
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
      .join("\n");

    const body = [
      `Email: ${payload.email}`,
      `Cliente: ${payload.clientName || ""}`,
      `Empresa: ${payload.companyName || ""}`,
      `Data: ${payload.submittedAt || new Date().toISOString()}`,
      "",
      answerLines,
    ].join("\n");

    console.log({ subject, body });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: String(error) }),
    };
  }
};
