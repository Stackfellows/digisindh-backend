const nodemailer = require("nodemailer");
const config = require("../config/config");

const sendEmail = async (options) => {
  try {
    // Determine which email configuration to use based on email type
    let emailConfig;

    switch (options.emailType) {
      case "verification":
        emailConfig = config.emails.verification;
        break;
      case "admissions":
        emailConfig = config.emails.admissions;
        break;
      case "contact":
        emailConfig = config.emails.contact;
        break;
      default:
        // Default to admissions email if no type specified
        emailConfig = config.emails.admissions;
    }

    console.log(`Attempting to send email via ${emailConfig.email} (${options.emailType}) to ${options.email}`);

    console.log(`[EMAIL DISABLED] Simulation: Sending email to ${options.email}`);
    
    // Commented out to disable actual sending as per user request
    /*
    const transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port || 465,
      secure: config.smtp.port == 465, // true for 465, false for other ports
      auth: {
        user: emailConfig.email,
        pass: config.smtp.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
      // Force IPv4 to avoid ECONNREFUSED on IPv6 addresses
      family: 4,
    });

    const message = {
      from: `${emailConfig.name} <${emailConfig.email}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html,
      attachments: options.attachments || [],
    };

    // Send email
    const info = await transporter.sendMail(message);
    console.log("Email sent successfully. Message ID: %s", info.messageId);
    */

    return {
      success: true,
      messageId: "simulated-id-" + Date.now(),
      message: "Email sending simulated (disabled)",
    };
  } catch (error) {
    console.error(`Email sending failed for ${options.email}:`, error);
    return {
      success: false,
      error: error.message,
      message: `Failed to send email: ${error.message}`,
    };
  }
};

module.exports = sendEmail;
