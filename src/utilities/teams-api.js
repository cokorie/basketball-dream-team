import sendRequest from './send-request';
const BASE_URL = '/api/teams';

export function getTeam() {
    return sendRequest(`${BASE_URL}`);
}

export function addPlayerToTeam(playerId) {
    return sendRequest(`${BASE_URL}/players/${playerId}`, 'POST');
}
