function findIndex(obj, word){
  for(i = 0 ; i < obj.length ; i++){
    if(obj[i].name == word){
      console.log(i)
      break
    }
  }
}
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
// expexted result: 1
