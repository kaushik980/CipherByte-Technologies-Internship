const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload')

const app = express();

let initial_path = path.join(__dirname, "public");

// Serve static files from the "public" directory
app.use(express.static(initial_path));
app.use(fileupload());

// Define a simple route
app.get('/', (req, res) => {
  res.sendFile(path.join(initial_path, 'home.html'));
});
app.get('/editor', (req , res)=>{
  res.sendFile(path.join(initial_path, "editor.html"));
})
//upload link
app.post('/upload', (req, res) => {
  let file = req.files.image;
  let date = new Date();
  // image name
  let imagename = date.getDate() + date.getTime() + file.name;
  // image upload path
  let path = 'public/uploads/' + imagename;

  // create upload
  file.mv(path, (err, result) => {
      if(err){
          throw err;
      } else{
          // our image upload path
          res.json(`uploads/${imagename}`)
      }
  })
})

app.get("/:blog", (req, res) => {
  res.sendFile(path.join(initial_path, "blog.html"));
})

app.use((req, res) => {
  res.json("404");
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
