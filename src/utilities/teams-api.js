import sendRequest from './send-request';
const BASE_URL = '/api/teams';

export function getTeam() {
    return sendRequest(`${BASE_URL}`);
}

export function addPlayerToTeam(playerId) {
    return sendRequest(`${BASE_URL}/players/${playerId}`, 'POST');
}

export function deletePlayerFromTeam(playerId) {
    return sendRequest(`${BASE_URL}/players/${playerId}`, 'DELETE');
}

export function rename(teamName) {
    return sendRequest(`${BASE_URL}/rename`, 'PUT', {teamName});
}