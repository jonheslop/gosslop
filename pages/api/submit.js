import { google } from 'googleapis';

async function submit(req, res) {
  if (req.method === 'POST') {
    const { name, email, attending, count = '', dietary = '' } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1!A2:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, attending, count, dietary]],
      },
    });

    if (response.status === 200) {
      return res.status(201).json({ message: 'It works!', response });
    } else {
      return res.status(400).json({ message: 'Something went wrong', response });
    }
  }
  res.status(200).json({ message: 'You shouldn’t be here' });
}

export default submit;
