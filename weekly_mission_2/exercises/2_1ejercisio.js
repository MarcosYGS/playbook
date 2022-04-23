const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   console.log("This are the exploren's names")
   explorers.forEach((element) => console.log(element.name))

   console.log("This are the exploren's stacks")
   explorers.forEach((element) => console.log(element.stack))


   

   

console.log("stacks en otras listas")
const names = explorers.map(namee => namee.stack)
console.log(names)

console.log("filtrando con js")
const whith_js = explorers.filter(listt => listt.stack.includes("js"))
console.log(whith_js)


const lugar = explorers.find((city) => city = "CDMX")
console.log("primer explorer de la CDMX")
console.log(lugar)


console.log("suma de los ejersicios completos")
const ejersicios = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log(ejersicios)


const conf = explorers.some((b) =>  b.missions.frontend.exercisesFinished === true)
console.log("confirmacion de los ejersicios de la mision fronter:")
console.log(conf)


const fin = explorers.every((name) => typeof name.missions.onboarding.isFinished === true) // every

console.log("confirmacion de la terminacion de la mision onbording:")
console.log(fin)

