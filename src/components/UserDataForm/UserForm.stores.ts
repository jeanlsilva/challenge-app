import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { UserFormStoreState } from './UserForm.types'

const initialStates = {
  id null,
  name: '',
  email: '',
  address: '',
}

export const useUserFormStore = create<UserFormStoreState>()(
  devtools(
    (set, _get) => {
      return {
        ...initialStates,
        setName: (name) => set({ name }, false, 'setName'),
        setEmail: (email) => set({ email }, false, 'setEmail'),
        setAddress: (address) => set({ address }, false, 'setAddress')
      }
    },
    { name: 'challengeApp:userFormStore' },
  ),
)
