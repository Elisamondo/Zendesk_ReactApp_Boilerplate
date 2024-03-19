import React, { createElement } from 'react'

export default function infoPanel({body}) {
  console.log(body)
  let display
  let mappedBody = []

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
      <li>{item}</li>
    ))

    return(
      mappedBody.push(<ul>{listItems}</ul>)
    )
  }
  //key value string/number into article
  function createArticle(article){
    return(
      mappedBody.push(<article>{article}</article>)
    )
  }
  //key value string with important flag into modal
  function createModal(){

  }

  display = createElement('div', {},
  mappedBody
  )

  return (
    display
  )
}
