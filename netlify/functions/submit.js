const nodemailer = require("nodemailer");

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

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

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject,
      text: body,
    });

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
