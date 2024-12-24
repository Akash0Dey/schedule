const teams = [];

const addTeams = () => {
  console.clear();
  const text1 = `Currently there are ${teams.length} team. press no to quit`;
  const text2 = "\n\nTeam Name : ";
  const teamName = prompt(text1 + text2);
  
  if (teamName === 'no') {
    return;
  }

  teams.push({ name: teamName });
  addTeams();
};

addTeams();
console.log(teams);
