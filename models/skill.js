const skills = [
    {id: 125223, skill: 'Snowboarding', done: true},
    {id: 127904, skill: 'Guitar', done: false},
    {id: 139608, skill: 'Javascript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

function create(skill) {
  skill.id = Date.now() %1000000;
  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {
  //all properties attached to req and param are strings (according to class notes)
  id = parseInt(id);
  //find the index based on the ID of the skill object
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}