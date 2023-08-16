document.getElementById("metabolic-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;
    const goal = document.getElementById("goal").value;

    let basalCalories = 0;

    if (gender === "male") {
        basalCalories = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
        basalCalories = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let suggestedCalories = basalCalories;

    if (gender === "male") {
        if (goal === "recomposition") {
            suggestedCalories += 500;
        } else if (goal === "weight_gain") {
            suggestedCalories *= 1.5;
        }
    } else if (gender === "female") {
        if (goal === "recomposition") {
            suggestedCalories += 200;
        } else if (goal === "weight_gain") {
            suggestedCalories *= 1.4;
        }
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Sua taxa metabólica basal é: ${basalCalories.toFixed(2)} calorias por dia. `;
    
    if (goal === "weight_loss") {
        resultElement.innerHTML += `Para emagrecimento, sugerimos seguir uma dieta com ${suggestedCalories.toFixed(2)} calorias.`;
    } else if (goal === "recomposition") {
        resultElement.innerHTML += `Para recomposição, sugerimos seguir uma dieta com ${suggestedCalories.toFixed(2)} calorias.`;
    } else if (goal === "weight_gain") {
        resultElement.innerHTML += `Para ganho de peso, sugerimos seguir uma dieta com ${suggestedCalories.toFixed(2)} calorias.`;
    }
});