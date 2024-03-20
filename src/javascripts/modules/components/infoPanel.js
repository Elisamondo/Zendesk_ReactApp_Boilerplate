import { Modal } from '@zendeskgarden/react-modals'
import React, { createElement } from 'react'

export default function infoPanel({body}) {
  console.log(body)
  let display
  let mappedBody = []
  let cache = []
  let importantFlag = false

  //Linearly processes body and converts to appropriate JSX
  body.map(key => (
    console.log(`my name is key: ${key}`),
    createHeader(key[0], true),
    Object.entries(key[1]).map(content => (
      console.log(`my name is content: ${content}`),
      createHeader(content[0], false),
      
      content[1] instanceof Array ? createList(content[1]) : 
      createArticle(content[1]),

      buildBody()
    )),
    console.log("i'm about to body build")
  ))

  //key pair name into heading
  function createHeader(header, topLevel){
    checkImportant(header)
    if (topLevel){
      cache.push(<h2>{header}</h2>)
    }
    else{
      cache.push(<h3>{header}</h3>)
    }
  } 
  //key value array into list
  function createList(list){

    let listItems = list.map(item => (
      item = checkImportant(item),
      <li>{item}</li>
    ))

    return(
      cache.push(<ul>{listItems}</ul>)
    )
  }
  //key value string/number into article
  function createArticle(article){

    article = checkImportant(article)

    return(
      cache.push(<article>{article}</article>)
    )
  }
  //key value string check for important flag then create modal
  function checkImportant(modal){

    if (!isNaN(modal)){
      return modal
    }
    console.log(`i am the modal value and my name is ${modal}`)
    if (modal.startsWith("!important")){
      modal = modal.replace("!important", "")
      importantFlag = true
    }
    console.log("another successful modal")
    return modal
  }

  function buildBody(){
    console.log("body building")
    importantFlag ? (mappedBody.unshift(cache)) : mappedBody.push(cache)
    cache = []
    importantFlag = false
  }

  display = createElement('div', {},
  mappedBody
  )

  return (
    display
  )
}
