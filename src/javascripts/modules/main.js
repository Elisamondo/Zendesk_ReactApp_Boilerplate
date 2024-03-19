import React, { useEffect, useState } from 'react'
import InfoPanel from './components/infoPanel'
import InfoError from './components/infoError'
//mock import
import mock1 from '/src/JSONmocks/mock1'

export default function Main() {

  let [display, setDisplay] = useState(false)
  let [body, setBody] = useState()
  /*renders JSON into viewable component
  does not discriminate or manipulate JSON with a valid
  .body key pair 
  */
  
  useEffect(() => {
    displayJSON(mock1)
  }, [])

  function displayJSON(JSONObject){
    try{
      // extract key pairs from JSON
      setBody(Object.entries(JSONObject.body))
      setDisplay(true)
    }
    catch(e){
      console.log(e)
      setDisplay(false)
    }
  }

  return (
    <div>
      <div>Site issue</div>
      {(display && <InfoPanel body={body}/>) || <InfoError/>}
    </div>
  )
}
