const prodEnv = {
    apiEndpoint: "https://stark-taiga-89857.herokuapp.com/"
}
const devEnv = {
    //apiEndpoint: "https://stark-taiga-89857.herokuapp.com/"
    apiEndpoint: 'http://localhost:8000/'
}

module.exports = process.env.NODE_ENV === 'development' ? devEnv : prodEnv
