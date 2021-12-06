import sendRequest from './send-request';
const BASE_URL = '/api/teams';

export function getTeam() {
    return sendRequest(`${BASE_URL}/team`);
}

export function addPlayerToTeam(playerId) {
    return sendRequest(`${BASE_URL}/team/players/${playerId}`, 'POST');
}

export function create() {
    return sendRequest(`${BASE_URL}/team/create`, 'POST');
}