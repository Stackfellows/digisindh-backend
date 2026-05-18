function getRegistrationEmailHtml({ userName, rollNumber, loginUrl }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>Welcome to Sindhrozgar</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6;">
      <table align="center" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #e1e4e8; margin-top: 40px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
        <tr>
          <td style="background: linear-gradient(135deg, #079560 0%, #036e47 100%); padding: 40px 20px; text-align: center;">
            <img src="https://backend.sindhrozgar.pk/images/logo-white.png" alt="Sindhrozgar" style="width: 180px; height: auto;" />
          </td>
        </tr>
        <tr>
          <td style="padding: 40px 30px;">
            <h1 style="color: #1a202c; font-size: 28px; margin-bottom: 10px; font-weight: 700;">Welcome Aboard, ${userName}!</h1>
            <p style="font-size: 17px; color: #4a5568; line-height: 1.6;">
              We're excited to have you join the Sindhrozgar initiative. Your registration has been successful, and your digital learning journey begins now!
            </p>
            
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 10px; margin: 30px 0; border: 1px solid #edf2f7;">
              <p style="font-size: 15px; color: #718096; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Your Official Credentials</p>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <p style="font-size: 20px; color: #2d3748; margin: 0; font-weight: 700;">
                  Roll Number: <span style="color: #079560;">${rollNumber}</span>
                </p>
              </div>
            </div>
            
            <h3 style="color: #2d3748; font-size: 20px; margin-top: 30px; margin-bottom: 15px;">What's Your Next Step?</h3>
            <p style="font-size: 16px; color: #4a5568; margin-bottom: 25px;">
              To proceed with your enrollment, you need to complete your Admission Assessment. This helps us understand your current skills and assign you the best learning path.
            </p>

            <div style="text-align: center; margin: 35px 0;">
              <a href="${loginUrl}" style="background: #079560; color: #ffffff; padding: 16px 32px; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(7, 149, 96, 0.2); transition: all 0.3s ease;">
                Go to Student Dashboard
              </a>
            </div>

            <div style="background-color: #fffaf0; border-left: 4px solid #ed8936; padding: 20px; margin: 30px 0;">
              <p style="font-size: 14px; color: #744210; margin: 0; font-weight: 500;">
                <strong>Important:</strong> Please complete your assessment within 48 hours to secure your spot in the current batch.
              </p>
            </div>

            <p style="font-size: 14px; color: #a0aec0; margin-top: 40px; border-top: 1px solid #edf2f7; pt: 20px; text-align: center;">
              If you have any questions, reach out to our support team at <a href="mailto:admissions@sindhrozgar.pk" style="color: #079560; text-decoration: none; font-weight: 600;">admissions@sindhrozgar.pk</a>
            </p>
          </td>
        </tr>
        <tr>
          <td style="background-color: #f7fafc; padding: 20px; text-align: center; font-size: 12px; color: #718096;">
            © ${new Date().getFullYear()} Sindhrozgar Initiative. All rights reserved.<br>
            Empowering Youth Through Digital Excellence.
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

module.exports = getRegistrationEmailHtml;
