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
 * @param {Buffer} params.pdfBuffer - PDF file buffer
 * @param {string} params.filename - PDF filename
 * @returns {Promise<Object>}
 */
export async function sendReportEmail({ to, firstName, pdfBuffer, filename }) {
  try {
    const messageData = {
      from: `${process.env.MAILGUN_FROM_NAME} <${process.env.MAILGUN_FROM_EMAIL}>`,
      to: to,
      subject: 'Your Profit Acceleration Report',
      text: `Hi ${firstName},\n\nThank you for using the Profit Acceleration Simulator!\n\nYour personalized report is attached to this email. This report contains your complete profit acceleration analysis, including all strategies and projected increases.\n\nIf you have any questions or would like to discuss implementing these strategies, please don't hesitate to reach out.\n\nBest regards,\nThe Profit Acceleration Software Team`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
              .content { padding: 30px 20px; background-color: #f8fafc; }
              .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
              .button { display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Your Profit Acceleration Report</h1>
              </div>
              <div class="content">
                <p>Hi ${firstName},</p>
                <p>Thank you for using the <strong>Profit Acceleration Simulator</strong>!</p>
                <p>Your personalized report is attached to this email. This report contains your complete profit acceleration analysis, including:</p>
                <ul>
                  <li>All strategies and their individual impacts</li>
                  <li>Expected revenue and profit increases</li>
                  <li>5-year net profit impact projection</li>
                </ul>
                <p>If you have any questions or would like to discuss implementing these strategies, please don't hesitate to reach out.</p>
                <p><strong>Best regards,</strong><br>The Profit Acceleration Software Team</p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Profit Acceleration Software</p>
                <p>profitaccelerationsoftware.com</p>
              </div>
            </div>
          </body>
        </html>
      `,
      attachment: {
        data: pdfBuffer,
        filename: filename,
      },
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
