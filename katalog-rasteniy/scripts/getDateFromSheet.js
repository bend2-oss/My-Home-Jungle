export default () => {
    const req = fetch('https://docs.google.com/spreadsheets/d/1ZEfkUo6ltC3mZqtPbZ82A5v4Fp0xH4IWoZkeRbXjX-w/edit?usp=sharing');
        req
        .then(res => res.json())
        .then(res => console.log(res));
};
