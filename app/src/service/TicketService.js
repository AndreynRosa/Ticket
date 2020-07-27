import { URL_API, TOEKN } from '../config';

import axios from 'axios';

const url = `${URL_API}/ticket`;
const headers = {
  Authorization: `${TOEKN}`,
  'Content-Type': 'application/json',
};
export async function newTicket(type) {
  const formData = new FormData();
  formData.append('type', type);
  const resp = await axios.post(url, formData);
  return resp;
}

export async function findAllTickets() {
  return await axios.get(url);
}

export async function callTicket(senha) {
  const formData = new FormData();
  formData.append('ticketId', senha);
  return axios.post(`${url}/call`, formData, { headers: headers });
}

export async function resetQueque() {
  return axios.delete(`${url}`, { headers: headers });
}
