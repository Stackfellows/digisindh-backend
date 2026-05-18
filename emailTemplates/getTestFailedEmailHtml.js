function getTestFailedEmailHtml({ userName, testScore, rollNumber }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>Assessment Update - Sindhrozgar</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6;">
      <table align="center" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #e1e4e8; margin-top: 40px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
        <tr>
          <td style="background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%); padding: 40px 20px; text-align: center;">
            <img src="https://backend.sindhrozgar.pk/images/logo-white.png" alt="Sindhrozgar" style="width: 180px; height: auto;" />
          </td>
        </tr>
        <tr>
          <td style="padding: 40px 30px;">
            <h1 style="color: #1a202c; font-size: 28px; margin-bottom: 10px; font-weight: 700;">Assessment Result Update</h1>
            <p style="font-size: 17px; color: #4a5568; line-height: 1.6;">
              Dear ${userName}, thank you for completing the Sindhrozgar Admission Assessment.
            </p>
            
            <div style="background-color: #fff5f5; padding: 25px; border-radius: 10px; margin: 30px 0; border: 1px solid #fed7d7;">
              <p style="font-size: 15px; color: #c53030; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Your Assessment Result</p>
              <p style="font-size: 24px; color: #2d3748; margin: 0; font-weight: 700;">
                Score: <span style="color: #e53e3e;">${testScore}%</span>
              </p>
              <p style="font-size: 16px; color: #718096; margin-top: 5px;">
                Status: Not Passed (Minimum 50% required)
              </p>
            </div>
            
            <h3 style="color: #2d3748; font-size: 20px; margin-top: 30px; margin-bottom: 15px;">Don't Lose Hope!</h3>
            <p style="font-size: 16px; color: #4a5568; margin-bottom: 25px;">
              The digital world is full of opportunities, and sometimes it takes a second attempt to get it right. You can review the course materials and try the assessment again from your dashboard.
            </p>

            <div style="text-align: center; margin: 35px 0;">
              <a href="https://hunarmandpunjab.org.pk/login" style="background: #2d3748; color: #ffffff; padding: 16px 32px; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 16px; display: inline-block;">
                Return to Dashboard
              </a>
            </div>

            <p style="font-size: 14px; color: #a0aec0; margin-top: 40px; border-top: 1px solid #edf2f7; pt: 20px; text-align: center;">
              Keep learning and keep growing!<br>
              <strong>Team Sindhrozgar</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td style="background-color: #f7fafc; padding: 20px; text-align: center; font-size: 12px; color: #718096;">
            © ${new Date().getFullYear()} Sindhrozgar Initiative. All rights reserved.
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

module.exports = getTestFailedEmailHtml;
