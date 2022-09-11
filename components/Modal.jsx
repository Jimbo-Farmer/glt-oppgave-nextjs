export default function Modal({navn, orgnr, form, adr1, adr2, adr3, net, show, onClose}) {
  let modalVisibility = "hidden";
  if(show){
    modalVisibility = "show";
  }
  function handleClose(){
    onClose();
  }
  const googleAddress = "https://www.google.com/maps/search/?api=1&query=" + adr1.split(" ").join("")+"%2C"+adr2;

  return(
    <div id="modal" className={modalVisibility}>
      <h3>{navn}</h3>
      <div>Organisasjonsnummer: {orgnr}</div>
      <div>Organisasjonsform: {form}</div>
      <div>Adresse:</div>
      <div>
        <a target="_blank" rel="noreferrer" href={googleAddress}>{adr1} {adr2}</a>
        <p>{adr3}</p>
      </div>
      <div>{net}</div>
      <button onClick={handleClose}>Lukke</button>
    </div>
  )
}
