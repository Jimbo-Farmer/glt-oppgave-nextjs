export default function searchDropdown(list, searchTerm){
  let output = list.filter(function(item){
    if(item.navn.toLowerCase().includes(searchTerm) || item.organisasjonsnummer.includes(searchTerm)){
      return true;
    }
  })   
  if(searchTerm.length === 0){
    output = []};
  return output;   
}