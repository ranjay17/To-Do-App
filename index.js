//importing the required packages
const express = require('express');
const path = require('path');
const port = 3300;
const db = require('./config/mongoose');
const Task = require('./models/task');

//assigning express to add
const app = express();

//setting up the view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//Using the middle ware
app.use(express.static('assets'))
app.use(express.urlencoded());

//creating todo task
var todoTask = []

// using get method to show the entered tasks and todays day
app.get('/', async function(req,res){
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    console.log(today);
    let day = today.toLocaleDateString("en-US", options)
    //res.send(day)
    //console.log(day);
    try {
        const new_tasks = await Task.find({});
        return res.render('home', {
            title: 'Todo App',
            todo_task: new_tasks,
            weekDays: day
        })
    } catch (err) {
        console.log('error:',err);
    }
})

//using post method to store the task in database
app.post('/create', async function(req,res){
    try {
        const new_task = await Task.create({
            task: req.body.task
        });
        console.log(new_task);
    return res.redirect('back')
    } catch (error) {
        console.log(error)
    }
    
})
        
//deleting task from database using get method
 app.get('/delete-task', async function(req,res){
    try{
        const id = await Task.findByIdAndDelete(req.query.id);
        console.log('contact deleted',id)
        return res.redirect('back');
    }catch(err){
        console.log('error:',err)
    }
 })

//starting the server on port
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server on port:',port);
    }else{
        console.log('Server is running on port:',port);
    }
})


