document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const name = document.querySelector('input').value
    try{
        const response = await fetch(`https://star-trek-api.onrender.com/api/${name}`)
        const data =  await response.json()
        console.log(data)
        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeworld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExamples
        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    } catch{
        console.log(error)
    }
}
