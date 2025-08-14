const express = require('express')
const app = express()
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send([
//         {
//       "id": 1,
//       "Name": "Rafay",
//       "Father Name": "Faheem",
//       "Course Name": "Web & mobile app development"
//     },
//         {
//       "id": 2,
//       "Name": "Wasay",
//       "Father Name": "Faheem",
//       "Course Name": "Web & mobile app development"
//     },
//         {
//       "id": 3,
//       "Name": "sahiban",
//       "Father Name": "Faheem",
//       "Course Name": "Web & mobile app development"
//     },
// ])
// })


app.listen(3000, () => {
    console.log('Server is runing at 3000');
    
})