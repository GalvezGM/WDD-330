const exercises = [{
        id: 'exercise-1',
        completed: false,
        duration: 30,
    },
    {
        id: 'exercise-2',
        completed: false,
        duration: 45,
    },
    {
        id: 'exercise-3',
        completed: false,
        duration: 30,
    },
    {
        id: 'exercise-4',
        completed: false,
        duration: 45,
    },
    {
        id: 'exercise-5',
        completed: false,
        duration: 30,
    },
    {
        id: 'exercise-6',
        completed: false,
        duration: 30,
    },
    {
        id: 'exercise-7',
        completed: false,
        duration: 45,
    },
    {
        id: 'exercise-8',
        completed: false,
        duration: 30,
    },
    {
        id: 'exercise-9',
        completed: false,
        duration: 45,
    },
    {
        id: 'exercise-10',
        completed: false,
        duration: 60,
    }
]

function updateleft(exercises) {
    const totalExercisedTd = document.getElementById('total-exercised')
    const percentageCompletedTd = document.getElementById('percentage-completed')

    const completedExercises = exercises.filter(exercise => exercise.completed)

    let totalExercised = 0
    for (let i = 0; i < completedExercises.length; i++) {
        totalExercised += completedExercises[i].duration
    }

    totalExercisedTd.innerHTML = totalExercised
    percentageCompletedTd.innerHTML = (completedExercises.length / exercises.length * 100) + '%'
}

exercises.forEach(function(exercise) {
    const btn = document.getElementById(exercise.id)
    btn.onclick = function() {
        if (exercise.completed) {
            btn.classList.remove('fas', 'fa-check-circle')
            btn.classList.add('far', 'fa-circle')
        } else {
            btn.classList.remove('far', 'fa-circle')
            btn.classList.add('fas', 'fa-check-circle')
        }
        exercise.completed = !exercise.completed
        updateleft(exercises)
    }
})

function computeBmi() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    var bmi = (703 * weight) / Math.pow(height, 2);
    bmi = bmi.toFixed(2);

    localStorage.setItem("BMI", bmi);
    return bmi;
}

function displayBmi() {
    if (computeBmi() < 20) {
        document.getElementById('output').innerHTML = computeBmi() + " You are Underweight";
    } else if (computeBmi() >= 20 && computeBmi() < 24) {
        document.getElementById('output').innerHTML = computeBmi() + " You are Healthy";
    } else if (computeBmi() > 24 && computeBmi() < 29) {
        document.getElementById('output').innerHTML = computeBmi() + " You are Overweight";
    } else if (computeBmi() > 29 && computeBmi() < 40) {
        document.getElementById('output').innerHTML = computeBmi() + " You are Obese";
    } else if (computeBmi() > 40) {
        document.getElementById('output').innerHTML = computeBmi() + " You are Morbidly Obese";
    } else {
        document.getElementById('output').innerHTML = "Invalid Input";
    }


}

function getExerciseTime() {

    var exerciseTime = parseFloat(document.getElementById('exerciseTime').value);
    localStorage.setItem("TotalExerciseTime", exerciseTime);
    var weight = parseFloat(document.getElementById('weight').value);


    var waterIntakeNoExercise = weight * 2 / 3;
    waterIntakeExercise = waterIntakeNoExercise.toFixed(2);
    localStorage.setItem("WaterAmountNoExercise", waterIntakeNoExercise);
    var waterIntakeExercise = (exerciseTime / 30 * 12) + waterIntakeNoExercise;
    waterIntakeExercise = waterIntakeExercise.toFixed(2);
    localStorage.setItem("WaterAmountExercise", waterIntakeExercise);



    document.getElementById('additionalOutput').innerHTML = "Water intake needed with no exercise (in ounces): " + localStorage.getItem("WaterAmountNoExercise") + "<br/>" +
        "Water intake needed with exercise (in ounces): " + localStorage.getItem("WaterAmountExercise") + "<br/>";

}

function getWaterIntakeExercise() {
    var exerciseTime = parseFloat(document.getElementById('exerciseTime').value);
    var waterIntakeExercise = (exerciseTime / 100) * computeBmi();
    waterIntakeExercise = waterIntakeExercise.toFixed(2);
    return waterIntakeExercise;
}

function getWaterIntakeNoExercise() {
    var entertainment = parseFloat(document.getElementById('entertainment').value);
    var waterIntakeNoExercise = (entertainment / 100) * computeBmi();
    waterIntakeNoExercise = waterIntakeNoExercise.toFixed(2);
    return waterIntakeNoExercise;
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}

if (localStorage.getItem("BMI") === null) {
    localStorage.style.display === "none";
} else {

    document.getElementById("localStorage").innerHTML = "BMI: " + localStorage.getItem("BMI") + "<br/>" +
        "Alloted time for exercise (in minutes): " + localStorage.getItem("WaterAmountExercise") + "<br/>" +
        "Water intake needed with no exercise (in ounces): " + localStorage.getItem("WaterAmountNoExercise") + "<br/>" +
        "Water intake needed with exercise (in ounces): " + localStorage.getItem("WaterAmountExercise") + "<br/>";
}