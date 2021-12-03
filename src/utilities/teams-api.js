import sendRequest from './send-request';
const BASE_URL = '/api/teams';

export function getTeam() {
    return sendRequest(`${BASE_URL}/team`);
}