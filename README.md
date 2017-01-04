# gym-server


function getRootRef(category) {
	wilddog.sync().ref('/users/user-guild-1/traings/' + category + '/traings')
}

function addWorkout(category, traing) {
	getRootRef(category).push(traing)
}

function updateWorkout(category, index, traing) {
	getRootRef(category).child(index).update(training)
}

function removeWorkout(category, index) {
	getRootRef(category).child(index).remove()
}

function addExercise() {

}

function updateExercise() {

}

function removeExercise() {

}

//workout property
title
description
workouts: []



