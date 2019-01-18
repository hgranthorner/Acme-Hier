function showManagementStructure(userArray) {
  let boss = userArray.find(user => !user.managerId)

  helperFunction(boss, 0)

  function helperFunction(obj, level) {
    console.log(' -'.repeat(level) + obj.name)
    let reports = userArray.filter(user => user.managerId === obj.id)
    for (let report of reports) {
      ++level
      helperFunction(report, level)
      --level
    }
  }
}

const users = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 }
]

showManagementStructure(users)

/*
moe
 - larry
	 - curly
 - shep
	 - groucho
*/

module.exports = showManagementStructure
