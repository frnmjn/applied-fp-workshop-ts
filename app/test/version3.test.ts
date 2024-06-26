import { invalidSize, runApp } from "../src/version3"
import * as E from "fp-ts/Either"
import { tuple } from "../utils/tuple"

// TODO 1: gradually eliminate the "skip marker" and check that tests are green
describe.skip("version 3", () => {
  // TODO 2: what changes from the version 2 tests?
  test.skip("go to opposite angle", () => {
    const planet = tuple("5x4", "2,0 0,3 3,2")
    const rover = tuple("0,0", "N")
    const commands = "RBBLBRF"

    const result = runApp(planet, rover, commands)

    expect(result).toStrictEqual(E.right("4:3:E"))
  })

  test.skip("hit an obstacle", () => {
    const planet = tuple("5x4", "2,0 0,3 3,2")
    const rover = tuple("0,0", "N")
    const commands = "RFF"

    const result = runApp(planet, rover, commands)

    expect(result).toStrictEqual(E.right("O:1:0:E"))
  })

  test.skip("invalid planet size", () => {
    const planet = tuple("ax4", "2,0 0,3 3,2")
    const rover = tuple("0,0", "N")
    const commands = "RBBLBRF"

    const result = runApp(planet, rover, commands)

    expect(result).toStrictEqual(E.left(invalidSize(new Error("Input: ax4"))))
  })
})
