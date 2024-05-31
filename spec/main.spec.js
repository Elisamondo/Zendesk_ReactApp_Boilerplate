import Main from "../src/javascripts/modules/main"
import { cleanup, render } from "@testing-library/react"
import React from "react"

describe("main div", () => {
  let body
  beforeEach(() => {
    body = render(<Main/>)
  })

  afterEach(() => {
    cleanup
  })
  it("retrieve main div without App container", () => {
    expect(body).toBeTruthy()
  })
})