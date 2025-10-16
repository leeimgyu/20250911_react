import type {FC, PropsWithChildren} from 'react'
// import {Droppable} from 'react-beautiful-dnd'
import {useDroppable} from '@dnd-kit/core'

export type CardDroppableProps = {
  droppableId: string
}
export const CardDroppable: FC<PropsWithChildren<CardDroppableProps>> = ({
  droppableId,
  children
}) => {
  const {setNodeRef, isOver} = useDroppable({id: droppableId})
  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col p-2 transition-colors ${isOver ? 'bg-blue-100' : ''}`}>
      {children}
    </div>
  )
}
