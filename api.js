const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a1dba51942mshc0813760f8e3b18p1e843cjsn091903dbcd9e',
        'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
}

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.log(err))
}

//Acortar el query
const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

//Manejar el evento del submit
$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const { value } = $input
    //sin valor no hace nada
    if (!value) return

    $submit.setAttribute('disable', '')//Desactiva el boton
    $submit.setAttribute('aria-busy', 'true')

    //Información de la ip
    const IpInfo = await fetchIpInfo(value)

    if (IpInfo) {
        $results.innerHTML = JSON.stringify(IpInfo, null, 2);
    }

    $submit.removeAttribute('disable')
    $submit.removeAttribute('aria-busy', 'true')



})
