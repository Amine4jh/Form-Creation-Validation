async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const dataContainer = document.getElementById("api-data")
    try {
        const response = await fetch(apiUrl)
        const users = await response.json()
        dataContainer.innerHTML = ""
        const userList = document.createElement("ul")
        users.forEach(e => {
            const listElement = document.createElement("li")
            listElement.textContent = e.name
            userList.appendChild(listElement)
        })
        dataContainer.appendChild(userList)
    } catch {
        dataContainer.innerHTML = ""
        dataContainer.textContent = "Failed to load user data."
    }
}

document.addEventListener("DOMContentLoaded", fetchUserData)
