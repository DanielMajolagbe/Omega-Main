export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Construct the form data for Google Forms
        const params = new URLSearchParams();
        params.append('entry.1655658305', req.body.email); // Replace 0987654321 with the actual entry ID for the email field
  
        // Submit the form to Google Forms
        const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLScvhxZEJeWIaFXAo6Vs0duVViHWLOlSE5Wm5pliWR1WsEt0kw/formResponse', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        });
  
        if (response.ok) {
          // If submission is successful, return success response
          res.status(200).json({ success: true });
        } else {
          // If submission fails, return error response
          res.status(500).json({ error: 'Failed to submit data to Google Forms' });
        }
      } catch (error) {
        console.error('Error submitting data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      // Method not allowed
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }