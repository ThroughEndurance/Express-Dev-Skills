const skills = [
    {id: 125223, skill: 'Snowboarding', done: true},
    {id: 127904, skill: 'Guitar', done: false},
    {id: 139608, skill: 'Javascript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }