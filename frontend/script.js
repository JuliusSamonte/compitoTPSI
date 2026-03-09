const API = "http://localhost:3000/api/items"

async function load() {

    const res = await fetch(API)

    const data = await res.json()

    const list = document.getElementById("list")

    list.innerHTML = ""

    data.forEach(item => {

        const li = document.createElement("li")

        li.textContent = item.name

        list.appendChild(li)

    })
}