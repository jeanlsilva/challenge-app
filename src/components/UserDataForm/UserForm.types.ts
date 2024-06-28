export interface UserFormStoreState {
    name?: string
    setName: (name?: string) => void,
    email?: string
    setEmail: (email?: string) => void,
    address?: string
    setAddress: (address?: string) => void,
}