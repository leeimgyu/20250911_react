import {useMemo} from 'react'
// import {DragDropContext} from 'react-beautiful-dnd'
import {Title} from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from '../BoardList'
import {ListDroppable} from '../../components'
import {useLists} from '../../store/useLists'

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'

export default function Board() {
  const {lists, onRemoveList, onCreateList, onMoveList, onDragEnd} = useLists()

  const sensors = useSensors(
    useSensor(PointerSensor) // 필요 시 KeyboardSensor 등도 추가 가능
  )
  
  const children = useMemo(
    () =>
      lists.map((list, index) => (
        <BoardList
          key={list.uuid}
          list={list}
          index={index}
          onRemoveList={onRemoveList(list.uuid)}
          onMoveList={onMoveList}
        />
      )),
    [lists, onRemoveList, onMoveList]
  )

  return (
    <section className="mt-4">
      <Title>Board</Title>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={lists.map(list => list.uuid)}
          strategy={horizontalListSortingStrategy}
        >
          <div className="flex flex-wrap p-2 mt-4">
            {children}
            <CreateListForm onCreateList={onCreateList} />
          </div>
        </SortableContext>
      </DndContext>
    </section>
  )
}
