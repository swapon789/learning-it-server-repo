const express = require("express")
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());


const  course = require('./data/CourseContent.json')

app.get('/', (req, res) => {
    res.send("learning Api Running");
});

app.get('/course-categories', (req, res) => {
    res.send(course);
});


app.get('/course-categories/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(c => c.id === id);
    res.send(selectedCourse)
});

app.get('/checkOut/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(c => c.id === id);
    res.send(selectedCourse)
})


app.listen(port, () => {
    console.log("learnin It server Running on port", port);
});