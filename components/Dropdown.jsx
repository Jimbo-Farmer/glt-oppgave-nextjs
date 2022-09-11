import { useState } from "react";
import Modal from "./Modal";

export default function Dropdown({list}) {
  const [showModal, setShowModal] = useState(false);
  const [navn, setNavn] = useState("");
  const [orgnr, setOrgnr] = useState("");
  const [form, setForm] = useState("");
  const [adresse1, setAdresse1] = useState("-adresse 1-");
  const [adresse2, setAdresse2] = useState("-adresse 2-");
  function openModal(e){
    setShowModal(true);
    let index = e.target.parentElement.dataset.index;
    setNavn(list[index].navn);
    setOrgnr(list[index].organisasjonsnummer);
    setForm(list[index].organisasjonsform.beskrivelse);
    if(list[index].forretningsadresse.adresse[0]){
      setAdresse1(list[index].forretningsadresse.adresse[0])
    }
    if(list[index].forretningsadresse.kommunenummer){
      setAdresse2(list[index].forretningsadresse.kommunenummer)
    }  
  }

  return(
    <>
      <div>
        {list.map((enhet, index)=>{
          return  <> 
                    <div key={enhet.organisasjonsnummer} data-index={index} className="search-dropdown__item">
                      <div onClick={openModal}>{enhet.organisasjonsnummer}</div>
                      <div onClick={openModal}>{enhet.navn}</div>
                    </div>
                  </>
        })}
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal} navn={navn} orgnr={orgnr} form={form} adr1={adresse1} adr2={adresse2}/>
    </>  
  )
}
