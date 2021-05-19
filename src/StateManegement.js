import { entity } from 'simpler-state'

export const username = entity({})
export const email = entity({})
export const password = entity({})


export const handleUsername = (e) => {
  username.set({ [e.target.name]: e.target.value })
}

export const handleEmail = (e) => {
  email.set({ [e.target.name]: e.target.value })
}

export const handlePassword = (e) => {
  password.set({ [e.target.name]: e.target.value })
}


