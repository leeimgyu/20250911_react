import {useDispatch, useSelector} from 'react-redux'
import * as D from '../../data'
import * as C from '../../store/cards'
import type {AppState} from '../../store'
import {useCallback, useMemo} from 'react'
import Card from './Card'
import {Icon3, Title} from '../../components'

const makeCard = () =>
  D.makeCard(D.randomUUID(), D.makeRandomUser(), D.randomImage(200, 200), '', '', '', '')

export default function CardsTest() {
  const dispatch = useDispatch()
  const cards = useSelector<AppState, C.State>(({cards}) => cards)

  const addCard = useCallback(() => {
    dispatch(C.addCard(makeCard()))
  }, [dispatch])
  const removeCard = useCallback(
    (id: string) => () => dispatch(C.removeCard(id)),
    [dispatch]
  )

  const children = useMemo(
    () =>
      cards.map(card => (
        <Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />
      )),
    [cards, removeCard]
  )

  return (
    <section className="mt-4">
      <Title>CardsTest</Title>
      <div className="flex justify-center mt-4">
        <Icon3 name="add_circle" className='cursor-pointer text-5xl select-none' onClick={addCard} />
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}