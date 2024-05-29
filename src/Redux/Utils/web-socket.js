import io from 'socket.io-client'
import environment from '../environments/environment'
const CHAT_ENDPOINT = environment.chatServer
const VIDEO_ENDPOINT = environment.videoServer

export const socket = io(VIDEO_ENDPOINT)
export const chatSocket = io(CHAT_ENDPOINT, {
  query: `token=Bearer ${localStorage.getItem('access_token')}`,
})
