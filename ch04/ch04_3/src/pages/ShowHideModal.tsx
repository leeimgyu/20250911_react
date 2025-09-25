import {useCallback} from 'react'
import {Title, Subtitle} from '../components'
import {Button, Modal, ModalContent, ModalAction} from '../theme/daisyui'
import {useToggle} from '../hooks'
import * as D from '../data'

export default function ShowHideModal() {
  const [open, toggleOpen] = useToggle() //[checked, toggleChecked]구조분해할당
  // toggleOpen: 단순히 창 닫는 기능, onAccept: 창 닫기 전 해야 할 기능 지정 가능
  const onAccept = useCallback(() => {
    // 모달의 toggleOpen 뿐 만 아니라 사용자의 기능들을 추가 가능
    toggleOpen()
  }, [toggleOpen]) //의존성 목록에 값이 없어도 상관없음.
  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={toggleOpen}>Open Modal</Button>
      </div>

      <Modal open={open} >
        <ModalContent closeIconClassName="btn-primary" onCloseIconClicked={toggleOpen}>
          <Subtitle>Modal</Subtitle>
          <p>{D.randomParagraphs()}</p>
          <ModalAction>
            <button className="btn btn-primary" onClick={onAccept}>Accept</button>
            <button className="btn" onClick={toggleOpen}>Close</button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  )
}