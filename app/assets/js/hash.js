const main = document.querySelector('main')

const input = main.querySelector('section[input]')
const input_input = input.querySelector('input')

const md4 = main.querySelector('section[md4]')
const md4_h3 = md4.querySelector('h3')
const md4_input = md4.querySelector('input')

const md5 = main.querySelector('section[md5]')
const md5_h3 = md5.querySelector('h3')
const md5_input = md5.querySelector('input')

const ripemd160 = main.querySelector('section[ripemd160]')
const ripemd160_h3 = ripemd160.querySelector('h3')
const ripemd160_input = ripemd160.querySelector('input')

const sha1 = main.querySelector('section[sha1]')
const sha1_h3 = sha1.querySelector('h3')
const sha1_input = sha1.querySelector('input')

const sha224 = main.querySelector('section[sha224]')
const sha224_h3 = sha224.querySelector('h3')
const sha224_input = sha224.querySelector('input')

const sha256 = main.querySelector('section[sha256]')
const sha256_h3 = sha256.querySelector('h3')
const sha256_input = sha256.querySelector('input')

const sha384 = main.querySelector('section[sha384]')
const sha384_h3 = sha384.querySelector('h3')
const sha384_input = sha384.querySelector('input')

const sha512 = main.querySelector('section[sha512]')
const sha512_h3 = sha512.querySelector('h3')
const sha512_input = sha512.querySelector('input')

const sha512256 = main.querySelector('section[sha512256]')
const sha512256_h3 = sha512256.querySelector('h3')
const sha512256_input = sha512256.querySelector('input')


export function loadMe() {
    input_input.addEventListener('input', _ => updateHash())
    md4_h3.addEventListener('click', _ => window.utils.openExternal(md4_h3.getAttribute('url')))
    md4.addEventListener('click', (e) => { if (e.target == md4_input) copyToClipboard(md4_h3.textContent, md4_input.value) })
    md5_h3.addEventListener('click', _ => window.utils.openExternal(md5_h3.getAttribute('url')))
    md5.addEventListener('click', (e) => { if (e.target == md5_input) copyToClipboard(md5_h3.textContent, md5_input.value) })
    ripemd160_h3.addEventListener('click', _ => window.utils.openExternal(ripemd160_h3.getAttribute('url')))
    ripemd160.addEventListener('click', (e) => { if (e.target == ripemd160_input) copyToClipboard(ripemd160_h3.textContent, ripemd160_input.value) })
    sha1_h3.addEventListener('click', _ => window.utils.openExternal(sha1_h3.getAttribute('url')))
    sha1.addEventListener('click', (e) => { if (e.target == sha1_input) copyToClipboard(sha1_h3.textContent, sha1_input.value) })
    sha224_h3.addEventListener('click', _ => window.utils.openExternal(sha224_h3.getAttribute('url')))
    sha224.addEventListener('click', (e) => { if (e.target == sha224_input) copyToClipboard(sha224_h3.textContent, sha224_input.value) })
    sha256_h3.addEventListener('click', _ => window.utils.openExternal(sha256_h3.getAttribute('url')))
    sha256.addEventListener('click', (e) => { if (e.target == sha256_input) copyToClipboard(sha256_h3.textContent, sha256_input.value) })
    sha384_h3.addEventListener('click', _ => window.utils.openExternal(sha384_h3.getAttribute('url')))
    sha384.addEventListener('click', (e) => { if (e.target == sha384_input) copyToClipboard(sha384_h3.textContent, sha384_input.value) })
    sha512_h3.addEventListener('click', _ => window.utils.openExternal(sha512_h3.getAttribute('url')))
    sha512.addEventListener('click', (e) => { if (e.target == sha512_input) copyToClipboard(sha512_h3.textContent, sha512_input.value) })
    sha512256_h3.addEventListener('click', _ => window.utils.openExternal(sha512256_h3.getAttribute('url')))
    sha512256.addEventListener('click', (e) => { if (e.target == sha512256_input) copyToClipboard(sha512256_h3.textContent, sha512256_input.value) })
}

async function updateHash() {
    const value = input_input.value
    const isEmpty = value.trim() == '' || value.trim() == null

    var copy = false
    if (isEmpty) copy = false
    else copy = true

    if (copy) {
        md4_input.title = 'Click me to copy to clipboard'
        md4_input.value = await window.hashing.md4(value)
        md4_input.setAttribute('copy', '')
    } else {
        md4_input.title = ''
        md4_input.value = null
        md4_input.removeAttribute('copy')
    }

    if (copy) {
        md5_input.title = 'Click me to copy to clipboard'
        md5_input.value = await window.hashing.md5(value)
        md5_input.setAttribute('copy', '')
    } else {
        md5_input.title = ''
        md5_input.value = null
        md5_input.removeAttribute('copy')
    }

    if (copy) {
        ripemd160_input.title = 'Click me to copy to clipboard'
        ripemd160_input.value = await window.hashing.ripemd160(value)
        ripemd160_input.setAttribute('copy', '')
    } else {
        ripemd160_input.title = ''
        ripemd160_input.value = null
        ripemd160_input.removeAttribute('copy')
    }

    if (copy) {
        sha1_input.title = 'Click me to copy to clipboard'
        sha1_input.value = await window.hashing.sha1(value)
        sha1_input.setAttribute('copy', '')
    } else {
        sha1_input.title = ''
        sha1_input.value = null
        sha1_input.removeAttribute('copy')
    }

    if (copy) {
        sha224_input.title = 'Click me to copy to clipboard'
        sha224_input.value = await window.hashing.sha224(value)
        sha224_input.setAttribute('copy', '')
    } else {
        sha224_input.title = ''
        sha224_input.value = null
        sha224_input.removeAttribute('copy')
    }

    if (copy) {
        sha256_input.title = 'Click me to copy to clipboard'
        sha256_input.value = await window.hashing.sha256(value)
        sha256_input.setAttribute('copy', '')
    } else {
        sha256_input.title = ''
        sha256_input.value = null
        sha256_input.removeAttribute('copy')
    }

    if (copy) {
        sha384_input.title = 'Click me to copy to clipboard'
        sha384_input.value = await window.hashing.sha384(value)
        sha384_input.setAttribute('copy', '')
    }
    else {
        sha384_input.value = null
        sha384_input.title = ''
        sha384_input.removeAttribute('copy')
    }

    if (copy) {
        sha512_input.title = 'Click me to copy to clipboard'
        sha512_input.value = await window.hashing.sha512(value)
        sha512_input.setAttribute('copy', '')
    } else {
        sha512_input.title = ''
        sha512_input.value = null
        sha512_input.removeAttribute('copy')
    }

    if (copy) {
        sha512256_input.title = 'Click me to copy to clipboard'
        sha512256_input.value = await window.hashing.sha512256(value)
        sha512256_input.setAttribute('copy', '')
    } else {
        sha512256_input.title = ''
        sha512256_input.value = null
        sha512256_input.removeAttribute('copy')
    }
}

function copyToClipboard(a, b) {
    if (!b) return
    try {
        navigator.clipboard.writeText(b)
        tnToast.success(`Copied "${a}" to Clipboard !`)
    } catch (error) { tnToast.error(`Something went wrong when copying "${a}" to Clipboard.`) }
}