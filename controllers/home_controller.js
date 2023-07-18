const TaskList = require('../models/task');


// controller for home page

module.exports.home = async function (req, res) {
    try {
      const tasks = await TaskList.find({}); // Query execution
      return res.render('home', {
        title: 'Doo Itt!',
        todo_list: tasks,
      });
    } catch (error) {
      console.log('Error in fetching list from db:', error);
      return res.status(500).json({ error: 'An error occurred' });
    }
  };

// controller for adding task

module.exports.add = async function (req, res) {
    try {
      const newTask = await TaskList.create({
        p: req.body.p,
        date: req.body.date,
        cat: req.body.cat,
        desc: req.body.desc,
        title: req.body.title,
      });
  
      console.log(newTask);
       console.log(req.body);
      return res.redirect('/');
    } catch (error) {
      console.log('Error in creating the list:', error);
      return res.status(500).json({ error: 'An error occurred' });
    }
  };

// controller for deleting task

module.exports.delete = async function (req, res) {
    try {
      let id = req.query;
      console.log(id);
  
      let checkboxes = Object.keys(id).length;
  
      for (let i = 0; i < checkboxes; i++) {
        await TaskList.findByIdAndDelete(Object.keys(id)[i]); // Use await to wait for the deletion
      }
  
      return res.redirect('back');
    } catch (error) {
      console.log('Error in deleting the item:', error);
      return res.status(500).json({ error: 'An error occurred' });
    }
  };