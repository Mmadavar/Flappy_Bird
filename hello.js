const {createApp} = Vue;

createApp({
    data() {
        return {

            boardwidth: 360,
            boardHeight: 600,
            birdYPosition: 300,
            PipeXPosition: 360,
            pipeYPosition: 600,
            gapsize: 150,
            score: 0,
            bird: document.getElementById("bird"),
            pipe: document.getElementById("pipe"),
            end: document.getElementById("end"),
            active: true,
            show: false,
            gravityInterval: null,
            movepipeInterval: null,
            scoreForm: document.getElementById("scoreForm")
        }
    }, methods: {

        endgame: function() {
           if (this.birdYPosition < 0 || this.birdYPosition > 360) {
               this.show = true;
               console.log("Game is over")
               this.gameover();
               return null;

           } else if (this.PipeXPosition <= 0) {
               this.score += 1

           }
        },

        gameover: function() {
            window.clearInterval(this.gravityInterval);
            window.clearInterval(this.movepipeInterval);
        },

        startGame: function() {
                this.gravityInterval = window.setInterval(this.gravity, 200);
                window.setInterval(this.endgame, 100);
                this.movepipeInterval = window.setInterval(this.movePipe, 20);
        },

        storescore: function() {
            this.scoreForm.addEventListener("submit", e => {
                e.preventDefault();

                let name = this.scoreForm.name.value = '';

                console.log("adding")
                db.collection('HighScore').add({
                    'name': name,
                    'HighScore': this.score
                })
            })
        },


        movebird: function() {

            this.birdYPosition += 15;

            //const bird = document.getElementById("bird");
           // this.birdYPosition -= this.shift
            //this.updatebirdup(bird)

        },

        gravity: function() {
            //simulate gravity
            this.birdYPosition += -7
            //this.updateBirdPosition();
        },

        updateBirdPosition: function() {
            this.bird.style.bottom = `${this.birdYPosition}`
        },

        topPipeHeight: function() {
            return
        },

        movePipe: function() {

                this.PipeXPosition -= 1.5

                if (this.PipeXPosition === 0) {
                    this.PipeXPosition = 600
                }
        }

    }
}).mount("#app")


//let highscoredatabase = store // still setting up firebase
 //let arr = [[]] // initializing the 2d array
 //let counter = 0; //counter
//let bird = document.getElementById("bird");
//let pipe = document.getElementById("pipe");
//let end = document.getElementById("end");

 //if (counter >= highscoredatabase) {
     //highscoredatabase = counter;
 //}
//function duringGame() {
    /*if (bird crosses pipe) {
        counter += 1
    } else if (bird[arr location] hits pipe) {
        EndGame()
    }*/
//}

 //function EndGame() {

 //}

 //function render() {
    // arr.append.random(bird) //thinking about putting the bird at a random spot in the 2d array
    // arr.append.random(pipe) //thinking about putting the pipes at a spot in the 2-d array
 //}

