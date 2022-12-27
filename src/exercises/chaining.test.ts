import { constVoid, pipe } from "fp-ts/function"
import { Option } from "fp-ts/Option"
import * as O from "fp-ts/Option"
import { Either } from "fp-ts/Either"
import * as E from "fp-ts/Either"
import { Task } from "fp-ts/Task"
import * as T from "fp-ts/Task"
import { TaskEither } from "fp-ts/TaskEither"
import * as TE from "fp-ts/TaskEither"

// TODO - 1: remove skip marker
describe.skip("chaining", () => {
  type ItemId = number
  type Item = { id: ItemId; qty: number }

  const checkIn =
    (value: number) =>
    (item: Item): Item => ({
      ...item,
      qty: item.qty + value,
    })

  const aItem: Item = { id: 123, qty: 10 }

  test("chaining w/ Option Monad", () => {
    const load = (id: ItemId): Option<Item> => O.of(aItem)
    const save = (item: Item): Option<void> => O.of(constVoid())

    // TODO - 1: write a program that load an item, check in 10 and finally save the item
    const program: Option<void> = pipe(load(123), O.map(checkIn(10)), O.chain(save))
  })

  test("chaining w/ Either Monad", () => {
    type Error = string
    const load = (id: ItemId): Either<Error, Item> => E.of(aItem)
    const save = (item: Item): Either<Error, Item> => E.of(item)

    // TODO - 2: write a program that load an item, check in 10 and finally save the item
    const program: Either<Error, Item> = pipe(load(123), E.map(checkIn(10)), E.chain(save))
  })

  test("chaining w/ Task Monad", () => {
    const load = (id: ItemId): Task<Item> => T.of(aItem)
    const save = (item: Item): Task<Item> => T.of(item)

    // TODO - 3: write a program that load an item, check in 10 and finally save the item
    const program: Task<Item> = pipe(load(123), T.map(checkIn(10)), T.chain(save))
  })

  test("chaining w/ TaskEither Monad", () => {
    type Error = string
    const load = (id: ItemId): TaskEither<Error, Item> => TE.of(aItem)
    const save = (item: Item): TaskEither<Error, Item> => TE.of(item)

    // TODO - 4: write a program that load an item, check in 10 and finally save the item
    const program: TaskEither<Error, Item> = pipe(load(123), TE.map(checkIn(10)), TE.chain(save))
  })
})