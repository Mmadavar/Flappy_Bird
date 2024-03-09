const {createApp} = Vue;

createApp({
    data() {
        return {
            shift: -10,
            boardwidth: 360,
            boardHeight: 640,
            birdYPosition: 300,
            counter: 0,
            HighScore: db.collection('HighScore').doc('joG9au130hR9kE7nBdJp'),
            bird: document.getElementById("bird"),
            pipe: document.getElementById("pipe"),
            end: document.getElementById("end"),
            showEndBox: false,
            active: true
        }
    }, methods: {

        endgame: function() {
           this.showEndBox = false;
        },

        startGame: function() {
                window.setInterval(this.gravity, 300);
                this.endgame();

        },

        duringGame: function() {
            window.setInterval(this.pipe, 1500)
        },

        render: function() {
            this.duringGame()
            this.placepipe()
            this.movebird()
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

        placepipe: function() {

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

