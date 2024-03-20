import { Modal } from '@zendeskgarden/react-modals'
import React, { createElement } from 'react'

export default function infoPanel({body}) {
  console.log(body)
  let display
  let mappedBody = []

  //Linearly processes body and converts to appropriate JSX
  body.map(key => (
    console.log(`my name is key: ${key}`),
    createHeader(key[0], true),
    Object.entries(key[1]).map(content => (
      console.log(`my name is content: ${content}`),
      createHeader(content[0], false),
      
      content[1] instanceof Array ? createList(content[1]) : 
      createArticle(content[1])
    ))
  ))

  //key pair name into heading
  function createHeader(header, topLevel){
    if (topLevel){
      mappedBody.push(<h2>{header}</h2>)
    }
    else{
      mappedBody.push(<h3>{header}</h3>)
    }
  } 
  //key value array into list
  function createList(list){

    let listItems = list.map(item => (
      item = checkModal(item),
      <li>{item}</li>
    ))

    return(
      mappedBody.push(<ul>{listItems}</ul>)
    )
  }
  //key value string/number into article
  function createArticle(article){

    article = checkModal(article)

    return(
      mappedBody.push(<article>{article}</article>)
    )
  }
  //key value string check for important flag then create modal
  function checkModal(modal){

    if (!isNaN(modal)){
      return modal
    }
    console.log(`i am the modal value and my name is ${modal}`)
    if (modal.startsWith("!important")){
      modal = modal.replace("!important", "")
      console.log("modal code goes here")
    }
    console.log("another successful modal")
    return modal
  }

  display = createElement('div', {},
  mappedBody
  )

  return (
    display
  )
}
