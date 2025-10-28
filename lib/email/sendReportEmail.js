import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

/**
 * Sends profit acceleration report via Mailgun
 *
 * @param {Object} params
 * @param {string} params.to - Recipient email
 * @param {string} params.firstName - Recipient first name
 * @param {string} params.reportUrl - URL to the report page
 * @returns {Promise<Object>}
 */
export async function sendReportEmail({ to, firstName, reportUrl }) {
  try {
    const messageData = {
      from: `${process.env.MAILGUN_FROM_NAME} <${process.env.MAILGUN_FROM_EMAIL}>`,
      to: to,
      subject: `${firstName}, Your Profit Acceleration Report is Ready!`,
      text: `Hi ${firstName},\n\nThank you for using the Profit Acceleration Simulator!\n\nYour personalized report is ready to view. Click the link below to access your complete profit acceleration analysis:\n\n${reportUrl}\n\nThis report contains:\n- All strategies and their individual impacts\n- Expected revenue and profit increases\n- 5-year net profit impact projection\n- Downloadable PDF option\n\nIf you have any questions or would like to discuss implementing these strategies, please don't hesitate to reach out.\n\nBest regards,\nThe Profit Acceleration Software Team`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { margin: 0 auto; padding: 20px; }
              .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
              .content { padding: 30px 20px; font-size: 16px; }
              .footer { text-align: center; padding: 20px; color: #64748b; font-size: 13px; }
              a.button { display: inline-block; padding: 12px 30px; background-color: #000321; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Your Profit Acceleration Report is Ready!</h1>
              </div>
              <div class="content">
                <p>Hi ${firstName},</p>
                <p>Thank you for using the <strong>Profit Acceleration Simulator</strong>!</p>
                <p>Your personalized report is ready to view. This report contains your complete profit acceleration analysis, including:</p>
                <ul>
                  <li>All strategies and their individual impacts</li>
                  <li>Expected revenue and profit increases</li>
                  <li>5-year net profit impact projection</li>
                  <li>Downloadable PDF option</li>
                </ul>
                <p style="margin: 20px 0 30px 0;">
                  <a href="${reportUrl}" class="button">View Your Report</a>
                </p>
                <p>
                  Or copy and paste this link into your browser:<br>
                  ${reportUrl}
                </p>
                <p>And here's an exciting opportunity: At the bottom of your report, you'll find the option to book a meeting with me. This is your chance to dive deeper, ask questions, and get personalized guidance on your journey. Don't miss out on this chance to amplify your success!</p>

                <p>Eagerly looking forward to your continued growth and triumphs!</p>
                <p>To your success,</p>
                <p>[COACH NAME]</p>
              </div>
              <div class="footer">
                <p>Powered by Profit Acceleration Software&trade; &amp; Focused.com &copy; ${new Date().getFullYear()}. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, messageData);

    return {
      success: true,
      messageId: response.id,
    };

  } catch (error) {
    console.error('Error sending email via Mailgun:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}
