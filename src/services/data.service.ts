/* eslint-disable import/no-anonymous-default-export */

import config from "../config"

export default {
    getFiles,
}

function getFiles() {
    return fetch(`${config.baseUrl}/model-checks`)
        .then(data => data.json())
}