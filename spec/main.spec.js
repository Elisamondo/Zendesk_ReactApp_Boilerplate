import Main from "../src/javascripts/modules/main"
import { cleanup, render } from "@testing-library/react"
import React from "react"

describe("main div", () => {
  let body
  //mounts component in test environment
  beforeEach(() => {
    body = render(<Main/>)
  })

  //wipes test environment for clean testing
  afterEach(() => {
    cleanup
  })

  it("retrieve main component without App container", () => {
    expect(body).toBeTruthy()
  })
})