const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('./dbConfig');
// const multer = require('multer')

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Add Project
// app.post('/api/addProject', async (req, res) => {
//   const { title, description, technologies, image_url, project_link } = req.body;

//   try {
//     const request = new sql.Request();
//     await request.query(`
//       INSERT INTO Projects (title, description, technologies, image_url, project_link)
//       VALUES ('${title}', '${description}', '${technologies}', '${image_url}', '${project_link}')
//     `);
//     res.status(200).send('Project added successfully');
//   } catch (err) {
//     console.error('Error:', err);
//     res.status(500).send('Server error');
//   }
// });

// Add Skill
// app.post('/api/addSkill', async (req, res) => {
//   const { title, description } = req.body;

//   try {
//     const request = new sql.Request();
//     await request.query(`
//       INSERT INTO Skills (title, description)
//       VALUES ('${title}', '${description}')
//     `);
//     res.status(200).send('Skill added successfully');
//   } catch (err) {
//     console.error('Error:', err);
//     res.status(500).send('Server error');
//   }
// });

// Fetch Projects
app.get('/api/getProjects', async (req, res) => {
  const result = await new sql.Request().query('SELECT * FROM Projects');
  res.send(result.recordset);
});

// Fetch Skills
app.get('/api/getSkills', async (req, res) => {
  const result = await new sql.Request().query('SELECT * FROM Skills');
  res.send(result.recordset);
});

//Fetch Certificates
app.get('/api/getCertificates', async (req, res) => {
  const result = await new sql.Request().query('SELECT * FROM Certificates');
  res.send(result.recordset);
});


const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
